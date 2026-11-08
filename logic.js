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
function checkTyped(answer, word) { return normalize(answer) === normalize(word.w); }

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
// Learning path: Unit, Unit, Review (pair); after every 6 units a 60-word Big Test; Final Test after the last unit.
function makePath(units) {
  const path = [];
  units.forEach((u, i) => {
    // Unit quizzes draw wrong answers from the unit pair (Units 1+2, 3+4, ...; Unit 39 alone).
    const pool = units.slice(i - (i % 2), i - (i % 2) + 2).flat();
    path.push({ type: 'unit', id: 'u' + i, i, words: u, pool });
    // Cumulative review: every word from Unit 1 through this unit (id kept as before so saved unlocks still match).
    if (i % 2 === 1) path.push({ type: 'review', id: 'r' + (i - 1), a: 0, b: i, words: units.slice(0, i + 1).flat() });
    if (i % 6 === 5) path.push({ type: 'big', id: 'b' + (i + 1) / 6, n: (i + 1) / 6, from: i - 5, to: i, words: units.slice(i - 5, i + 1).flat() });
  });
  path.push({ type: 'final', id: 'final', words: units.flat() });
  return path;
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
// Daily Review: each Pacific calendar day, every word started before that day must be
// answered right on the first try (one full clean run) before the path can continue.
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
  if (type === 'type') {
    const n = normalize(typed || '');
    if (!n) return `No answer was entered. The word is "${target.w}". ${T}`;
    const known = (allWords || []).find(w => normalize(w.w) === n);
    if (known) return `You typed "${known.w}", which means: ${known.d}. The word for this definition is "${target.w}".`;
    return `"${typed.trim()}" isn't the word for this definition (spelling counts). The answer is "${target.w}". ${T}`;
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
    gate.daily = { day: d, words, passed: words.length === 0 };
    delete gate.resume.daily; return true;
  }
  return false;
}
const dailyBlocks = gate => !!(gate.daily && !gate.daily.passed);
function recordDaily(gate, day, total, firstTryMisses) {
  if (!gate.daily || gate.daily.day !== day) return { perfect: false, stale: true };
  const perfect = total > 0 && firstTryMisses === 0;
  if (perfect) gate.daily.passed = true;
  return { pct: Math.round((total - firstTryMisses) / total * 100), perfect };
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
function buildQuestion(stage, k, qi, byKey, rnd = Math.random) {
  const w = byKey[k], type = ['word2def', 'def2word'][qi % 2];
  return { w, type, options: choices(w, stage.pool || stage.words, 4, rnd) };
}
function quizTypes(n, intro, rnd = Math.random) {
  const off = Math.floor(rnd() * 2);
  return Array.from({ length: n }, (_, i) => intro ? ['word2def', 'def2word'][(i + off) % 2] : ['def2word', 'word2def', 'type'][Math.floor(rnd() * 3)]);
}
// v2 backups include unlocks, best scores and paused tests. v1 (word-only) files still import.
function exportData(prog, gate, grammar) { return JSON.stringify({ app: 'sat-vocab-practice', v: 2, progress: prog, gate: gate || newGate(), grammar: grammar || {} }); }
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
    if (g.daily && typeof g.daily.day === 'string' && Array.isArray(g.daily.words)) gate.daily = { day: g.daily.day, words: g.daily.words, passed: !!g.daily.passed };
    for (const s of Object.values(gate.resume)) if (!s || !Array.isArray(s.queue) || !Array.isArray(s.missed) || !Array.isArray(s.seen)) throw new Error('Bad paused test');
  }
  let grammar = null; // optional; older backups have none and keep current grammar scores
  if (o.grammar != null) {
    if (typeof o.grammar !== 'object') throw new Error('Bad grammar data');
    grammar = {}; for (const [k, v] of Object.entries(o.grammar)) if (v && typeof v.best === 'number') grammar[k] = { best: v.best, tries: +v.tries || 0 };
  }
  return { progress: o.progress, gate, grammar };
}
const api = { DAY, INTERVALS, UNIT_SIZE, makeUnits, grade, isNew, dueWords, weakWords, checkTyped, choices, shuffle, exportData, importData, key, quizTypes, makePath, newGate, isUnlocked, recordAttempt, newSession, answerSession, buildQuestion, validResume, laDay, ensureDaily, dailyBlocks, recordDaily, recordGrammar, allWeak, withWeak, resumeSnapshot, explainWrong, playDing, DING_PARTIALS, confusable, markExample, escHtml };
if (typeof module !== 'undefined') module.exports = api; else window.Logic = api;
