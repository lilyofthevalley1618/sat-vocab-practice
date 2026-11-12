// Pure practice logic (no DOM) — tested in test.js
const DAY = 864e5;
const INTERVALS = [1, 3, 7, 14, 30]; // days
const UNIT_SIZE = 10;

function makeUnits(words, size = UNIT_SIZE) {
  const units = [];
  for (let i = 0; i < words.length; i += size) units.push(words.slice(i, i + size));
  return units;
}
const key = w => w.w.toLowerCase();

// Record an answer. Correct: move up one interval. Wrong: back to the first (1-day) step.
function grade(prog, word, correct, now = Date.now()) {
  const k = typeof word === 'string' ? word.toLowerCase() : key(word);
  const p = prog[k] || { stage: -1, due: 0, right: 0, wrong: 0, lapses: 0 };
  if (correct) {
    p.stage = Math.min(p.stage + 1, INTERVALS.length - 1);
    p.right++;
  } else {
    if (p.stage >= 0) p.lapses++;
    p.stage = 0;
    p.wrong++;
  }
  p.due = now + INTERVALS[p.stage] * DAY;
  p.last = now;
  prog[k] = p;
  return p;
}
const isNew = (prog, w) => !prog[key(w)];
const dueWords = (prog, words, now = Date.now()) =>
  words.filter(w => prog[key(w)] && prog[key(w)].due <= now).sort((a, b) => prog[key(a)].due - prog[key(b)].due);
function weakWords(prog, words, n = Infinity) {
  return words.filter(w => prog[key(w)] && prog[key(w)].wrong > 0)
    .sort((a, b) => score(prog[key(b)]) - score(prog[key(a)])).slice(0, n);
}
const score = p => (p.wrong + p.lapses) / (p.right + p.wrong + 1);

function normalize(s) { return s.toLowerCase().replace(/[^a-z]/g, ''); }
function typedForms(word) {
  const w = word.w, forms = new Set([normalize(w)]);
  for (const form of ['past', 'ing', 's']) {
    forms.add(normalize(inflectForm(w, form)));
    forms.add(normalize(inflectForm(w.toLowerCase(), form)));
  }
  const k = w.toLowerCase();
  // Accept doubled-consonant -ed/-ing (admitted) when the base is a short CVC.
  if (/[^aeiou][aeiou][^aeiouwxy]$/.test(k) && !/[aeiou]{2}[^aeiou]$/.test(k)) {
    const d = k + k.slice(-1);
    forms.add(normalize(d + 'ed')); forms.add(normalize(d + 'ing'));
  }
  return forms;
}
function checkTyped(answer, word) { return typedForms(word).has(normalize(answer || '')); }

