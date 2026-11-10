const L = window.Logic, UNITS = L.makeUnits(WORDS), $ = s => document.querySelector(s), app = $('#app');
const SKEY = 'satVocabProgress.v1';
let prog = JSON.parse(localStorage.getItem(SKEY) || '{}');
const save = () => localStorage.setItem(SKEY, JSON.stringify(prog));
// Unlock/test state lives under its own key so word progress is never touched.
const GKEY = 'satVocabPath.v1', PATH = L.makePath(UNITS), BYKEY = Object.fromEntries(WORDS.map(w => [L.key(w), w]));
let gate = Object.assign(L.newGate(), JSON.parse(localStorage.getItem(GKEY) || '{}'));
const saveGate = () => localStorage.setItem(GKEY, JSON.stringify(gate));
let onHome = false;
// Sound: on by default, saved locally. AudioContext is created lazily on the first answer click.
const SNDKEY = 'satVocabSound.v1'; let soundOn = localStorage.getItem(SNDKEY) !== 'off'; let actx = null;
const getCtx = () => { if (!actx) { const C = window.AudioContext || window.webkitAudioContext; if (!C) return null; actx = new C(); } return actx; };
const ding = () => L.playDing(soundOn, getCtx);
const soundBtn = () => `<button class="ghost" id="snd" aria-pressed="${soundOn}" title="Play a ding on correct answers">Sound: ${soundOn ? 'On' : 'Off'}</button>`;
document.addEventListener('click', e => { if (e.target && e.target.id === 'snd') { soundOn = !soundOn; localStorage.setItem(SNDKEY, soundOn ? 'on' : 'off'); e.target.textContent = 'Sound: ' + (soundOn ? 'On' : 'Off'); e.target.setAttribute('aria-pressed', soundOn); } });
const RKEY = 'satGrammar.v1'; let gram = Object.assign({ passed: {}, resume: {} }, L.migrateGrammar(JSON.parse(localStorage.getItem(RKEY) || '{}'))); const saveGram = () => localStorage.setItem(RKEY, JSON.stringify(gram));
const GPATH = L.makeGrammarPath(GRAMMAR), BYGRAM = Object.fromEntries(GRAMMAR.map(t => [t.id, t]));
const dayCheck = () => { let ch = false; if (L.ensureDaily(gate, prog)) { saveGate(); ch = true; } if (L.ensureDailyGrammar(gram, GPATH)) { saveGram(); ch = true; } if (ch && onHome) home(); };  // re-renders the Path tab on a new day
dayCheck(); setInterval(dayCheck, 60000);
document.addEventListener('visibilitychange', () => document.visibilityState === 'visible' && dayCheck());
const dailyStage = () => { const ws = gate.daily.words.map(k => BYKEY[k]).filter(Boolean); return { type: 'daily', id: 'daily', day: gate.daily.day, words: ws, pool: ws }; };
const label = it => it.type === 'unit' ? `Unit ${it.i + 1}` : it.type === 'review' ? `Cumulative Review: Units 1–${it.b + 1}` : it.type === 'big' ? `Big Test ${it.n} (Units ${it.from + 1}–${it.to + 1})` : 'Final Test (all 384 words)';
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
$('#home').onclick = e => { e.preventDefault(); home(); };

