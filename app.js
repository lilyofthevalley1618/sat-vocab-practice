const L = window.Logic, UNITS = L.makeUnits(WORDS), $ = s => document.querySelector(s), app = $('#app');
const SKEY = 'satVocabProgress.v1';
let prog = JSON.parse(localStorage.getItem(SKEY) || '{}');
const save = () => localStorage.setItem(SKEY, JSON.stringify(prog));
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const fmt = t => { const d = Math.round((t - Date.now()) / L.DAY); return d <= 0 ? 'now' : d === 1 ? 'tomorrow' : `in ${d} days`; };
$('#home').onclick = e => { e.preventDefault(); home(); };

function home() {
  const due = L.dueWords(prog, WORDS), learned = WORDS.filter(w => !L.isNew(prog, w)).length, weak = L.weakWords(prog, WORDS);
  const next = Object.values(prog).map(p => p.due).filter(d => d > Date.now()).sort((a, b) => a - b)[0];
  app.innerHTML = `<section class="card"><div class="stats">
   <div class="stat"><b>${due.length}</b>reviews due</div><div class="stat"><b>${learned}</b>of 384 started</div>
   <div class="stat"><b>${weak.length}</b>weak words</div><div class="stat"><b>${next ? fmt(next) : '—'}</b>next review</div></div>
   <div class="row" style="margin-top:1rem"><button id="rev" ${due.length ? '' : 'disabled'}>Review due words (${Math.min(due.length, 30)})</button>
   <button class="alt" id="weak" ${weak.length ? '' : 'disabled'}>Practice weak words</button><button class="ghost" id="data">Backup / restore</button></div>
   <h2>Units (up to 10 words each)</h2><div class="units">${UNITS.map((u, i) => {
     const st = u.filter(w => !L.isNew(prog, w)).length, d = L.dueWords(prog, u).length;
     return `<div class="unit"><h3>Unit ${i + 1}</h3><small>${esc(u[0].w)} – ${esc(u[u.length - 1].w)}</small>
     <div class="bar"><i style="width:${st / u.length * 100}%"></i></div><small>${st}/${u.length} started · ${d} due</small>
     <div class="row" style="margin-top:.5rem"><button data-l="${i}">${st < u.length ? 'Learn' : 'Practice'}</button><button class="ghost" data-f="${i}">Cards</button><button class="ghost" data-w="${i}">List</button></div></div>`;
   }).join('')}</div>`;
  $('#rev').onclick = () => quiz(due.slice(0, 30), 'Due review');
  $('#weak').onclick = () => quiz(weak, 'Weak words');
  $('#data').onclick = backup;
  app.querySelectorAll('[data-l]').forEach(b => b.onclick = () => learn(+b.dataset.l));
  app.querySelectorAll('[data-f]').forEach(b => b.onclick = () => flash(UNITS[+b.dataset.f], `Unit ${+b.dataset.f + 1} cards`));
  app.querySelectorAll('[data-w]').forEach(b => b.onclick = () => list(+b.dataset.w));
}

function list(i) {
  app.innerHTML = `<section class="card"><h2>Unit ${i + 1} words</h2><table><tr><th>Word</th><th>Meaning</th><th>Next review</th></tr>${UNITS[i].map(w => {
    const p = prog[L.key(w)]; return `<tr><td><b>${esc(w.w)}</b> <span class="pos">${w.p}</span></td><td>${esc(w.d)}</td><td>${p ? fmt(p.due) : 'new'}</td></tr>`;
  }).join('')}</table><p><button id="b">Back</button></p></section>`; $('#b').onclick = home;
}

// Learn: new words shown as cards first, then the whole unit is quizzed.
function learn(i) {
  const fresh = UNITS[i].filter(w => L.isNew(prog, w));
  if (fresh.length) flash(fresh, `Unit ${i + 1}: meet the new words`, () => quiz(UNITS[i], `Unit ${i + 1} practice`, true), false);
  else quiz(UNITS[i], `Unit ${i + 1} practice`);
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

// Quiz: mixed question types; a miss is graded once and retried later in the same session.
function quiz(words, title, intro = false) {
  if (!words.length) return home();
  let queue = L.shuffle(words).map(w => ({ w, retry: false })), done_ = 0; const missed = [], seen = new Set();
  const total = words.length, types = L.quizTypes(1000, intro); let qi = 0;
  const next = () => {
    if (!queue.length) return done(title, total, missed);
    const { w, retry } = queue[0], type = types[qi++];
    const opts = L.choices(w, WORDS);
    let body;
    if (type === 'type') body = `<p class="muted">Type the word that means:</p><p><b>${esc(w.d)}</b> <span class="pos">(${w.p})</span></p>
      <form id="tf" class="row"><input type="text" id="ti" autocomplete="off" autocapitalize="off" aria-label="Your answer"><button>Check</button><button type="button" class="ghost" id="hint">Show first letter</button></form>`;
    else body = `<p class="muted">${type === 'def2word' ? 'Which word means:' : 'What does this word mean?'}</p>
      ${type === 'def2word' ? `<p><b>${esc(w.d)}</b> <span class="pos">(${w.p})</span></p>` : `<div class="word">${esc(w.w)}</div>`}
      <div class="opts">${opts.map((o, i) => `<button data-i="${i}">${esc(type === 'def2word' ? o.w : o.d)}</button>`).join('')}</div>`;
    app.innerHTML = `<section class="card"><p class="muted">${esc(title)} · ${done_}/${total} done${retry ? ' · retry' : ''}</p>${body}<div id="fb"></div></section>`;
    const answer = ok => {
      const k = L.key(w);
      if (!seen.has(k)) { seen.add(k); L.grade(prog, w, ok); save(); if (!ok) missed.push(w); }
      queue.shift();
      if (ok) done_++; else queue.splice(Math.min(3, queue.length), 0, { w, retry: true });
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

function done(title, total, missed) {
  const m = [...new Set(missed)];
  app.innerHTML = `<section class="card"><h2>${esc(title)} — finished</h2><p>${total - m.length} of ${total} right on the first try.</p>
   ${m.length ? `<p>Words to look at again:</p><ul>${m.map(w => `<li><b>${esc(w.w)}</b> — ${esc(w.d)}</li>`).join('')}</ul>` : '<p>Nothing missed this round.</p>'}
   <div class="row">${m.length ? '<button class="alt" id="r">Retry missed words</button>' : ''}<button id="h">Back to units</button></div></section>`;
  $('#h').onclick = home; if ($('#r')) $('#r').onclick = () => quiz(m, 'Missed words');
}

function backup() {
  app.innerHTML = `<section class="card"><h2>Backup / restore</h2><p class="muted">Progress lives in this browser only. Download a backup to keep it safe or move it to another device.</p>
   <div class="row"><button id="ex">Download backup</button><label class="btn" style="background:var(--sage);color:var(--ink)">Restore from file<input type="file" id="im" accept=".json" hidden></label><button class="ghost" id="h">Back</button></div><p id="msg"></p></section>`;
  $('#h').onclick = home;
  $('#ex').onclick = () => { const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([L.exportData(prog)], { type: 'application/json' }));
    a.download = `sat-vocab-backup-${new Date().toISOString().slice(0, 10)}.json`; a.click(); };
  $('#im').onchange = async e => { try { prog = L.importData(await e.target.files[0].text()); save(); $('#msg').textContent = 'Restored.'; }
    catch (err) { $('#msg').textContent = 'Could not restore: ' + err.message; } };
}
home();