function shuffle(a, rnd = Math.random) {
  a = a.slice();
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
// Words whose meanings overlap enough that one could reasonably be picked for the other.
// They are never shown as wrong options for each other.
const CONFUSABLE = [['Acceptable', 'Adequate', 'Appropriate'], ['Adapt', 'Adjust', 'Accommodate'], ['Aggressive', 'Antagonistic'],
  ['Abate', 'Ameliorate'], ['Aggravate', 'Amplify'], ['Abstract', 'Arcane'], ['Abrupt', 'Accidental'], ['Accuracy', 'Approximate'],
  ['Acknowledge', 'Announce'], ['Advise', 'Announce'], ['Advantageous', 'Beneficial'], ['Abysmal', 'Arduous'], ['Adept', 'Adequate']];
const STOP = new Set('the and for with that this from into than something someone being about such have having make more less very easily often able other others their your what when which while without through over under used state quality act person things thing done give take'.split(' '));
const content = d => new Set(d.toLowerCase().replace(/[^a-z ]/g, ' ').split(/\s+/).filter(t => t.length > 3 && !STOP.has(t)).map(t => t.slice(0, 5)));
// Overlap: listed pair, one word's name inside the other's definition, or definitions sharing a meaningful word.
const confusable = (a, b) => {
  if (CONFUSABLE.some(g => g.includes(a.w) && g.includes(b.w))) return true;
  const stem = w => w.w.toLowerCase().slice(0, 6);
  if (b.d.toLowerCase().includes(stem(a)) || a.d.toLowerCase().includes(stem(b))) return true;
  const ca = content(a.d); for (const t of content(b.d)) if (ca.has(t)) return true;
  return false;
};
// Distractors: prefer same part of speech so options look plausible.
function choices(word, all, n = 4, rnd = Math.random) {
  const seenD = new Set([word.d.toLowerCase()]), seenW = new Set([key(word)]);
  const others = shuffle(all, rnd).filter(w => {
    const d = w.d.toLowerCase();
    if (seenW.has(key(w)) || seenD.has(d) || confusable(word, w)) return false;
    seenW.add(key(w)); seenD.add(d); return true;
  });
  const pool2 = others; // never fall back to overlapping words; tiny pools just get fewer options
  const same = shuffle(pool2.filter(w => w.p === word.p), rnd);
  const rest = shuffle(pool2.filter(w => w.p !== word.p), rnd);
  return shuffle([word, ...same.concat(rest).slice(0, n - 1)], rnd);
}

// Question types for a session. Intro (unit learn) quizzes alternate the two
// multiple-choice directions so both appear; other sessions also mix in typed recall.
// Learning path: Unit, Unit, pair fill-in review (just those two units), cumulative review (all words so far);
// after every 6 units a 60-word Big Test; Final Test after the last unit. An unpaired last unit gets its own pair review.
function makePath(units) {
  const path = [];
  units.forEach((u, i) => {
    // Unit quizzes draw wrong answers from the unit pair (Units 1+2, 3+4, ...; Unit 39 alone).
    const pool = units.slice(i - (i % 2), i - (i % 2) + 2).flat();
    path.push({ type: 'unit', id: 'u' + i, i, words: u, pool });
    // Fill-in review of only the two units just finished (or the last unit alone if it has no partner).
    if (i % 2 === 1 || (i === units.length - 1 && i % 2 === 0)) {
      const a = (i % 2 === 1) ? i - 1 : i, b = i, words = units.slice(a, b + 1).flat();
      path.push({ type: 'pair', id: 'pr' + a, a, b, from: a, to: b, words, pool: words });
    }
    // Cumulative review: every word from Unit 1 through this unit (id kept as before so saved unlocks still match).
    if (i % 2 === 1) path.push({ type: 'review', id: 'r' + (i - 1), a: 0, b: i, words: units.slice(0, i + 1).flat() });
    if (i % 6 === 5) path.push({ type: 'big', id: 'b' + (i + 1) / 6, n: (i + 1) / 6, from: i - 5, to: i, words: units.slice(i - 5, i + 1).flat() });
  });
  path.push({ type: 'final', id: 'final', words: units.flat() });
  return path;
}
// If a user already unlocked a later step, grant any new pair reviews behind that point so
// already-opened units stay open. Those pair reviews remain available to take or retake.
function migratePairUnlocks(path, gate, now = Date.now()) {
  if (!gate || !path) return false;
  gate.passed = gate.passed || {};
  let latest = -1;
  path.forEach((it, idx) => { if (gate.passed[it.id]) latest = idx; });
  let changed = false;
  path.forEach((it, idx) => {
    if (it.type === 'pair' && !gate.passed[it.id] && latest > idx) { gate.passed[it.id] = now; changed = true; }
  });
  return changed;
}
// Gate: stage n is open only when the stage before it was passed with 100% first-try accuracy.
// Passing is permanent (later mistakes never relock).
function newGate() { return { passed: {}, best: {}, resume: {} }; }
function isUnlocked(path, idx, gate) { return idx === 0 || !!(gate.passed[path[idx - 1].id]); }
function recordAttempt(gate, id, total, firstTryMisses, now = Date.now()) {
  const pct = total ? Math.round((total - firstTryMisses) / total * 100) : 0;
  gate.best[id] = Math.max(gate.best[id] || 0, pct);
  const perfect = total > 0 && firstTryMisses === 0;
  if (perfect && !gate.passed[id]) gate.passed[id] = now;
  return { pct, perfect };
}
// Quiz session (serializable for pause/resume). First answer per word is what counts; misses retry later.
function newSession(keys, rnd = Math.random) {
  return { keys: keys.slice(), queue: shuffle(keys, rnd).map(k => ({ k, retry: false })), total: keys.length, done: 0, qi: 0, missed: [], seen: [] };
}
// A saved session is only resumed if it still matches the stage's word list.
function validResume(s, words) {
  if (!s || !Array.isArray(s.queue) || !Array.isArray(s.seen) || s.total !== words.length) return false;
  const ks = new Set(words.map(key)); return s.queue.every(q => ks.has(q.k)) && s.seen.every(k => ks.has(k));
}
// After JSON/localStorage, re-attach word object identity so option === word still works.
function rehydrateQuestion(q, byKey) {
  if (!q || !q.w) return q;
  const resolve = w => (w && byKey[key(w)]) || w;
  const w = resolve(q.w);
  const options = Array.isArray(q.options) ? q.options.map(o => {
    if (!o || typeof o === 'string') return o;
    if (o.fill != null) return Object.assign({}, o, { w: resolve(o.w) });
    return resolve(o);
  }) : q.options;
  return Object.assign({}, q, { w, options });
}
function rehydrateSession(s, byKey) {
  if (!s) return s;
  if (s.curQ && s.curQ.q) s.curQ.q = rehydrateQuestion(s.curQ.q, byKey);
  return s;
}
// Drop only an in-progress attempt. Never touches passed, best, or word progress.
function clearResume(owner, id) {
  if (owner && owner.resume && id) delete owner.resume[id];
  return owner;
}
// Daily Review: each Pacific calendar day, words started before that day must be
// reviewed at 90% or higher on the first try in both parts before the path can continue.
const DAILY_PASS = 90;
// Grammar practice: best first-try score per topic; never lowered.
function recordGrammar(g, id, total, right) { const pct = Math.round(right / total * 100), p = g[id] || { best: 0, tries: 0 }; p.tries++; p.best = Math.max(p.best, pct); g[id] = p; return pct; }
// Wrong-answer explanation built only from the question's own word/definition data.
// Returns plain text pieces; the UI escapes them.
function explainWrong(type, target, chosen, typed, allWords) {
  const T = `"${target.w}" means: ${target.d}.`;
  if (type === 'word2def' && chosen) {
    if (chosen.d.toLowerCase() === target.d.toLowerCase()) return `That definition also fits "${target.w}". ${T}`;
    return `The definition you picked ("${chosen.d}") is the meaning of "${chosen.w}", not "${target.w}". ${T}`;
  }
  if (type === 'def2word' && chosen) {
    if (chosen.d.toLowerCase() === target.d.toLowerCase()) return `"${chosen.w}" has the same listed definition. The expected answer was "${target.w}".`;
    return `You picked "${chosen.w}", which means: ${chosen.d}. The definition shown ("${target.d}") belongs to "${target.w}".`;
  }
  if (type === 'cloze' && chosen) {
    if (chosen.d.toLowerCase() === target.d.toLowerCase() && chosen.w.toLowerCase() !== target.w.toLowerCase())
      return `"${chosen.w}" is listed with a similar meaning, but the sentence is written for "${target.w}": ${target.d}`;
    return `You picked "${chosen.w}", which means: ${chosen.d} The sentence needs a word meaning "${target.d}": "${target.w}".`;
  }
  if (type === 'type') {
    const n = normalize(typed || '');
    if (!n) return `No answer was entered. The word is "${target.w}". ${T}`;
    const known = (allWords || []).find(w => normalize(w.w) === n);
    if (known) return `You typed "${known.w}", which means: ${known.d}. The word for this definition is "${target.w}".`;
    return `"${typed.trim()}" isn't the word for this definition (spelling counts). The answer is "${target.w}". ${T}`;
  }
  if (type === 'typeDef') {
    if (!(typed || '').trim()) return `No answer was entered. "${target.w}" means: ${target.d}`;
    return `The official definition of "${target.w}" is: ${target.d}`;
  }
  return T;
}
const DING_PARTIALS = [[1568, 0.09], [3136, 0.025], [4704, 0.01]]; // Hz, peak gain
// Short soft "ding" via Web Audio. Never throws; returns true if a sound was scheduled.
function playDing(enabled, getCtx) {
  if (!enabled) return false;
  try {
    const ctx = getCtx && getCtx(); if (!ctx) return false;
    if (ctx.state === 'suspended' && ctx.resume) ctx.resume().catch(() => {});
    // Light bell: G6 fundamental + soft upper partials, 5 ms attack, ~0.4 s decay.
    const t = ctx.currentTime, END = 0.4;
    for (const [f, peak] of DING_PARTIALS) {
      const g = ctx.createGain(); g.connect(ctx.destination);
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(peak, t + 0.005); g.gain.exponentialRampToValueAtTime(0.0001, t + END);
      const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.setValueAtTime(f, t); o.connect(g); o.start(t); o.stop(t + END + 0.02);
    }
    return true;
  } catch (e) { return false; }
}
// HTML-escape an example sentence and wrap the vocab word (and its endings, e.g. "abated") in <mark>.
function escHtml(s) { return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }
function markExample(e, word) {
  // Match inflected forms too (abated, withdrew) by using the word minus its last two letters (min 4).
  const w = word.w.toLowerCase().replace(/[^a-z]/g, ''), stem = w.slice(0, Math.max(4, w.length - 2));
  const alt = { foretell: 'foretold', overcome: 'overcam' }[w];
  return escHtml(e).replace(new RegExp('\\b(' + stem + (alt ? '|' + alt : '') + ')([a-z]*)', 'gi'), '<mark>$1$2</mark>').replace(/\n/g, '<br>');
}
function laDay(now = Date.now()) {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Los_Angeles', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date(now));
}
function ensureDaily(gate, prog, now = Date.now()) {
  const d = laDay(now);
  if (!gate.daily || gate.daily.day !== d) {
    const words = Object.keys(prog).sort();
    gate.daily = { day: d, words, passed: words.length === 0, part1: false };
    if (gate.resume) { delete gate.resume.daily; delete gate.resume.daily2; }
    return true;
  }
  return false;
}
const dailyBlocks = gate => !!(gate.daily && !gate.daily.passed);
function recordDaily(gate, day, total, firstTryMisses, part = 1) {
  if (!gate.daily || gate.daily.day !== day) return { perfect: false, stale: true, part };
  const pct = total ? Math.round((total - firstTryMisses) / total * 100) : 0;
  const perfect = total > 0 && pct >= DAILY_PASS;
  if (part === 1) {
    gate.daily.part1 = perfect;
    if (!perfect) gate.daily.passed = false;
  } else if (part === 2) {
    if (perfect && gate.daily.part1) gate.daily.passed = true;
    else gate.daily.passed = false;
  }
  return { pct, perfect, part };
}
// Every weak word (missed at least once), no cap.
const allWeak = (prog, words) => words.filter(w => prog[key(w)] && prog[key(w)].wrong > 0);
// Review/Daily word list = base range plus all weak words, de-duplicated, in base order then weak.
function withWeak(base, prog, words) { const seen = new Set(base.map(key)); return base.concat(allWeak(prog, words).filter(w => !seen.has(key(w)) && seen.add(key(w)))); }
// Reviews resume from their own saved snapshot as long as it still covers the base range.
function resumeSnapshot(s, base, byKey) {
  if (!s || !Array.isArray(s.keys) || !Array.isArray(s.queue) || s.total !== s.keys.length || !s.keys.every(k => byKey[k])) return null;
  const ks = new Set(s.keys); if (!base.every(w => ks.has(key(w))) || !s.queue.every(q => ks.has(q.k))) return null;
  return s.keys.map(k => byKey[k]);
}
function answerSession(s, correct) {
  const { k } = s.queue.shift(); s.qi++;
  if (!s.seen.includes(k)) { s.seen.push(k); if (!correct) s.missed.push(k); }
  if (correct) s.done++; else s.queue.splice(Math.min(3, s.queue.length), 0, { k, retry: true });
  return s.queue.length === 0;
}
// One question for a path stage. Options are rebuilt on every render (never stored), so resumed sessions use current pools.
// The unit a word belongs to (used as the distractor pool for optional Practice words).
function unitWords(word, units) {
  const k = key(word);
  return (units || []).find(u => u.some(w => key(w) === k)) || [word];
}
function buildQuestion(stage, k, qi, byKey, rnd = Math.random) {
  const w = byKey[k], type = ['word2def', 'def2word'][qi % 2];
  return { w, type, options: choices(w, stage.pool || stage.words, 4, rnd) };
}
function quizTypes(n, intro, rnd = Math.random) {
  const off = Math.floor(rnd() * 2);
  return Array.from({ length: n }, (_, i) => intro ? ['word2def', 'def2word'][(i + off) % 2] : ['def2word', 'word2def', 'type'][Math.floor(rnd() * 3)]);
}

// Daily Review Part 2: half of today's words (round up, at least 1), fill-in sentences.
const halfCount = n => Math.max(1, Math.ceil(n / 2));
function pickHalf(keys, rnd = Math.random) { return shuffle(keys, rnd).slice(0, halfCount(keys.length)); }
function pickCloze(items, last, rnd = Math.random) {
  const opts = (last != null && items.length > 1) ? items.filter((_, i) => i !== last) : items;
  const item = opts[Math.floor(rnd() * opts.length)];
  return { ...item, i: items.indexOf(item) };
}
const IRREG = { withdraw: { past: 'withdrew', ing: 'withdrawing', s: 'withdraws' }, foretell: { past: 'foretold', ing: 'foretelling', s: 'foretells' }, overcome: { past: 'overcame', ing: 'overcoming', s: 'overcomes' } };
function inflectForm(head, form) {
  const h = head, k = head.toLowerCase();
  if (IRREG[k] && IRREG[k][form]) return IRREG[k][form];
  if (form === 'base') return h;
  if (form === 'past') {
    if (/e$/i.test(h)) return h + 'd';
    if (/[^aeiou]y$/i.test(h)) return h.slice(0, -1) + 'ied';
    return h + 'ed';
  }
  if (form === 'ing') {
    if (/ie$/i.test(h)) return h.slice(0, -2) + 'ying';
    if (/e$/i.test(h) && !/ee$/i.test(h)) return h.slice(0, -1) + 'ing';
    return h + 'ing';
  }
  if (form === 's') {
    if (/(s|x|z|ch|sh)$/i.test(h)) return h + 'es';
    if (/[^aeiou]y$/i.test(h)) return h.slice(0, -1) + 'ies';
    return h + 's';
  }
  return h;
}
function inferForm(fill, head) {
  const f = fill, h = head;
  if (f === h || f.toLowerCase() === h.toLowerCase()) return f[0] === f[0].toUpperCase() && f !== f.toLowerCase() && f[0] === h[0] ? 'head' : (f === h.toLowerCase() ? 'lower' : 'head');
  if (f === inflectForm(h, 'past') || f === inflectForm(h.toLowerCase(), 'past')) return 'past';
  if (f === inflectForm(h, 'ing') || f === inflectForm(h.toLowerCase(), 'ing')) return 'ing';
  if (f === inflectForm(h, 's') || f === inflectForm(h.toLowerCase(), 's')) return 's';
  return 'head';
}
function matchFill(other, fill, target) {
  const form = inferForm(fill, target.w);
  if (form === 'lower') return other.w.toLowerCase();
  if (form === 'head') return other.w;
  const out = inflectForm(other.w, form);
  return fill[0] === fill[0].toLowerCase() ? out[0].toLowerCase() + out.slice(1) : out;
}
function buildClozeQuestion(word, pool, items, last, rnd = Math.random) {
  const picked = pickCloze(items, last, rnd);
  const raw = choices(word, pool, 4, rnd);
  const options = raw.map(o => ({ w: o, fill: o === word ? picked.fill : matchFill(o, picked.fill, word) }));
  // If two fills collide, keep the correct one and drop the duplicate (rare).
  const seen = new Set(); const unique = [];
  for (const o of options) { const k = o.fill.toLowerCase(); if (seen.has(k) && o.w !== word) continue; if (seen.has(k) && o.w === word) { const i = unique.findIndex(x => x.fill.toLowerCase() === k); if (i >= 0) unique.splice(i, 1); } seen.add(k); unique.push(o); }
  return { w: word, type: 'cloze', prompt: picked.s, fill: picked.fill, i: picked.i, options: unique };
}

// Recent Words Recall: optional typing practice, unlocked once Unit 9 is open.
const RECALL_SIZE = 10, RECALL_UNIT = 8, RECALL_UNITS = 3, RECALL_RECENT = 0.7;
function recallUnlocked(path, gate) {
  const idx = path.findIndex(it => it.type === 'unit' && it.i === RECALL_UNIT);
  return idx >= 0 && isUnlocked(path, idx, gate);
}
function recentLearned(units, prog, nUnits = RECALL_UNITS) {
  let last = -1;
  units.forEach((u, i) => { if (u.some(w => !isNew(prog, w))) last = i; });
  if (last < 0) return [];
  return units.slice(Math.max(0, last - nUnits + 1), last + 1).flat().filter(w => !isNew(prog, w));
}
function pickRecall(units, prog, words, size = RECALL_SIZE, rnd = Math.random) {
  const recent = recentLearned(units, prog, RECALL_UNITS);
  const rset = new Set(recent.map(key));
  const older = words.filter(w => !isNew(prog, w) && !rset.has(key(w)));
  let nR = Math.round(size * RECALL_RECENT), nO = size - nR;
  if (recent.length < nR) { nO = Math.min(older.length, nO + (nR - recent.length)); nR = recent.length; }
  if (older.length < nO) { nR = Math.min(recent.length, nR + (nO - older.length)); nO = older.length; }
  const take = (pool, n) => {
    const weak = [], rest = [];
    for (const w of pool) (prog[key(w)] && prog[key(w)].wrong > 0 ? weak : rest).push(w);
    return shuffle(weak, rnd).concat(shuffle(rest, rnd)).slice(0, n);
  };
  return take(recent, nR).concat(take(older, nO));
}
function buildRecallQuestion(word, qi, session) {
  const off = session && session.recallOff ? 1 : 0;
  return { w: word, type: ['type', 'typeDef'][(qi + off) % 2] };
}
// Definition typing: keyword overlap with the official PrepScholar definition (no AI).
const DEF_STOP = new Set('the and for with that this from into than something someone being about such have having more easily often able other others their your what when which while used state quality act person things thing done give take a an to of or in on as by at is are was were be been it its if so do does doing usu usually particular specific some any can could may might will would just also only but'.split(' '));
const SYN_GROUPS = [
  ['become', 'get', 'grow', 'turn'], ['extremely', 'very', 'highly'],
  ['bad', 'poor', 'terrible', 'awful'], ['good', 'positive'],
  ['improve', 'better'], ['enough', 'sufficient'],
  ['change', 'modify', 'alter'], ['accurate', 'correct', 'precise', 'exact'],
  ['unexpected', 'unanticipated', 'unforeseen'], ['difficult', 'hard'],
  ['help', 'aid', 'assist'], ['show', 'display', 'reveal'],
  ['hide', 'conceal'], ['start', 'begin'], ['end', 'finish', 'stop'],
  ['happen', 'occur'], ['important', 'significant'], ['clear', 'obvious', 'plain'],
  ['strong', 'powerful'], ['dislike', 'hate', 'hatred'], ['arrival', 'coming'],
  ['gather', 'collect', 'assemble'], ['support', 'strengthen'],
  ['kind', 'generous'], ['brave', 'courageous'], ['true', 'real', 'actual'],
  ['new', 'fresh'], ['before', 'prior', 'preceding', 'previous'],
  ['after', 'following', 'later'], ['many', 'multiple', 'several'],
  ['say', 'state', 'express', 'tell'], ['use', 'utilize'],
  ['small', 'slight', 'little'], ['large', 'big', 'great'],
  ['reduce', 'lessen', 'decrease', 'diminish'], ['increase', 'rise']
];
const SYN_OF = (() => { const m = {}; for (const g of SYN_GROUPS) for (const w of g) (m[w] || (m[w] = [])).push(...g); return m; })();
function defTokens(s) {
  return (s || '').toLowerCase().replace(/[^a-z]+/g, ' ').trim().split(/\s+/)
    .filter(t => t && (t.length > 2 || t === 'no') && !DEF_STOP.has(t));
}
function defStems(tokens) { return tokens.map(t => t.length > 5 ? t.slice(0, 5) : t); }
function expandDefStems(tokens) {
  const out = new Set(defStems(tokens));
  for (const t of tokens) for (const syn of (SYN_OF[t] || [])) out.add(syn.length > 5 ? syn.slice(0, 5) : syn);
  return out;
}
function checkTypedDef(answer, word) {
  const typed = (answer || '').trim();
  if (!typed) return { grade: 'wrong', overlap: 0, hits: 0, need: 0 };
  const defs = [word.d].concat(word.senses || []);
  const nT = normalize(typed);
  if (defs.some(d => normalize(d) === nT)) return { grade: 'right', overlap: 1, hits: 1, need: 1 };
  let best = { grade: 'wrong', overlap: 0, hits: 0, need: 0 };
  const userTok = defTokens(typed);
  const user = expandDefStems(userTok);
  for (const d of defs) {
    const offTok = defTokens(d), off = new Set(defStems(offTok));
    if (!off.size) continue;
    const hits = [...off].filter(s => user.has(s)).length;
    const recall = hits / off.size;
    const prec = user.size ? hits / user.size : 0;
    const short = off.size <= 2;
    let grade = 'wrong';
    if (short) grade = (hits === off.size) ? 'right' : (hits > 0 ? 'close' : 'wrong');
    else if (recall >= 0.6 && (prec >= 0.35 || userTok.length <= offTok.length + 4)) grade = 'right';
    else if (recall >= 0.3 || hits >= 2) grade = 'close';
    if (recall > best.overlap || (recall === best.overlap && grade === 'right')) best = { grade, overlap: recall, hits, need: off.size };
  }
  return best;
}


// Grammar path + daily review (separate from the vocab path and vocab Daily Review).
const RETIRED_GRAMMAR = ['nonessential', 'essential', 'dash-such'];
const GRAM_META = new Set(['passed', 'resume', 'daily', 'gbest']);
function migrateGrammar(raw) {
  const g = raw && typeof raw === 'object' ? raw : {};
  const out = {};
  if (g.passed && typeof g.passed === 'object' && Object.keys(g.passed).length) {
    out.passed = {};
    for (const [k, v] of Object.entries(g.passed)) if (v) out.passed[k] = v;
  }
  if (g.resume && typeof g.resume === 'object' && Object.keys(g.resume).length) out.resume = g.resume;
  if (g.gbest && typeof g.gbest === 'object' && Object.keys(g.gbest).length) {
    out.gbest = {};
    for (const [k, v] of Object.entries(g.gbest)) if (typeof v === 'number') out.gbest[k] = v;
  }
  if (g.daily && typeof g.daily.day === 'string') out.daily = { day: g.daily.day, keys: Array.isArray(g.daily.keys) ? g.daily.keys : [], passed: !!g.daily.passed };
  for (const [k, v] of Object.entries(g)) {
    if (GRAM_META.has(k) || RETIRED_GRAMMAR.includes(k)) continue;
    if (v && typeof v.best === 'number') out[k] = { best: v.best, tries: +v.tries || 0 };
  }
  return out;
}
function makeGrammarPath(topics) {
  const p1 = topics.filter(t => t.part === 1), p2 = topics.filter(t => t.part === 2);
  const path = [];
  p1.forEach(t => path.push({ type: 'rule', id: t.id, part: 1, topic: t }));
  path.push({ type: 'exam', id: 'g-exam1', part: 1, title: 'Part 1 Exam', topics: p1, n: 60 });
  const SIZE = 5;
  for (let i = 0; i < p2.length; i += SIZE) {
    const chunk = p2.slice(i, i + SIZE);
    chunk.forEach(t => path.push({ type: 'rule', id: t.id, part: 2, topic: t }));
    path.push({ type: 'review', id: 'g-rev' + Math.floor(i / SIZE), part: 2, title: 'Part 2 Review', topics: chunk, n: chunk.length === 5 ? 30 : Math.max(24, chunk.length * 6) });
  }
  path.push({ type: 'final', id: 'g-final', part: 2, title: 'Grammar Final Exam', topics: topics, n: 70 });
  return path;
}
function recordGrammarAttempt(gram, id, total, firstTryMisses, now = Date.now()) {
  const pct = total ? Math.round((total - firstTryMisses) / total * 100) : 0;
  gram.passed = gram.passed || {};
  gram.gbest = gram.gbest || {};
  gram.gbest[id] = Math.max(gram.gbest[id] || 0, pct);
  const perfect = total > 0 && firstTryMisses === 0;
  if (perfect && !gram.passed[id]) gram.passed[id] = now;
  return { pct, perfect };
}
function ensureDailyGrammar(gram, path, now = Date.now()) {
  gram.passed = gram.passed || {};
  gram.resume = gram.resume || {};
  const d = laDay(now);
  const learned = (path || []).filter(it => it.type === 'rule' && gram.passed[it.id]).map(it => it.id);
  if (!gram.daily || gram.daily.day !== d) {
    gram.daily = { day: d, keys: learned, passed: learned.length === 0 };
    delete gram.resume.daily;
    return true;
  }
  return false;
}
const grammarDailyBlocks = gram => !!(gram && gram.daily && !gram.daily.passed);
function grammarStepOpen(path, idx, gram) {
  if (!isUnlocked(path, idx, gram)) return false;
  if (gram.passed && gram.passed[path[idx].id]) return true;
  return !grammarDailyBlocks(gram);
}
function buildGrammarExam(topics, n, rnd = Math.random) {
  const buckets = topics.map(t => {
    const pool = (t.bank || []).concat(t.qs || []);
    return { t, pool: shuffle(pool, rnd).map(q => Object.assign({ id: t.id, title: t.title }, q)) };
  });
  const out = [];
  for (let i = 0; out.length < n && i < n * 30; i++) {
    const b = buckets[i % buckets.length];
    if (b.pool.length) out.push(b.pool.shift());
  }
  return shuffle(out, rnd).slice(0, n);
}
function pickDailyGrammar(topicsById, keys, n = 10, rnd = Math.random) {
  const pools = keys.map(id => topicsById[id]).filter(Boolean).map(t => (t.qs || []).map(q => Object.assign({ id: t.id, title: t.title }, q)));
  if (!pools.length) return [];
  const out = [];
  const bags = pools.map(p => shuffle(p, rnd));
  for (let i = 0; out.length < n && i < n * 20; i++) {
    const bag = bags[i % bags.length];
    if (bag.length) out.push(bag.shift());
    else if (pools[i % pools.length].length) {
      const src = pools[i % pools.length];
      out.push(src[Math.floor(rnd() * src.length)]);
    }
  }
  return shuffle(out, rnd).slice(0, Math.min(n, Math.max(keys.length, Math.min(10, n))));
}
function explainGrammar(q, choice) {
  const ok = choice === q.a;
  const picked = q.o[choice], correct = q.o[q.a];
  const whyCorrect = String(q.why || '').trim();
  const whyWrong = (!ok && q.wx && q.wx[choice]) ? String(q.wx[choice]).trim() : '';
  return { ok, picked, correct, whyCorrect, whyWrong };
}
function validGramResume(s, n) {
  if (!s || !Array.isArray(s.queue) || !Array.isArray(s.seen) || !Array.isArray(s.missed) || s.total !== n) return false;
  if (!s.questions || typeof s.questions !== 'object') return false;
  const has = k => s.questions[k] && Array.isArray(s.questions[k].o) && Number.isInteger(s.questions[k].a);
  return s.queue.every(q => q && has(q.k)) && s.seen.every(has);
}

// v2 backups include unlocks, best scores and paused tests. v1 (word-only) files still import.
// Profile: daily goals, name, study buddy, active study time, optional photo. Kept separate from progress/unlocks.
const WORDS_DAY_OPTS = Array.from({ length: 20 }, (_, i) => (i + 1) * 10);
const MINUTES_DAY_OPTS = [5, 10, 15, 20, 25, 30, 45, 60, 75, 90, 120];
const PHOTO_BACKUP_MAX = 120000; // skip oversized data-URL photos in backups
const NAME_MAX = 40;
const DEFAULT_BUDDY = 'frog';
const BUDDIES = [
  { id: 'penguin', name: 'Penguin', file: 'buddy-penguin.webp' },
  { id: 'bunny', name: 'Bunny', file: 'buddy-bunny.webp' },
  { id: 'frog', name: 'Frog', file: 'buddy-frog.webp' },
  { id: 'chick', name: 'Chick', file: 'buddy-chick.webp' },
  { id: 'hamster', name: 'Hamster', file: 'buddy-hamster.webp' },
  { id: 'seal', name: 'Seal', file: 'buddy-seal.webp' },
  { id: 'cloud', name: 'Cloud', file: 'buddy-cloud.webp' },
  { id: 'otter', name: 'Otter', file: 'buddy-otter.webp' },
  { id: 'bear', name: 'Bear', file: 'buddy-bear.webp' },
  { id: 'dino', name: 'Dino', file: 'buddy-dino.webp' }
];
const normalizeBuddy = id => BUDDIES.some(b => b.id === id) ? id : DEFAULT_BUDDY;
function normalizeName(s) {
  if (typeof s !== 'string') return null;
  const t = s.replace(/[\u0000-\u001f\u007f]/g, '').replace(/\s+/g, ' ').trim();
  if (!t) return null;
  return t.slice(0, NAME_MAX);
}
const newProfile = () => ({ survey: null, time: { totalMs: 0, days: {} }, photo: null, buddy: DEFAULT_BUDDY, name: null });
function normalizeSurvey(s) {
  if (!s || typeof s !== 'object') return null;
  let words = Number(s.wordsPerDay), mins = Number(s.minutesPerDay);
  if (!Number.isFinite(words) || !Number.isFinite(mins)) return null;
  words = Math.min(200, Math.max(10, Math.round(words / 10) * 10));
  mins = Math.min(180, Math.max(5, Math.round(mins)));
  const at = Number(s.at);
  return { wordsPerDay: words, minutesPerDay: mins, at: Number.isFinite(at) && at > 0 ? at : 0 };
}
function sanitizeProfile(p, forBackup = false) {
  if (!p || typeof p !== 'object') return newProfile();
  const time = { totalMs: 0, days: {} };
  if (p.time && typeof p.time === 'object') {
    const tot = Number(p.time.totalMs);
    if (Number.isFinite(tot) && tot > 0) time.totalMs = Math.round(tot);
    if (p.time.days && typeof p.time.days === 'object') {
      for (const [d, ms] of Object.entries(p.time.days)) {
        const n = Number(ms);
        if (/^\d{4}-\d{2}-\d{2}$/.test(d) && Number.isFinite(n) && n > 0) time.days[d] = Math.round(n);
      }
    }
  }
  let photo = null;
  if (typeof p.photo === 'string' && /^data:image\/(png|jpeg|jpg|webp|gif);base64,/i.test(p.photo) && p.photo.length > 32) {
    if (!forBackup || p.photo.length <= PHOTO_BACKUP_MAX) photo = p.photo;
  }
  return { survey: normalizeSurvey(p.survey), time, photo, buddy: normalizeBuddy(p.buddy), name: normalizeName(p.name) };
}
function addActiveTime(profile, ms, now = Date.now()) {
  const p = profile && typeof profile === 'object' ? profile : newProfile();
  p.time = p.time || { totalMs: 0, days: {} };
  p.time.days = p.time.days || {};
  const add = Math.max(0, Math.min(Math.round(Number(ms) || 0), 5 * 60 * 1000));
  if (!add) return p;
  const day = laDay(now);
  p.time.totalMs = (p.time.totalMs || 0) + add;
  p.time.days[day] = (p.time.days[day] || 0) + add;
  return p;
}
const todayMs = (profile, now = Date.now()) => (profile && profile.time && profile.time.days && profile.time.days[laDay(now)]) || 0;
function formatDuration(ms) {
  const m = Math.floor(Math.max(0, Math.round(Number(ms) || 0)) / 60000);
  if (m < 1) return 'less than 1 min';
  if (m < 60) return m + ' min';
  const h = Math.floor(m / 60), r = m % 60;
  return r ? h + ' hr ' + r + ' min' : h + ' hr';
}
function addCalendarDays(iso, n) {
  const p = String(iso || '').split('-').map(Number);
  if (p.length !== 3 || !p.every(Number.isFinite)) return iso;
  const dt = new Date(Date.UTC(p[0], p[1] - 1, p[2] + Number(n || 0)));
  return dt.toISOString().slice(0, 10);
}
function formatDate(iso) {
  const p = String(iso || '').split('-').map(Number);
  if (p.length !== 3 || !p.every(Number.isFinite)) return iso || '';
  const months = 'January February March April May June July August September October November December'.split(' ');
  return months[p[1] - 1] + ' ' + p[2] + ', ' + p[0];
}
function projectFinish(learned, wordsPerDay, total = 384, now = Date.now()) {
  const have = Math.max(0, Number(learned) || 0), goal = Math.max(0, Number(wordsPerDay) || 0), all = Math.max(0, Number(total) || 0);
  const today = laDay(now);
  if (have >= all) return { done: true, date: today, daysLeft: 0 };
  if (!goal) return { done: false, date: null, daysLeft: null };
  const daysLeft = Math.ceil((all - have) / goal);
  return { done: false, date: addCalendarDays(today, daysLeft - 1), daysLeft };
}
// After feedback is on screen, a click/tap may advance unless it landed on an enabled control.
function advanceClickOk(el) {
  if (!el) return true;
  const tag = (el.tagName || '').toLowerCase();
  const disabled = !!(el.disabled || (typeof el.getAttribute === 'function' && el.getAttribute('disabled') != null));
  if (tag === 'button' || tag === 'input' || tag === 'textarea' || tag === 'select' || tag === 'label') return disabled;
  if (tag === 'a') return false;
  return true;
}
function exportData(prog, gate, grammar, profile) {
  const out = { app: 'sat-vocab-practice', v: 2, progress: prog, gate: gate || newGate(), grammar: grammar || {} };
  if (profile) out.profile = sanitizeProfile(profile, true);
  return JSON.stringify(out);
}
function importData(text) {
  const o = JSON.parse(text);
  if (!o || o.app !== 'sat-vocab-practice' || typeof o.progress !== 'object' || !o.progress) throw new Error('Not a valid backup file');
  for (const [k, p] of Object.entries(o.progress))
    if (typeof p.stage !== 'number' || typeof p.due !== 'number') throw new Error('Bad entry: ' + k);
  let gate = null;
  if (o.gate != null) {
    const g = o.gate;
    if (typeof g !== 'object' || ['passed', 'best', 'resume'].some(f => g[f] != null && typeof g[f] !== 'object')) throw new Error('Bad unlock data');
    gate = { passed: g.passed || {}, best: g.best || {}, resume: g.resume || {} };
    if (g.daily && typeof g.daily.day === 'string' && Array.isArray(g.daily.words)) { gate.daily = { day: g.daily.day, words: g.daily.words, passed: !!g.daily.passed, part1: !!g.daily.part1 }; if (Array.isArray(g.daily.part1Keys)) gate.daily.part1Keys = g.daily.part1Keys; }
    if (g.clozeLast && typeof g.clozeLast === 'object') gate.clozeLast = g.clozeLast;
    for (const s of Object.values(gate.resume)) if (!s || !Array.isArray(s.queue) || !Array.isArray(s.missed) || !Array.isArray(s.seen)) throw new Error('Bad paused test');
  }
  let grammar = null; // optional; older backups have none and keep current grammar scores
  if (o.grammar != null) {
    if (typeof o.grammar !== 'object') throw new Error('Bad grammar data');
    grammar = migrateGrammar(o.grammar);
  }
  let profile = null;
  if (o.profile != null) {
    if (typeof o.profile !== 'object') throw new Error('Bad profile data');
    profile = sanitizeProfile(o.profile, false);
  }
  return { progress: o.progress, gate, grammar, profile };
}
const api = { DAY, INTERVALS, UNIT_SIZE, makeUnits, grade, isNew, dueWords, weakWords, checkTyped, typedForms, choices, shuffle, exportData, importData, newProfile, normalizeSurvey, sanitizeProfile, addActiveTime, todayMs, formatDuration, addCalendarDays, formatDate, projectFinish, WORDS_DAY_OPTS, MINUTES_DAY_OPTS, PHOTO_BACKUP_MAX, NAME_MAX, DEFAULT_BUDDY, BUDDIES, normalizeBuddy, normalizeName, key, quizTypes, makePath, unitWords, migratePairUnlocks, newGate, isUnlocked, recordAttempt, newSession, answerSession, buildQuestion, validResume, rehydrateQuestion, rehydrateSession, clearResume, laDay, ensureDaily, dailyBlocks, recordDaily, DAILY_PASS, recordGrammar, allWeak, withWeak, resumeSnapshot, explainWrong, playDing, DING_PARTIALS, confusable, markExample, escHtml, halfCount, pickHalf, pickCloze, buildClozeQuestion, matchFill, inferForm, inflectForm, RECALL_SIZE, RECALL_UNIT, recallUnlocked, recentLearned, pickRecall, buildRecallQuestion, checkTypedDef, defTokens, RETIRED_GRAMMAR, migrateGrammar, makeGrammarPath, recordGrammarAttempt, ensureDailyGrammar, grammarDailyBlocks, grammarStepOpen, buildGrammarExam, pickDailyGrammar, validGramResume, explainGrammar, advanceClickOk };
if (typeof module !== 'undefined') module.exports = api; else window.Logic = api;