// Tell long-open tabs when a newer version has been published.
const VERSION = document.querySelector('meta[name=app-version]').content;
let stale = false;
fetch('version.txt?t=' + Date.now(), { cache: 'no-store' }).then(r => r.ok ? r.text() : VERSION).then(v => { if (v.trim() !== VERSION) { stale = true; home(); } }).catch(() => {});
const startDaily = () => {
  dayCheck();
  if (gate.daily.passed || gate.daily.part1) return dailyView();
  const st = dailyStage();
  if (st.words.length || gate.resume.daily) quiz(st.words, 'Daily Review, Part 1', true, st.words, st);
  else dailyView();
};
const startDailyPart2 = () => {
  dayCheck();
  if (!gate.daily || gate.daily.passed || !gate.daily.part1 || (gate.daily.day !== L.laDay())) return dailyView();
  const baseKeys = gate.daily.part1Keys || L.withWeak(dailyStage().words, prog, WORDS).map(L.key);
  const st = { type: 'daily2', id: 'daily2', day: gate.daily.day, words: baseKeys.map(k => BYKEY[k]).filter(Boolean) };
  quiz(st.words, 'Daily Review, Part 2', false, st.words, st);
};
const startRecall = () => {
  dayCheck();
  if (!L.recallUnlocked(PATH, gate)) return dailyView();
  const snap = gate.resume.recall;
  const snapWords = snap && Array.isArray(snap.keys) ? snap.keys.map(k => BYKEY[k]).filter(Boolean) : [];
  const words = (snap && L.validResume(snap, snapWords)) ? snapWords : L.pickRecall(UNITS, prog, WORDS);
  if (!words.length) return dailyView();
  quiz(words, 'Recent Words Recall', false, words, { type: 'recall', id: 'recall', words });
};
const tabs = cur => `<nav class="tabs row" style="margin-bottom:1rem"><button class="${cur === 'path' ? '' : 'ghost'}" id="tabPath">Path</button><button class="${cur === 'daily' ? '' : 'ghost'}" id="tabDaily">Daily Review${(L.dailyBlocks(gate) || L.grammarDailyBlocks(gram)) ? ' (to do)' : ''}</button><button class="${cur === 'grammar' ? '' : 'ghost'}" id="tabGram">Grammar Rules</button>${soundBtn()}</nav>`;
const wireTabs = () => { $('#tabPath').onclick = home; $('#tabDaily').onclick = dailyView; $('#tabGram').onclick = grammarView; };
// Grammar Rules tab: a gated path separate from the vocab path and vocab Daily Review.
const gLabel = it => it.type === 'rule' ? it.topic.title : it.type === 'exam' ? 'Part 1 Exam' : it.type === 'review' ? 'Part 2 Review ' + (Number(String(it.id).replace('g-rev', '')) + 1) : 'Grammar Final Exam';
const gSub = it => {
  if (it.type === 'rule') return it.topic.rule.length > 90 ? it.topic.rule.slice(0, 90) + '…' : it.topic.rule;
  if (it.type === 'exam') return '60 questions on the 9 must-know rules. You need 100% on the first try to continue.';
  if (it.type === 'review') return `${it.n} questions on: ${it.topics.map(t => t.title).join('; ')}. You need 100% on the first try to continue.`;
  return '70 questions on all 28 rules. You need 100% on the first try to finish the path.';
};
function grammarView() {
  onHome = false;
  L.ensureDailyGrammar(gram, GPATH);
  const dailyDue = L.grammarDailyBlocks(gram);
  const banner = dailyDue ? `<p class="fb no">Today's grammar review is on the <b>Daily Review</b> tab. Finish it before you start a new grammar step. It does not gate your vocab path.</p>` : '';
  const card = (it, idx) => {
    const open = L.grammarStepOpen(GPATH, idx, gram), pass = !!(gram.passed && gram.passed[it.id]);
    const best = it.type === 'rule' ? (gram[it.id] && gram[it.id].best) : (gram.gbest && gram.gbest[it.id]);
    const res = gram.resume && gram.resume[it.id];
    const status = pass ? '✓ Passed' : open ? (best != null ? `Best ${best}% · need 100%` : 'Open') : (dailyDue && L.isUnlocked(GPATH, idx, gram) ? "🔒 Finish today's grammar review first" : '🔒 Locked');
    const btn = !open ? '<button disabled>Locked</button>' : res && L.validGramResume(res, res.total) ? `<button data-s="${idx}">Resume (${res.done}/${res.total})</button>` : `<button data-s="${idx}">${it.type === 'rule' ? (pass ? 'Practice' : 'Learn') : (pass ? 'Retake' : 'Start')}</button>`;
    return `<div class="unit ${it.type}${open ? '' : ' locked'}"><h3>${idx + 1}. ${esc(gLabel(it))}</h3><small>${esc(gSub(it))}</small><small>${status}</small><div class="row" style="margin-top:.5rem">${btn}</div></div>`;
  };
  const p1 = [], p2 = [];
  GPATH.forEach((it, idx) => (idx <= 9 ? p1 : p2).push(card(it, idx)));
  app.innerHTML = tabs('grammar') + `<section class="card"><h2>SAT Grammar Rules</h2><p>Part 1: the 9 must-know rules, then a 60-question exam. Part 2: the rest, with a review every 5 rules and a final exam. 100% to move on.</p><p class="muted">Sources: <a href="https://blog.prepscholar.com/sat-grammar-rules-you-must-know">SAT Grammar Rules You Must Know</a> · <a href="https://blog.prepscholar.com/the-complete-guide-to-sat-grammar-rules">The Complete Guide to SAT Grammar Rules</a></p>${banner}</section>
   <h2>Part 1: 9 must-know rules</h2><div class="units">${p1.join('')}</div>
   <h2>Part 2: Remaining rules</h2><div class="units">${p2.join('')}</div>`;
  wireTabs(); app.querySelectorAll('[data-s]').forEach(b => b.onclick = () => startGramStep(GPATH[+b.dataset.s], +b.dataset.s));
}
function startGramStep(it, idx) {
  if (!L.grammarStepOpen(GPATH, idx, gram)) return grammarView();
  if (it.type === 'rule') {
    const res = gram.resume && gram.resume[it.id];
    if (res && L.validGramResume(res, it.topic.qs.length)) return runGramQuiz(it);
    return topicView(it, idx);
  }
  runGramQuiz(it);
}
function topicView(it, idx) {
  const t = it.topic;
  const note = t.note ? `<p><b>In plain language:</b> ${esc(t.note).replace(/\n/g, '<br>')}</p>` : '';
  app.innerHTML = tabs('grammar') + `<section class="card"><h2>${esc(t.title)}</h2>${note}<p><b>Rule:</b> ${esc(t.rule)}</p><p><b>Common trap:</b> ${esc(t.trap)}</p>
   <p class="fb no"><b>Before:</b> ${esc(t.before)}</p><p class="fb ok"><b>After:</b> ${esc(t.after)}</p>
   <div class="row"><button class="alt" id="gp">Practice (${t.qs.length} questions)</button><button class="ghost" id="gb">Back to path</button></div></section>`;
  wireTabs(); $('#gb').onclick = grammarView; $('#gp').onclick = () => runGramQuiz(it);
}
function startDailyGrammar() {
  dayCheck();
  const gd = gram.daily;
  if (!gd || !gd.keys.length || gd.passed) return dailyView();
  let s = gram.resume && gram.resume.daily;
  if (!L.validGramResume(s, s && s.total)) {
    const raw = L.pickDailyGrammar(BYGRAM, gd.keys, 10);
    if (!raw.length) return dailyView();
    const keyed = raw.map((q, i) => Object.assign({}, q, { k: 'daily:' + i }));
    s = L.newSession(keyed.map(q => q.k));
    s.questions = Object.fromEntries(keyed.map(q => [q.k, q]));
  }
  gram.resume.daily = s; saveGram();
  showGramQ({ type: 'gdaily', id: 'daily', title: 'Daily grammar review' }, s);
}
function runGramQuiz(it) {
  const expectedN = it.type === 'rule' ? it.topic.qs.length : it.n;
  let s = gram.resume && gram.resume[it.id];
  if (!L.validGramResume(s, expectedN)) {
    const raw = it.type === 'rule' ? it.topic.qs.slice() : L.buildGrammarExam(it.topics, it.n);
    const keyed = raw.map((q, i) => Object.assign({}, q, { k: it.id + ':' + i }));
    s = L.newSession(keyed.map(q => q.k));
    s.questions = Object.fromEntries(keyed.map(q => [q.k, q]));
  }
  gram.resume = gram.resume || {}; gram.resume[it.id] = s; saveGram();
  showGramQ(it, s);
}
function showGramQ(it, s) {
  const isDaily = it.type === 'gdaily';
  const persist = () => { gram.resume = gram.resume || {}; gram.resume[it.id] = s; saveGram(); };
  const back = () => isDaily ? dailyView() : grammarView();
  const titleOf = () => isDaily ? 'Daily grammar review' : (it.type === 'rule' ? it.topic.title : gLabel(it));
  const finish = () => {
    delete gram.resume[it.id];
    let result;
    if (isDaily) {
      if (gram.daily && gram.daily.day === L.laDay()) {
        result = { pct: s.total ? Math.round((s.total - s.missed.length) / s.total * 100) : 0, perfect: s.missed.length === 0, stale: false };
        if (result.perfect) gram.daily.passed = true;
      } else result = { stale: true, pct: 0, perfect: false };
    } else {
      if (it.type === 'rule') L.recordGrammar(gram, it.id, s.total, s.total - s.missed.length);
      result = L.recordGrammarAttempt(gram, it.id, s.total, s.missed.length);
    }
    saveGram();
    const nxt = !isDaily ? GPATH[GPATH.findIndex(x => x.id === it.id) + 1] : null;
    const verdict = result.stale
      ? 'A new day started, so this run no longer counts. Start today\'s grammar review.'
      : result.perfect
        ? (isDaily ? 'Daily grammar review done — 100% on the first try. You can continue new grammar today. This does not gate your vocab path.'
          : `100% on the first try — ${nxt ? `<b>${esc(gLabel(nxt))}</b> is unlocked.` : 'you finished the grammar path!'}`)
        : isDaily
          ? `${result.pct}% on the first try. You need 100% before you continue new grammar today. Retake as many times as you like. This does not gate your vocab path.`
          : `${result.pct}% on the first try. You need 100% to unlock the next step${gram.passed[it.id] ? ' (this step is already passed, so nothing is relocked)' : ''}. Retake it as many times as you like.`;
    const canRetake = !(isDaily && result.perfect);
    app.innerHTML = `<section class="card"><h2>${esc(titleOf())} — finished</h2><p>${s.total - s.missed.length} of ${s.total} right on the first try.</p>
      <p class="fb ${result.stale || !result.perfect ? 'no' : 'ok'}">${verdict}</p>
      <div class="row">${canRetake ? '<button class="alt" id="again">Retake</button>' : ''}<button id="h">${isDaily ? 'Back to Daily Review' : 'Back to grammar path'}</button>${isDaily ? '<button class="ghost" id="hg">Back to grammar path</button>' : ''}</div></section>`;
    $('#h').onclick = back; if ($('#hg')) $('#hg').onclick = grammarView;
    if ($('#again')) $('#again').onclick = () => isDaily ? startDailyGrammar() : runGramQuiz(it);
  };
  const next = () => {
    if (!s.queue.length) return finish();
    const { k, retry } = s.queue[0];
    const q = s.questions[k];
    const ruleTag = q.title && it.type !== 'rule' ? `<p class="muted">${esc(q.title)}</p>` : '';
    app.innerHTML = `<section class="card"><div class="row" style="justify-content:space-between"><p class="muted">${esc(titleOf())} · ${s.done}/${s.total} done · ${s.missed.length} missed on first try${retry ? ' · retry' : ''}</p>
      <div class="row">${soundBtn()}<button class="ghost" id="pause">Save & exit</button></div></div>${ruleTag}<p><b>${esc(q.q)}</b></p>
      <div class="opts">${q.o.map((o, i) => `<button data-k="${i}">${esc(o)}</button>`).join('')}</div><div id="fb"></div></section>`;
    $('#pause').onclick = back;
    let answered = false;
    app.querySelectorAll('.opts button').forEach(b => b.onclick = () => {
      if (answered) return; answered = true;
      const choice = +b.dataset.k, ok = choice === q.a; if (ok) ding();
      L.answerSession(s, ok); persist();
      b.classList.add(ok ? 'ok' : 'no'); app.querySelectorAll('.opts button')[q.a].classList.add('ok');
      app.querySelectorAll('.opts button').forEach(x => x.disabled = true);
      $('#fb').innerHTML = `<div class="fb ${ok ? 'ok' : 'no'}">${ok ? 'Correct.' : 'Not quite.'} ${esc(q.why)}${ok || retry ? '' : ' <span class="muted">This one will come back shortly.</span>'}
        <p style="margin:.6rem 0 0"><button id="go">Continue</button></p></div>`;
      $('#go').focus(); $('#go').onclick = next;
    });
  };
  next();
}
function dailyView() {
  onHome = true; dayCheck(); const dly = gate.daily;
  const nToday = L.withWeak(dailyStage().words, prog, WORDS).length;
  const extra = nToday - dly.words.length;
  const half = nToday ? L.halfCount(nToday) : 0;
  const paused1 = gate.resume.daily, paused2 = gate.resume.daily2;
  let intro, parts = '';
  if (!dly.words.length && dly.passed && !nToday) intro = '<p>Nothing to review yet today. Words you start today will be in tomorrow\'s Daily Review.</p>';
  else {
    intro = dly.passed
      ? '<p>✓ Done for today. You finished both parts of Daily Review. Your path is open.</p>'
      : `<p>${nToday} words: ${dly.words.length} learned before today${extra ? ` plus ${extra} weak word${extra > 1 ? 's' : ''} from today` : ''}. You need 100% on the first try in <b>both</b> parts to finish today\'s Daily Review.</p>`;
    const p1done = !!(dly.part1 || dly.passed);
    const p1status = p1done ? '✓ Done' : paused1 ? `Paused at ${paused1.done}/${paused1.total}` : 'Open';
    const p1btn = p1done ? '' : `<button class="alt" id="daily1">${paused1 ? 'Resume Part 1' : 'Start Part 1'}</button>`;
    const p2open = p1done;
    const p2status = dly.passed ? '✓ Done' : !p2open ? '🔒 Locked until you finish Part 1' : paused2 ? `Paused at ${paused2.done}/${paused2.total}` : 'Open';
    const p2btn = dly.passed ? '' : p2open ? `<button class="alt" id="daily2">${paused2 ? 'Resume Part 2' : 'Start Part 2'}</button>` : '<button disabled>Locked</button>';
    parts = `<div class="units" style="grid-template-columns:repeat(auto-fit,minmax(240px,1fr))">
      <div class="unit"><h3>Part 1: Meanings</h3><small>Check the meaning of all of today\'s words.</small><small>${p1status}</small>
        <div class="row" style="margin-top:.5rem">${p1btn}</div></div>
      <div class="unit${p2open ? '' : ' locked'}"><h3>Part 2: Fill in the blank</h3><small>${p2open ? `${half} fill-in sentences (a random half of today\'s words).` : 'Unlocks after you get 100% on Part 1.'}</small><small>${p2status}</small>
        <div class="row" style="margin-top:.5rem">${p2btn}</div></div>
    </div>`;
  }
  const recallOn = L.recallUnlocked(PATH, gate);
  const pausedR = gate.resume.recall, bestR = gate.best.recall;
  const nR = (pausedR && pausedR.total) || L.RECALL_SIZE;
  const recallStatus = !recallOn ? '🔒 Unlocks at Unit 9' : pausedR ? `Paused at ${pausedR.done}/${pausedR.total}` : bestR != null ? `Best first-try score: ${bestR}%` : `About ${nR} questions, mixed typing`;
  const recallBtn = recallOn ? `<button class="alt" id="recall">${pausedR ? 'Resume recall' : 'Start recall'}</button>` : '<button disabled>Unlocks at Unit 9</button>';
  const meaning = `<div class="units" style="grid-template-columns:repeat(auto-fit,minmax(240px,1fr));margin-top:.7rem">
    <div class="unit${recallOn ? '' : ' locked'}"><h3>Meaning</h3><small>Optional but recommended. Recent Words Recall: type the word from its definition, or type the definition from the word, focused on your last 2–3 units (about 70% recent, 30% older, weak words first). This does not gate your path or Daily Review.</small><small>${recallStatus}</small>
      <div class="row" style="margin-top:.5rem">${recallBtn}</div></div>
  </div>`;
  L.ensureDailyGrammar(gram, GPATH);
  const gd = gram.daily || { day: L.laDay(), keys: [], passed: true };
  const gPaused = gram.resume && gram.resume.daily;
  let gStatus, gBtn, gLocked = false, gBlurb;
  if (!gd.keys.length) {
    gLocked = true; gStatus = 'Nothing to review yet';
    gBlurb = 'A daily review of grammar rules you have already passed will appear here after you pass your first rule. It is required before you continue new grammar, and it does not gate your vocab path or vocab Daily Review.';
    gBtn = '<button disabled>Nothing to review yet</button>';
  } else if (gd.passed) {
    gStatus = '✓ Done';
    gBlurb = 'Done for today. This review covers grammar rules you had already passed. It does not gate your vocab path or vocab Daily Review.';
    gBtn = '';
  } else {
    gStatus = gPaused && L.validGramResume(gPaused, gPaused.total) ? `Paused at ${gPaused.done}/${gPaused.total}` : 'Open';
    gBlurb = 'Review of grammar rules you have already passed (about 10 questions). You need 100% on the first try before you continue new grammar today. It does not gate your vocab path or vocab Daily Review.';
    gBtn = `<button class="alt" id="gDaily">${gPaused && L.validGramResume(gPaused, gPaused.total) ? 'Resume review' : 'Start review'}</button>`;
  }
  const grammar = `<div class="units" style="grid-template-columns:repeat(auto-fit,minmax(240px,1fr));margin-top:.7rem">
    <div class="unit${gLocked ? ' locked' : ''}"><h3>Grammar</h3><small>${gBlurb}</small><small>${gStatus}</small>
      <div class="row" style="margin-top:.5rem">${gBtn}</div></div>
  </div>`;
  app.innerHTML = tabs('daily') + `<section class="card daily"><h2>Daily Review — ${dly.day}</h2>${intro}</section>${parts}${meaning}${grammar}`;
  wireTabs(); if ($('#daily1')) $('#daily1').onclick = startDaily; if ($('#daily2')) $('#daily2').onclick = startDailyPart2; if ($('#recall')) $('#recall').onclick = startRecall; if ($('#gDaily')) $('#gDaily').onclick = startDailyGrammar;
}
function home() {
  onHome = true; dayCheck(); const dly = gate.daily, block = L.dailyBlocks(gate);
  const due = L.dueWords(prog, WORDS), learned = WORDS.filter(w => !L.isNew(prog, w)).length, weak = L.weakWords(prog, WORDS);
  app.innerHTML = tabs('path') + (stale ? `<p class="fb no">A newer version is available. <button id="upd">Reload</button></p>` : '') + `<section class="card"><div class="stats">
   <div class="stat"><b>${L.dailyBlocks(gate) ? 'To do' : 'Done'}</b>today's Daily Review</div><div class="stat"><b>${learned}</b>of 384 started</div>
   <div class="stat"><b>${weak.length}</b>weak words</div><div class="stat"><b>${due.length}</b>words for extra practice</div></div>
   <div class="row" style="margin-top:1rem"><button id="rev" ${due.length ? '' : 'disabled'}>Extra practice (${Math.min(due.length, 30)} words, optional)</button>
   <button class="alt" id="weak" ${weak.length ? '' : 'disabled'}>Practice weak words</button><button class="ghost" id="data">Backup / restore</button></div>
   ${block ? '<p class="fb no">Your path is paused until today\'s Daily Review is done. Open the <b>Daily Review</b> tab.</p>' : ''}
   <h2>Your path</h2><p class="muted">Units have up to 10 words. Each step opens after you get 100% on the first try in the step before it. Retake as often as you like. Due reviews and weak words are always open.</p>
   <div class="units">${PATH.map((it, idx) => {
     const u = it.words, open = !block && L.isUnlocked(PATH, idx, gate), pass = gate.passed[it.id], best = gate.best[it.id];
     const st = u.filter(w => !L.isNew(prog, w)).length, res = gate.resume[it.id];
     const status = pass ? '✓ Passed' : open ? (best != null ? `Best ${best}% · need 100%` : 'Open') : '🔒 Locked';
     const btn = it.type === 'unit' ? (st < u.length ? 'Learn' : 'Practice') : res ? `Resume (${res.done}/${res.total})` : 'Start';
     return `<div class="unit ${it.type}${open ? '' : ' locked'}"><h3>${label(it)}</h3><small>${it.type === 'unit' ? esc(u[0].w) + ' – ' + esc(u[u.length - 1].w) : it.type === 'review' ? `${u.length} words + ${L.withWeak(u, prog, WORDS).length - u.length} other weak words` : u.length + ' words'}</small>
     <div class="bar"><i style="width:${st / u.length * 100}%"></i></div><small>${status}</small>
     <div class="row" style="margin-top:.5rem"><button data-s="${idx}" ${open ? '' : 'disabled'}>${btn}</button>${it.type === 'unit' ? `<button class="ghost" data-f="${idx}" ${open ? '' : 'disabled'}>Cards</button><button class="ghost" data-w="${idx}" ${open ? '' : 'disabled'}>List</button>` : ''}</div></div>`;
   }).join('')}</div>`;
  wireTabs();
  if ($('#upd')) $('#upd').onclick = () => location.reload();
  $('#rev').onclick = () => quiz(due.slice(0, 30), 'Extra practice');
  $('#weak').onclick = () => quiz(weak, 'Weak words');
  $('#data').onclick = backup;
  const guard = f => b => b.onclick = () => { const idx = +Object.values(b.dataset)[0]; if (!L.dailyBlocks(gate) && L.isUnlocked(PATH, idx, gate)) f(PATH[idx], idx); };
  app.querySelectorAll('[data-s]').forEach(guard(startStage));
  app.querySelectorAll('[data-f]').forEach(guard(it => flash(it.words, `${label(it)} cards`)));
  app.querySelectorAll('[data-w]').forEach(guard(it => list(it.i)));
}

function startStage(it, idx) {
  dayCheck(); if (L.dailyBlocks(gate) || !L.isUnlocked(PATH, idx, gate)) return home();
  const run = () => quiz(it.words, label(it), true, it.pool || it.words, it);
  if (it.type === 'unit') { const fresh = it.words.filter(w => L.isNew(prog, w));
    return fresh.length ? flash(fresh, `${label(it)}: meet the new words`, run, false) : run(); }
  run();
}

function list(i) {
  app.innerHTML = `<section class="card"><h2>Unit ${i + 1} words</h2><table><tr><th>Word</th><th>Meaning</th><th>Status</th></tr>${UNITS[i].map(w => {
    const p = prog[L.key(w)]; return `<tr><td><b>${esc(w.w)}</b> <span class="pos">${w.p}</span></td><td>${esc(w.d)}</td><td>${p ? 'In your Daily Review' : 'Not learned yet'}</td></tr>`;
  }).join('')}</table><p><button id="b">Back</button></p></section>`; $('#b').onclick = home;
}

function flash(words, title, then, graded = true) {
  let n = 0, flipped = false; const again = [];
  const show = () => {
    if (n >= words.length) return then ? then() : done(title, words.length, again);
    const w = words[n];
    app.innerHTML = `<section class="card"><p class="muted">${esc(title)} · ${n + 1}/${words.length}</p>
     <div class="flash card" id="fc" tabindex="0" role="button" aria-label="Flip card">${flipped || !graded ? `<div class="word">${esc(w.w)}</div><span class="pos">${w.p}</span><p>${esc(w.d)}</p>${w.e ? `<p class="ex">“${L.markExample(w.e, w)}”</p>` : ''}` : `<div class="word">${esc(w.w)}</div><p class="muted">Think of the meaning, then tap to flip</p>`}</div>
     <div class="row">${n ? '<button class="ghost" id="pv">Previous</button>' : ''}${graded ? (flipped ? `<button class="alt" id="y">I knew it</button><button id="n">Not yet</button>` : `<button id="fl">Flip</button>`) : `<button id="nx">Next</button>`}<button class="ghost" id="q">Exit</button></div></section>`;
    const flip = () => { if (graded) { flipped = true; show(); } };
    $('#fc').onclick = flip; $('#fc').onkeydown = e => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), flip());
    $('#q').onclick = home;
    if ($('#fl')) $('#fl').onclick = flip;
    if ($('#pv')) $('#pv').onclick = () => { n--; flipped = !graded; show(); };
    if ($('#nx')) $('#nx').onclick = () => { n++; flipped = false; show(); };
    if ($('#y')) $('#y').onclick = () => { L.grade(prog, w, true); save(); n++; flipped = false; show(); };
    if ($('#n')) $('#n').onclick = () => { L.grade(prog, w, false); save(); again.push(w); words = words.concat([w]); n++; flipped = false; show(); };
  };
  show();
}

// Quiz: a miss is graded once (first try) and retried later in the same session.
// stage: a path step (unit/review/test). Big and final tests save progress so they can be resumed.
function quiz(words, title, intro = false, pool = WORDS, stage = null) {
  onHome = false;
  const keep = stage && stage.type !== 'unit';
  let s = null, clozeMap = {};
  if (stage && stage.type === 'daily2') {
    const halfN = L.halfCount(words.length);
    const snap = gate.resume.daily2;
    if (snap && L.validResume(snap, (snap.keys || []).map(k => BYKEY[k]).filter(Boolean)) && snap.keys.length === halfN) {
      s = snap; words = s.keys.map(k => BYKEY[k]); clozeMap = snap.cloze || {};
    } else {
      words = L.pickHalf(words.map(L.key)).map(k => BYKEY[k]);
    }
    pool = words;
  } else if (stage && (stage.type === 'review' || stage.type === 'daily')) {
    // Snapshot base range + all weak words at session start; resume keeps that snapshot.
    const snap = L.resumeSnapshot(gate.resume[stage.id], words, BYKEY);
    if (snap) { s = gate.resume[stage.id]; words = snap; }
    else if (L.validResume(gate.resume[stage.id], words)) { s = gate.resume[stage.id]; s.keys = words.map(L.key); } // older paused run
    else words = L.withWeak(words, prog, WORDS);
    pool = words;
  } else if (keep && L.validResume(gate.resume[stage.id], words)) s = gate.resume[stage.id];
  if (!words.length) return home();
  if (!s) s = L.newSession(words.map(L.key));
  if (stage && stage.type === 'recall' && s.recallOff == null) s.recallOff = Math.random() < 0.5 ? 0 : 1;
  const rtypes = intro ? null : L.quizTypes(1000, false);
  const persist = () => {
    if (!keep) return;
    if ((stage.type === 'daily' || stage.type === 'daily2') && (!gate.daily || gate.daily.day !== stage.day)) return;
    if (stage.type === 'daily2') s.cloze = clozeMap;
    gate.resume[stage.id] = s; saveGate();
  };
  persist();
  const next = () => {
    if (!s.queue.length) {
      let result = null;
      if (stage) {
        if (keep) delete gate.resume[stage.id];
        if (stage.type === 'daily') {
          result = L.recordDaily(gate, stage.day, s.total, s.missed.length, 1);
          if (result.perfect) gate.daily.part1Keys = s.keys.slice();
        } else if (stage.type === 'daily2') result = L.recordDaily(gate, stage.day, s.total, s.missed.length, 2);
        else result = L.recordAttempt(gate, stage.id, s.total, s.missed.length);
        saveGate();
      }
      return done(title, s.total, s.missed.map(k => BYKEY[k]), stage, result);
    }
    const { k, retry } = s.queue[0];
    let q;
    if (stage && stage.type === 'daily2') {
      if (!s.curQ || s.curQ.k !== k) {
        const items = (typeof CLOZE !== 'undefined' ? CLOZE[k] : null) || [];
        q = L.buildClozeQuestion(BYKEY[k], pool, items, (gate.clozeLast || {})[k]);
        s.curQ = { k, q }; clozeMap[k] = q.i;
        gate.clozeLast = gate.clozeLast || {}; gate.clozeLast[k] = q.i;
      } else q = s.curQ.q;
    } else if (stage && stage.type === 'recall') {
      if (!s.curQ || s.curQ.k !== k) { q = L.buildRecallQuestion(BYKEY[k], s.qi, s); s.curQ = { k, q }; }
      else q = s.curQ.q;
    } else {
      if (!s.curQ || s.curQ.k !== k) {
        q = stage && stage.type !== 'daily2' ? L.buildQuestion(stage, k, s.qi, BYKEY) : { w: BYKEY[k], type: intro ? ['word2def', 'def2word'][s.qi % 2] : rtypes[s.qi % 1000], options: L.choices(BYKEY[k], pool) };
        s.curQ = { k, q };
      } else q = s.curQ.q;
    }
    const w = q.w, type = q.type, opts = q.options;
    const labelOf = o => type === 'cloze' ? o.fill : type === 'def2word' ? o.w : o.d;
    const rawOf = o => type === 'cloze' ? o.w : o;
    let body;
    if (type === 'type') body = `<p class="muted">Type the word that means:</p><p><b>${esc(w.d)}</b> <span class="pos">(${w.p})</span></p>
      <form id="tf" class="row"><input type="text" id="ti" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Your answer"><button>Check</button>${stage && stage.type === 'recall' ? '' : '<button type="button" class="ghost" id="hint">Show first letter</button>'}</form>`;
    else if (type === 'typeDef') body = `<p class="muted">Type the definition of this word.</p><div class="word">${esc(w.w)}</div><span class="pos">${w.p}</span>
      <form id="tf"><textarea id="ti" rows="3" autocomplete="off" autocapitalize="off" aria-label="Your definition"></textarea><div class="row" style="margin-top:.5rem"><button>Check</button></div></form>`;
    else if (type === 'cloze') body = `<p class="muted">Choose the word that best completes the sentence.</p>
      <p class="word" style="font-size:1.15rem;font-weight:500">${esc(q.prompt).replace('_____', '______')}</p>
      <div class="opts">${opts.map((o, i) => `<button data-i="${i}">${esc(o.fill)}</button>`).join('')}</div>`;
    else body = `<p class="muted">${type === 'def2word' ? 'Which word means:' : 'What does this word mean?'}</p>
      ${type === 'def2word' ? `<p><b>${esc(w.d)}</b> <span class="pos">(${w.p})</span></p>` : `<div class="word">${esc(w.w)}</div>`}
      <div class="opts">${opts.map((o, i) => `<button data-i="${i}">${esc(type === 'def2word' ? o.w : o.d)}</button>`).join('')}</div>`;
    const reviewBtn = (stage && stage.type === 'unit') ? '<button class="ghost" id="peek">Review words</button>' : '';
    app.innerHTML = `<section class="card"><div class="row" style="justify-content:space-between"><p class="muted">${esc(title)} · ${s.done}/${s.total} done · ${s.missed.length} missed on first try${retry ? ' · retry' : ''}</p>
      <div class="row">${soundBtn()}${reviewBtn}<button class="ghost" id="pause">${keep ? 'Save & exit' : 'Exit'}</button></div></div>${body}<div id="fb"></div></section>`;
    $('#pause').onclick = (stage && (stage.type === 'recall' || stage.type === 'daily' || stage.type === 'daily2')) ? dailyView : home;
    if ($('#peek')) $('#peek').onclick = () => {
      const unitWords = stage.words;
      app.innerHTML = `<section class="card"><h2>Review these words</h2><p class="muted">This does not change your quiz progress or score. Return to the same question when you are ready.</p>
        <table><tr><th>Word</th><th>Meaning</th></tr>${unitWords.map(x => `<tr><td><b>${esc(x.w)}</b> <span class="pos">${x.p}</span></td><td>${esc(x.d)}</td></tr>`).join('')}</table>
        <p><button class="alt" id="backq">Return to quiz</button></p></section>`;
      $('#backq').onclick = next;
    };
    let answered = false;
    const answer = (ok, chosen, typed) => {
      if (answered) return; answered = true; if (ok) ding();
      if (!s.seen.includes(k)) { L.grade(prog, w, ok); save(); }
      L.answerSession(s, ok); s.curQ = null; persist();
      const filled = type === 'cloze' ? `<br><span class="ex">“${L.markExample(q.prompt.replace('_____', q.fill), w)}”</span>` : (w.e ? `<br><span class="ex">“${L.markExample(w.e, w)}”</span>` : '');
      const official = type === 'typeDef' ? (ok ? `Correct. The official definition of <b>${esc(w.w)}</b> is: ${esc(w.d)}` : `<b>Not quite.</b> ${esc(L.explainWrong(type, w, chosen, typed, WORDS))} <br><span class="muted">This one will come back shortly.</span>`) : (ok ? `Correct. <b>${esc(w.w)}</b>: ${esc(w.d)}` : `<b>Not quite.</b> ${esc(L.explainWrong(type, w, chosen, typed, WORDS))} <br><span class="muted">This one will come back shortly.</span>`);
      $('#fb').innerHTML = `<div class="fb ${ok ? 'ok' : 'no'}">${official}${filled}
        <p style="margin:.6rem 0 0"><button id="go">Continue</button></p></div>`;
      app.querySelectorAll('.opts button,#tf button,#ti').forEach(b => b.disabled = true);
      $('#go').focus(); $('#go').onclick = next;
    };
    const lockInput = () => app.querySelectorAll('.opts button,#tf button,#ti').forEach(b => b.disabled = true);
    if (type === 'type' || type === 'typeDef') {
      $('#ti').focus();
      if ($('#hint')) $('#hint').onclick = () => { $('#ti').value = w.w[0]; $('#ti').focus(); };
      $('#tf').onsubmit = e => {
        e.preventDefault(); const v = $('#ti').value;
        if (type === 'type') return answer(L.checkTyped(v, w), null, v);
        const r = L.checkTypedDef(v, w);
        if (r.grade === 'right') return answer(true, null, v);
        if (r.grade === 'wrong') return answer(false, null, v);
        lockInput();
        const ex = w.e ? `<br><span class="ex">“${L.markExample(w.e, w)}”</span>` : '';
        $('#fb').innerHTML = `<div class="fb"><p>Close — compare what you wrote with the official definition, then decide.</p>
          <p>You wrote: “${esc(v.trim())}”</p>
          <p>The official definition of <b>${esc(w.w)}</b> is: ${esc(w.d)}</p>${ex}
          <div class="row" style="margin:.6rem 0 0"><button class="alt" id="yes">I was right</button><button id="no">I was wrong</button></div></div>`;
        $('#yes').focus();
        $('#yes').onclick = () => answer(true, null, v);
        $('#no').onclick = () => answer(false, null, v);
      };
    }
    else app.querySelectorAll('.opts button').forEach(b => b.onclick = () => {
      const chosen = rawOf(opts[+b.dataset.i]); const ok = chosen === w;
      b.classList.add(ok ? 'ok' : 'no');
      const ci = opts.findIndex(o => rawOf(o) === w); if (ci >= 0) app.querySelectorAll('.opts button')[ci].classList.add('ok');
      answer(ok, chosen); });
  };
  next();
}

function done(title, total, m, stage, result) {
  const idx = stage ? PATH.indexOf(stage) : -1, nxt = PATH[idx + 1];
  const isDaily = stage && (stage.type === 'daily' || stage.type === 'daily2');
  const isRecall = stage && stage.type === 'recall';
  const dailyMsg = result && isRecall ? (
    result.perfect ? '<p class="fb ok">Nice work — 100% on the first try. Recent Words Recall is optional and does not affect your path or Daily Review.</p>'
    : `<p class="fb no">${result.pct}% on the first try. This practice is optional; retake it whenever you like. It does not gate your path.</p>`)
    : result && isDaily ? (
    result.stale ? '<p class="fb no">A new day started, so this run no longer counts. Start today\'s Daily Review.</p>'
    : stage.type === 'daily' && result.perfect ? '<p class="fb ok">Part 1 done — 100% on the first try. Part 2: Fill in the blank is now unlocked on the Daily Review tab.</p>'
    : stage.type === 'daily' ? `<p class="fb no">${result.pct}% on the first try in Part 1. You need 100% before Part 2 unlocks. Retake Part 1 as many times as you like.</p>`
    : stage.type === 'daily2' && result.perfect ? '<p class="fb ok">Daily Review done — 100% on the first try in both parts. Your path is open again.</p>'
    : `<p class="fb no">${result.pct}% on the first try in Part 2. Daily Review needs 100% on both parts. Part 1 still counts; retake Part 2 as many times as you like.</p>`) : '';
  const verdict = dailyMsg || (!result ? '' : result.perfect ? `<p class="fb ok">100% on the first try — ${nxt ? `<b>${label(nxt)}</b> is unlocked.` : 'you finished the whole path!'}</p>`
    : `<p class="fb no">${result.pct}% on the first try. You need 100% to unlock the next step${gate.passed[stage.id] ? ' (this step is already passed, so nothing is relocked)' : ''}. Retake it as many times as you like.</p>`);
  const canRetake = stage && !(isDaily && result && result.perfect);
  const backDaily = isDaily || isRecall;
  app.innerHTML = `<section class="card"><h2>${esc(title)} — finished</h2><p>${total - m.length} of ${total} right on the first try.</p>${verdict}
   ${m.length ? `<p>Words to look at again:</p><ul>${m.map(w => `<li><b>${esc(w.w)}</b> — ${esc(w.d)}</li>`).join('')}</ul>` : ''}
   <div class="row">${canRetake ? '<button class="alt" id="again">Retake</button>' : ''}${m.length ? '<button class="ghost" id="r">Practice missed words</button>' : ''}<button id="h">${backDaily ? 'Back to Daily Review' : 'Back to path'}</button>${backDaily ? '<button class="ghost" id="hp">Back to path</button>' : ''}</div></section>`;
  $('#h').onclick = backDaily ? dailyView : home; if ($('#hp')) $('#hp').onclick = home; if ($('#r')) $('#r').onclick = () => quiz(m, 'Missed words');
  if ($('#again')) $('#again').onclick = () => stage.type === 'daily' ? startDaily() : stage.type === 'daily2' ? startDailyPart2() : stage.type === 'recall' ? startRecall() : startStage(stage, idx);
}

function backup() {
  app.innerHTML = `<section class="card"><h2>Backup / restore</h2><p class="muted">Progress lives in this browser only. Backups include word progress, unlocks, best scores, paused tests, Daily Review and grammar scores. Download one to keep it safe or move it to another device.</p>
   <div class="row"><button id="ex">Download backup</button><label class="btn" style="background:var(--sage);color:var(--ink)">Restore from file<input type="file" id="im" accept=".json" hidden></label><button class="ghost" id="h">Back</button></div><p id="msg"></p></section>`;
  $('#h').onclick = home;
  $('#ex').onclick = () => { const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([L.exportData(prog, gate, gram)], { type: 'application/json' }));
    a.download = `sat-vocab-backup-${new Date().toISOString().slice(0, 10)}.json`; a.click(); };
  $('#im').onchange = async e => { try { const r = L.importData(await e.target.files[0].text()); prog = r.progress; save(); if (r.gate) { gate = r.gate; saveGate(); } if (r.grammar) { gram = Object.assign({ passed: {}, resume: {} }, r.grammar); saveGram(); } $('#msg').textContent = r.gate ? 'Restored words, unlocks, scores and paused tests.' : 'Restored word progress (older backup; your unlocks were kept).'; }
    catch (err) { $('#msg').textContent = 'Could not restore: ' + err.message; } };
}
home();
