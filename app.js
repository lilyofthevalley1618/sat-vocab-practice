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
const RKEY = 'satGrammar.v1'; let gram = JSON.parse(localStorage.getItem(RKEY) || '{}'); const saveGram = () => localStorage.setItem(RKEY, JSON.stringify(gram));
const dayCheck = () => { if (L.ensureDaily(gate, prog)) { saveGate(); if (onHome) home(); } };  // re-renders the Path tab on a new day
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
  if (gate.daily.passed) return dailyView();
  if (gate.resume.daily2 || gate.daily.part1) return startDailyPart2();
  const st = dailyStage();
  if (st.words.length || gate.resume.daily) quiz(st.words, 'Daily Review, Part 1', true, st.words, st);
  else dailyView();
};
const startDailyPart2 = () => {
  dayCheck();
  if (!gate.daily || gate.daily.passed || (gate.daily.day !== L.laDay())) return dailyView();
  const baseKeys = gate.daily.part1Keys || L.withWeak(dailyStage().words, prog, WORDS).map(L.key);
  const st = { type: 'daily2', id: 'daily2', day: gate.daily.day, words: baseKeys.map(k => BYKEY[k]).filter(Boolean) };
  quiz(st.words, 'Daily Review, Part 2', false, st.words, st);
};
const tabs = cur => `<nav class="tabs row" style="margin-bottom:1rem"><button class="${cur === 'path' ? '' : 'ghost'}" id="tabPath">Path</button><button class="${cur === 'daily' ? '' : 'ghost'}" id="tabDaily">Daily Review${L.dailyBlocks(gate) ? ' (to do)' : ''}</button><button class="${cur === 'grammar' ? '' : 'ghost'}" id="tabGram">Grammar Rules</button>${soundBtn()}</nav>`;
const wireTabs = () => { $('#tabPath').onclick = home; $('#tabDaily').onclick = dailyView; $('#tabGram').onclick = grammarView; };
// Grammar Rules tab: reference + practice, independent of the vocab path and Daily Review.
function grammarView() {
  onHome = false;
  app.innerHTML = tabs('grammar') + `<section class="card"><h2>SAT Grammar Rules</h2><p class="muted">${GRAMMAR.length} rules tested in the Digital SAT's Reading and Writing section (Standard English Conventions and transitions). On the Digital SAT these come as short single-passage questions, not long paper-test passages. Explanations and practice here are original; topics drawn from PrepScholar's <a href="https://blog.prepscholar.com/sat-grammar-rules-you-must-know">SAT Grammar Rules You Must Know</a> and <a href="https://blog.prepscholar.com/the-complete-guide-to-sat-grammar-rules">The Complete Guide to SAT Grammar Rules</a>. Not affiliated with PrepScholar or College Board.</p></section>
   <div class="units">${GRAMMAR.map((t, i) => `<div class="unit"><h3>${i + 1}. ${esc(t.title)}</h3><small>${esc(t.rule.slice(0, 80))}…</small><small>${gram[t.id] ? `Best ${gram[t.id].best}%` : 'Not practiced yet'}</small>
     <div class="row" style="margin-top:.5rem"><button data-g="${i}">Open</button></div></div>`).join('')}</div>`;
  wireTabs(); app.querySelectorAll('[data-g]').forEach(b => b.onclick = () => topicView(+b.dataset.g));
}
function topicView(i) {
  const t = GRAMMAR[i];
  app.innerHTML = tabs('grammar') + `<section class="card"><h2>${esc(t.title)}</h2><p><b>Rule:</b> ${esc(t.rule)}</p><p><b>Common trap:</b> ${esc(t.trap)}</p>
   <p class="fb no"><b>Before:</b> ${esc(t.before)}</p><p class="fb ok"><b>After:</b> ${esc(t.after)}</p>
   <div class="row"><button class="alt" id="gp">Practice (${t.qs.length} questions)</button><button class="ghost" id="gb">All rules</button></div></section>`;
  wireTabs(); $('#gb').onclick = grammarView; $('#gp').onclick = () => gramQuiz(i, t.qs.map((_, n) => n), true);
}
function gramQuiz(i, list, scored) {
  const t = GRAMMAR[i]; let n = 0, right = 0; const missed = [];
  const show = () => {
    if (n >= list.length) {
      const pct = scored ? L.recordGrammar(gram, t.id, list.length, right) : null; if (scored) saveGram();
      app.innerHTML = tabs('grammar') + `<section class="card"><h2>${esc(t.title)} — done</h2><p>${right} of ${list.length} right${scored ? ` (${pct}%; best ${gram[t.id].best}%)` : ''}.</p>
        <div class="row">${missed.length ? '<button class="alt" id="gr">Retry missed</button>' : ''}<button id="gt">Back to rule</button><button class="ghost" id="ga">All rules</button></div></section>`;
      wireTabs(); $('#gt').onclick = () => topicView(i); $('#ga').onclick = grammarView; if ($('#gr')) $('#gr').onclick = () => gramQuiz(i, missed.slice(), false);
      return;
    }
    const q = t.qs[list[n]];
    app.innerHTML = tabs('grammar') + `<section class="card"><p class="muted">${esc(t.title)} · ${n + 1}/${list.length}</p><p><b>${esc(q.q)}</b></p>
      <div class="opts">${q.o.map((o, k) => `<button data-k="${k}">${esc(o)}</button>`).join('')}</div><div id="fb"></div></section>`;
    wireTabs();
    app.querySelectorAll('.opts button').forEach(b => b.onclick = () => {
      const k = +b.dataset.k, ok = k === q.a; if (ok) { right++; ding(); } else missed.push(list[n]);
      b.classList.add(ok ? 'ok' : 'no'); app.querySelectorAll('.opts button')[q.a].classList.add('ok'); app.querySelectorAll('.opts button').forEach(x => x.disabled = true);
      $('#fb').innerHTML = `<div class="fb ${ok ? 'ok' : 'no'}">${ok ? 'Correct.' : 'Not quite.'} ${esc(q.why)}<p style="margin:.6rem 0 0"><button id="go">Continue</button></p></div>`;
      $('#go').focus(); $('#go').onclick = () => { n++; show(); };
    });
  };
  show();
}
function dailyView() {
  onHome = true; dayCheck(); const dly = gate.daily;
  const nToday = L.withWeak(dailyStage().words, prog, WORDS).length;
  const extra = nToday - dly.words.length;
  const half = nToday ? L.halfCount(nToday) : 0;
  const paused1 = gate.resume.daily, paused2 = gate.resume.daily2;
  let body;
  if (!dly.words.length && dly.passed && !nToday) body = '<p>Nothing to review yet today. Words you start today will be in tomorrow\'s Daily Review.</p>';
  else if (dly.passed) body = `<p>✓ Done for today. You finished both parts of Daily Review. Your path is open.</p>`;
  else if (dly.part1) body = `<p>Part 1 is done. Part 2 still needed: ${paused2 ? `paused at ${paused2.done}/${paused2.total}` : half + ' fill-in sentences'} (half of today's words). You need 100% on the first try in Part 2 as well.</p><button class="alt" id="daily">${paused2 ? 'Resume Part 2' : 'Start Part 2'}</button>`;
  else body = `<p>${nToday} words: ${dly.words.length} learned before today${extra ? ` plus ${extra} weak word${extra > 1 ? 's' : ''} from today` : ''}. Daily Review has two parts. Part 1 checks meanings for all of today's words. Part 2 uses half of those words (${half || '—'}) in fill-in-the-blank sentences. You need 100% on the first try in <b>both</b> parts.${paused1 ? ` Part 1 is paused at ${paused1.done}/${paused1.total}.` : ''}</p><button class="alt" id="daily">${paused1 ? 'Resume Part 1' : 'Start Daily Review'}</button>`;
  app.innerHTML = tabs('daily') + `<section class="card daily"><h2>Daily Review — ${dly.day}</h2>${body}</section>`;
  wireTabs(); if ($('#daily')) $('#daily').onclick = startDaily;
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
          if (result.perfect) { gate.daily.part1Keys = s.keys.slice(); saveGate(); return startDailyPart2(); }
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
      <form id="tf" class="row"><input type="text" id="ti" autocomplete="off" autocapitalize="off" aria-label="Your answer"><button>Check</button><button type="button" class="ghost" id="hint">Show first letter</button></form>`;
    else if (type === 'cloze') body = `<p class="muted">Choose the word that best completes the sentence.</p>
      <p class="word" style="font-size:1.15rem;font-weight:500">${esc(q.prompt).replace('_____', '______')}</p>
      <div class="opts">${opts.map((o, i) => `<button data-i="${i}">${esc(o.fill)}</button>`).join('')}</div>`;
    else body = `<p class="muted">${type === 'def2word' ? 'Which word means:' : 'What does this word mean?'}</p>
      ${type === 'def2word' ? `<p><b>${esc(w.d)}</b> <span class="pos">(${w.p})</span></p>` : `<div class="word">${esc(w.w)}</div>`}
      <div class="opts">${opts.map((o, i) => `<button data-i="${i}">${esc(type === 'def2word' ? o.w : o.d)}</button>`).join('')}</div>`;
    const reviewBtn = (stage && stage.type === 'unit') ? '<button class="ghost" id="peek">Review words</button>' : '';
    app.innerHTML = `<section class="card"><div class="row" style="justify-content:space-between"><p class="muted">${esc(title)} · ${s.done}/${s.total} done · ${s.missed.length} missed on first try${retry ? ' · retry' : ''}</p>
      <div class="row">${soundBtn()}${reviewBtn}<button class="ghost" id="pause">${keep ? 'Save & exit' : 'Exit'}</button></div></div>${body}<div id="fb"></div></section>`;
    $('#pause').onclick = home;
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
      $('#fb').innerHTML = `<div class="fb ${ok ? 'ok' : 'no'}">${ok ? `Correct. <b>${esc(w.w)}</b>: ${esc(w.d)}` : `<b>Not quite.</b> ${esc(L.explainWrong(type, w, chosen, typed, WORDS))} <br><span class="muted">This one will come back shortly.</span>`}${filled}
        <p style="margin:.6rem 0 0"><button id="go">Continue</button></p></div>`;
      app.querySelectorAll('.opts button,#tf button,#ti').forEach(b => b.disabled = true);
      $('#go').focus(); $('#go').onclick = next;
    };
    if (type === 'type') { $('#ti').focus(); $('#hint').onclick = () => { $('#ti').value = w.w[0]; $('#ti').focus(); };
      $('#tf').onsubmit = e => { e.preventDefault(); const v = $('#ti').value; answer(L.checkTyped(v, w), null, v); }; }
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
  const dailyMsg = result && (stage && (stage.type === 'daily' || stage.type === 'daily2')) ? (
    result.stale ? '<p class="fb no">A new day started, so this run no longer counts. Start today\'s Daily Review.</p>'
    : stage.type === 'daily' && !result.perfect ? `<p class="fb no">${result.pct}% on the first try in Part 1. You need 100% before Part 2. Retake Part 1 as many times as you like.</p>`
    : stage.type === 'daily2' && result.perfect ? '<p class="fb ok">Daily Review done — 100% on the first try in both parts. Your path is open again.</p>'
    : stage.type === 'daily2' ? `<p class="fb no">${result.pct}% on the first try in Part 2. Daily Review needs 100% on both parts. Part 1 still counts; retake Part 2 as many times as you like.</p>`
    : '') : '';
  const verdict = dailyMsg || (!result ? '' : result.perfect ? `<p class="fb ok">100% on the first try — ${nxt ? `<b>${label(nxt)}</b> is unlocked.` : 'you finished the whole path!'}</p>`
    : `<p class="fb no">${result.pct}% on the first try. You need 100% to unlock the next step${gate.passed[stage.id] ? ' (this step is already passed, so nothing is relocked)' : ''}. Retake it as many times as you like.</p>`);
  app.innerHTML = `<section class="card"><h2>${esc(title)} — finished</h2><p>${total - m.length} of ${total} right on the first try.</p>${verdict}
   ${m.length ? `<p>Words to look at again:</p><ul>${m.map(w => `<li><b>${esc(w.w)}</b> — ${esc(w.d)}</li>`).join('')}</ul>` : ''}
   <div class="row">${stage ? '<button class="alt" id="again">Retake</button>' : ''}${m.length ? '<button class="ghost" id="r">Practice missed words</button>' : ''}<button id="h">Back to path</button></div></section>`;
  $('#h').onclick = home; if ($('#r')) $('#r').onclick = () => quiz(m, 'Missed words');
  if ($('#again')) $('#again').onclick = () => (stage.type === 'daily' || stage.type === 'daily2') ? startDaily() : startStage(stage, idx);
}

function backup() {
  app.innerHTML = `<section class="card"><h2>Backup / restore</h2><p class="muted">Progress lives in this browser only. Backups include word progress, unlocks, best scores, paused tests, Daily Review and grammar scores. Download one to keep it safe or move it to another device.</p>
   <div class="row"><button id="ex">Download backup</button><label class="btn" style="background:var(--sage);color:var(--ink)">Restore from file<input type="file" id="im" accept=".json" hidden></label><button class="ghost" id="h">Back</button></div><p id="msg"></p></section>`;
  $('#h').onclick = home;
  $('#ex').onclick = () => { const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([L.exportData(prog, gate, gram)], { type: 'application/json' }));
    a.download = `sat-vocab-backup-${new Date().toISOString().slice(0, 10)}.json`; a.click(); };
  $('#im').onchange = async e => { try { const r = L.importData(await e.target.files[0].text()); prog = r.progress; save(); if (r.gate) { gate = r.gate; saveGate(); } if (r.grammar) { gram = r.grammar; saveGram(); } $('#msg').textContent = r.gate ? 'Restored words, unlocks, scores and paused tests.' : 'Restored word progress (older backup; your unlocks were kept).'; }
    catch (err) { $('#msg').textContent = 'Could not restore: ' + err.message; } };
}
home();
