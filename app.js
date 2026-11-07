const L = window.Logic, UNITS = L.makeUnits(WORDS), $ = s => document.querySelector(s), app = $('#app');
const SKEY = 'satVocabProgress.v1';
let prog = JSON.parse(localStorage.getItem(SKEY) || '{}');
const save = () => localStorage.setItem(SKEY, JSON.stringify(prog));
// Unlock/test state lives under its own key so word progress is never touched.
const GKEY = 'satVocabPath.v1', PATH = L.makePath(UNITS), BYKEY = Object.fromEntries(WORDS.map(w => [L.key(w), w]));
let gate = Object.assign(L.newGate(), JSON.parse(localStorage.getItem(GKEY) || '{}'));
const saveGate = () => localStorage.setItem(GKEY, JSON.stringify(gate));
const label = it => it.type === 'unit' ? `Unit ${it.i + 1}` : it.type === 'review' ? `Review ${it.a + 1}–${it.b + 1}` : it.type === 'big' ? `Big Test ${it.n} (Units ${it.from + 1}–${it.to + 1})` : 'Final Test (all 384 words)';
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const fmt = t => { const d = Math.round((t - Date.now()) / L.DAY); return d <= 0 ? 'now' : d === 1 ? 'tomorrow' : `in ${d} days`; };
$('#home').onclick = e => { e.preventDefault(); home(); };

// Tell long-open tabs when a newer version has been published.
const VERSION = document.querySelector('meta[name=app-version]').content;
let stale = false;
fetch('version.txt?t=' + Date.now(), { cache: 'no-store' }).then(r => r.ok ? r.text() : VERSION).then(v => { if (v.trim() !== VERSION) { stale = true; home(); } }).catch(() => {});
function home() {
  const due = L.dueWords(prog, WORDS), learned = WORDS.filter(w => !L.isNew(prog, w)).length, weak = L.weakWords(prog, WORDS);
  const next = Object.values(prog).map(p => p.due).filter(d => d > Date.now()).sort((a, b) => a - b)[0];
  app.innerHTML = (stale ? `<p class="fb no">A newer version is available. <button id="upd">Reload</button></p>` : '') + `<section class="card"><div class="stats">
   <div class="stat"><b>${due.length}</b>reviews due</div><div class="stat"><b>${learned}</b>of 384 started</div>
   <div class="stat"><b>${weak.length}</b>weak words</div><div class="stat"><b>${next ? fmt(next) : '—'}</b>next review</div></div>
   <div class="row" style="margin-top:1rem"><button id="rev" ${due.length ? '' : 'disabled'}>Review due words (${Math.min(due.length, 30)})</button>
   <button class="alt" id="weak" ${weak.length ? '' : 'disabled'}>Practice weak words</button><button class="ghost" id="data">Backup / restore</button></div>
   <h2>Your path</h2><p class="muted">Units have up to 10 words. Each step opens after you get 100% on the first try in the step before it. Retake as often as you like. Due reviews and weak words are always open.</p>
   <div class="units">${PATH.map((it, idx) => {
     const u = it.words, open = L.isUnlocked(PATH, idx, gate), pass = gate.passed[it.id], best = gate.best[it.id];
     const st = u.filter(w => !L.isNew(prog, w)).length, res = gate.resume[it.id];
     const status = pass ? '✓ Passed' : open ? (best != null ? `Best ${best}% · need 100%` : 'Open') : '🔒 Locked';
     const btn = it.type === 'unit' ? (st < u.length ? 'Learn' : 'Practice') : res ? `Resume (${res.done}/${res.total})` : 'Start';
     return `<div class="unit ${it.type}${open ? '' : ' locked'}"><h3>${label(it)}</h3><small>${it.type === 'unit' ? esc(u[0].w) + ' – ' + esc(u[u.length - 1].w) : u.length + ' words'}</small>
     <div class="bar"><i style="width:${st / u.length * 100}%"></i></div><small>${status}</small>
     <div class="row" style="margin-top:.5rem"><button data-s="${idx}" ${open ? '' : 'disabled'}>${btn}</button>${it.type === 'unit' ? `<button class="ghost" data-f="${idx}" ${open ? '' : 'disabled'}>Cards</button><button class="ghost" data-w="${idx}" ${open ? '' : 'disabled'}>List</button>` : ''}</div></div>`;
   }).join('')}</div>`;
  if ($('#upd')) $('#upd').onclick = () => location.reload();
  $('#rev').onclick = () => quiz(due.slice(0, 30), 'Due review');
  $('#weak').onclick = () => quiz(weak, 'Weak words');
  $('#data').onclick = backup;
  const guard = f => b => b.onclick = () => { const idx = +Object.values(b.dataset)[0]; if (L.isUnlocked(PATH, idx, gate)) f(PATH[idx], idx); };
  app.querySelectorAll('[data-s]').forEach(guard(startStage));
  app.querySelectorAll('[data-f]').forEach(guard(it => flash(it.words, `${label(it)} cards`)));
  app.querySelectorAll('[data-w]').forEach(guard(it => list(it.i)));
}

function startStage(it, idx) {
  if (!L.isUnlocked(PATH, idx, gate)) return home();
  const run = () => quiz(it.words, label(it), true, it.pool || it.words, it);
  if (it.type === 'unit') { const fresh = it.words.filter(w => L.isNew(prog, w));
    return fresh.length ? flash(fresh, `${label(it)}: meet the new words`, run, false) : run(); }
  run();
}

function list(i) {
  app.innerHTML = `<section class="card"><h2>Unit ${i + 1} words</h2><table><tr><th>Word</th><th>Meaning</th><th>Next review</th></tr>${UNITS[i].map(w => {
    const p = prog[L.key(w)]; return `<tr><td><b>${esc(w.w)}</b> <span class="pos">${w.p}</span></td><td>${esc(w.d)}</td><td>${p ? fmt(p.due) : 'new'}</td></tr>`;
  }).join('')}</table><p><button id="b">Back</button></p></section>`; $('#b').onclick = home;
}

function flash(words, title, then, graded = true) {
  let n = 0, flipped = false; const again = [];
  const show = () => {
    if (n >= words.length) return then ? then() : done(title, words.length, again);
    const w = words[n];
    app.innerHTML = `<section class="card"><p class="muted">${esc(title)} · ${n + 1}/${words.length}</p>
     <div class="flash card" id="fc" tabindex="0" role="button" aria-label="Flip card">${flipped || !graded ? `<div class="word">${esc(w.w)}</div><span class="pos">${w.p}</span><p>${esc(w.d)}</p>${w.e ? `<p class="ex">“${esc(w.e)}”</p>` : ''}` : `<div class="word">${esc(w.w)}</div><p class="muted">Think of the meaning, then tap to flip</p>`}</div>
     <div class="row">${graded ? (flipped ? `<button class="alt" id="y">I knew it</button><button id="n">Not yet</button>` : `<button id="fl">Flip</button>`) : `<button id="nx">Next</button>`}<button class="ghost" id="q">Exit</button></div></section>`;
    const flip = () => { if (graded) { flipped = true; show(); } };
    $('#fc').onclick = flip; $('#fc').onkeydown = e => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), flip());
    $('#q').onclick = home;
    if ($('#fl')) $('#fl').onclick = flip;
    if ($('#nx')) $('#nx').onclick = () => { n++; show(); };
    if ($('#y')) $('#y').onclick = () => { L.grade(prog, w, true); save(); n++; flipped = false; show(); };
    if ($('#n')) $('#n').onclick = () => { L.grade(prog, w, false); save(); again.push(w); words = words.concat([w]); n++; flipped = false; show(); };
  };
  show();
}

// Quiz: a miss is graded once (first try) and retried later in the same session.
// stage: a path step (unit/review/test). Big and final tests save progress so they can be resumed.
function quiz(words, title, intro = false, pool = WORDS, stage = null) {
  if (!words.length) return home();
  const keep = stage && (stage.type === 'big' || stage.type === 'final');
  let s = keep && gate.resume[stage.id];
  if (!s) s = L.newSession(words.map(L.key));
  const rtypes = intro ? null : L.quizTypes(1000, false);
  const persist = () => { if (keep) { gate.resume[stage.id] = s; saveGate(); } };
  persist();
  const next = () => {
    if (!s.queue.length) {
      let result = null;
      if (stage) { if (keep) delete gate.resume[stage.id]; result = L.recordAttempt(gate, stage.id, s.total, s.missed.length); saveGate(); }
      return done(title, s.total, s.missed.map(k => BYKEY[k]), stage, result);
    }
    const { k, retry } = s.queue[0];
    const q = stage ? L.buildQuestion(stage, k, s.qi, BYKEY) : { w: BYKEY[k], type: intro ? ['word2def', 'def2word'][s.qi % 2] : rtypes[s.qi % 1000], options: L.choices(BYKEY[k], pool) };
    const w = q.w, type = q.type, opts = q.options;
    let body;
    if (type === 'type') body = `<p class="muted">Type the word that means:</p><p><b>${esc(w.d)}</b> <span class="pos">(${w.p})</span></p>
      <form id="tf" class="row"><input type="text" id="ti" autocomplete="off" autocapitalize="off" aria-label="Your answer"><button>Check</button><button type="button" class="ghost" id="hint">Show first letter</button></form>`;
    else body = `<p class="muted">${type === 'def2word' ? 'Which word means:' : 'What does this word mean?'}</p>
      ${type === 'def2word' ? `<p><b>${esc(w.d)}</b> <span class="pos">(${w.p})</span></p>` : `<div class="word">${esc(w.w)}</div>`}
      <div class="opts">${opts.map((o, i) => `<button data-i="${i}">${esc(type === 'def2word' ? o.w : o.d)}</button>`).join('')}</div>`;
    app.innerHTML = `<section class="card"><div class="row" style="justify-content:space-between"><p class="muted">${esc(title)} · ${s.done}/${s.total} done · ${s.missed.length} missed on first try${retry ? ' · retry' : ''}</p>
      <button class="ghost" id="pause">${keep ? 'Save & exit' : 'Exit'}</button></div>${body}<div id="fb"></div></section>`;
    $('#pause').onclick = home;
    const answer = ok => {
      if (!s.seen.includes(k)) { L.grade(prog, w, ok); save(); }
      L.answerSession(s, ok); persist();
      $('#fb').innerHTML = `<div class="fb ${ok ? 'ok' : 'no'}">${ok ? 'Correct.' : 'Not quite — this one will come back shortly.'} <b>${esc(w.w)}</b>: ${esc(w.d)}${w.e ? `<br><span class="ex">“${esc(w.e)}”</span>` : ''}
        <p style="margin:.6rem 0 0"><button id="go">Continue</button></p></div>`;
      app.querySelectorAll('.opts button,#tf button,#ti').forEach(b => b.disabled = true);
      $('#go').focus(); $('#go').onclick = next;
    };
    if (type === 'type') { $('#ti').focus(); $('#hint').onclick = () => { $('#ti').value = w.w[0]; $('#ti').focus(); };
      $('#tf').onsubmit = e => { e.preventDefault(); answer(L.checkTyped($('#ti').value, w)); }; }
    else app.querySelectorAll('.opts button').forEach(b => b.onclick = () => {
      const ok = opts[+b.dataset.i] === w; b.classList.add(ok ? 'ok' : 'no');
      app.querySelectorAll('.opts button')[opts.indexOf(w)].classList.add('ok'); answer(ok); });
  };
  next();
}

function done(title, total, m, stage, result) {
  const idx = stage ? PATH.indexOf(stage) : -1, nxt = PATH[idx + 1];
  const verdict = !result ? '' : result.perfect ? `<p class="fb ok">100% on the first try — ${nxt ? `<b>${label(nxt)}</b> is unlocked.` : 'you finished the whole path!'}</p>`
    : `<p class="fb no">${result.pct}% on the first try. You need 100% to unlock the next step${gate.passed[stage.id] ? ' (this step is already passed, so nothing is relocked)' : ''}. Retake it as many times as you like.</p>`;
  app.innerHTML = `<section class="card"><h2>${esc(title)} — finished</h2><p>${total - m.length} of ${total} right on the first try.</p>${verdict}
   ${m.length ? `<p>Words to look at again:</p><ul>${m.map(w => `<li><b>${esc(w.w)}</b> — ${esc(w.d)}</li>`).join('')}</ul>` : ''}
   <div class="row">${stage ? '<button class="alt" id="again">Retake</button>' : ''}${m.length ? '<button class="ghost" id="r">Practice missed words</button>' : ''}<button id="h">Back to path</button></div></section>`;
  $('#h').onclick = home; if ($('#r')) $('#r').onclick = () => quiz(m, 'Missed words');
  if ($('#again')) $('#again').onclick = () => startStage(stage, idx);
}

function backup() {
  app.innerHTML = `<section class="card"><h2>Backup / restore</h2><p class="muted">Progress lives in this browser only. Backups include word progress, unlocks, best scores and paused tests. Download one to keep it safe or move it to another device.</p>
   <div class="row"><button id="ex">Download backup</button><label class="btn" style="background:var(--sage);color:var(--ink)">Restore from file<input type="file" id="im" accept=".json" hidden></label><button class="ghost" id="h">Back</button></div><p id="msg"></p></section>`;
  $('#h').onclick = home;
  $('#ex').onclick = () => { const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([L.exportData(prog, gate)], { type: 'application/json' }));
    a.download = `sat-vocab-backup-${new Date().toISOString().slice(0, 10)}.json`; a.click(); };
  $('#im').onchange = async e => { try { const r = L.importData(await e.target.files[0].text()); prog = r.progress; save(); if (r.gate) { gate = r.gate; saveGate(); } $('#msg').textContent = r.gate ? 'Restored words, unlocks, scores and paused tests.' : 'Restored word progress (older backup; your unlocks were kept).'; }
    catch (err) { $('#msg').textContent = 'Could not restore: ' + err.message; } };
}
home();
