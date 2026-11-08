const L = require('./logic.js'), W = require('./words.js'), assert = require('assert');
assert.strictEqual(W.length, 384);
assert.strictEqual(new Set(W.map(L.key)).size, 384);
W.forEach(w => assert(w.w && w.d && w.p, w.w));
const U = L.makeUnits(W);
assert.strictEqual(U.length, 39); assert(U.every(u => u.length <= 10)); assert.strictEqual(U[38].length, 4);
assert.strictEqual(U.flat().length, 384);
const t0 = 1e12, P = {}, w = W[0];
assert(L.isNew(P, w));
let p = L.grade(P, w, true, t0); assert.strictEqual(p.stage, 0); assert.strictEqual(p.due, t0 + L.DAY);
for (const d of [3, 7, 14, 30]) { p = L.grade(P, w, true, t0); assert.strictEqual(p.due, t0 + d * L.DAY); }
p = L.grade(P, w, true, t0); assert.strictEqual(p.due, t0 + 30 * L.DAY); // capped
p = L.grade(P, w, false, t0); assert.strictEqual(p.stage, 0); assert.strictEqual(p.due, t0 + L.DAY); assert.strictEqual(p.lapses, 1);
assert.deepStrictEqual(L.dueWords(P, W, t0), []);
assert.deepStrictEqual(L.dueWords(P, W, t0 + L.DAY), [w]);
assert.deepStrictEqual(L.weakWords(P, W), [w]);
assert(L.checkTyped(' ABATE ', w) && !L.checkTyped('abait', w));
const c = L.choices(w, W); assert.strictEqual(c.length, 4); assert(c.includes(w)); assert.strictEqual(new Set(c).size, 4);
assert(c.every(x => x.p === w.p));
assert.deepStrictEqual(L.importData(L.exportData(P)).progress, P);
const old = JSON.stringify({ app: 'sat-vocab-practice', v: 1, progress: P }); const ro = L.importData(old);
assert.deepStrictEqual(ro.progress, P); assert.strictEqual(ro.gate, null); // v1 keeps existing unlocks
assert.throws(() => L.importData(JSON.stringify({ app: 'sat-vocab-practice', v: 2, progress: P, gate: { resume: { x: {} } } })));
assert.throws(() => L.importData('{"x":1}'));
const qt = L.quizTypes(10, true); assert(qt.includes('word2def') && qt.includes('def2word') && !qt.includes('type'));
assert(L.quizTypes(2, true).length === 2 && new Set(L.quizTypes(2, true)).size === 2);
for (const u of U) for (const w of u) {
  const ch = L.choices(w, u); const uk = new Set(u.map(L.key));
  assert.strictEqual(ch.length, Math.min(4, u.length)); assert(ch.every(x => uk.has(L.key(x))));
  assert.strictEqual(ch.filter(x => x === w).length, 1);
  assert.strictEqual(new Set(ch.map(L.key)).size, ch.length); assert.strictEqual(new Set(ch.map(x => x.d.toLowerCase())).size, ch.length);
}
const path = L.makePath(U), revs = path.filter(x => x.type === 'review'), bigs = path.filter(x => x.type === 'big');
assert.strictEqual(revs.length, 19); assert.strictEqual(bigs.length, 6); assert.strictEqual(path.length, 39 + 19 + 6 + 1);
assert.strictEqual(path[path.length - 1].id, 'final'); assert.strictEqual(path[path.length - 2].id, 'u38');
assert.strictEqual(path[path.length - 1].words.length, 384); assert.strictEqual(new Set(path[path.length - 1].words.map(L.key)).size, 384);
revs.forEach((r, n) => {
  assert.strictEqual(r.a, 0); assert.strictEqual(r.b, 2 * n + 1); assert.strictEqual(r.id, 'r' + (2 * n));
  const pi = path.indexOf(r); assert(path[pi - 1].i === r.b && path[pi - 2].i === r.b - 1);
  assert.strictEqual(r.words.length, Math.min(20 * (n + 1), 380)); assert.strictEqual(new Set(r.words.map(L.key)).size, r.words.length);
  assert.deepStrictEqual(r.words, W.slice(0, r.words.length));
  const rk = new Set(r.words.map(L.key));
  for (const w of r.words.slice(0, 40)) { const ch = L.choices(w, r.words); assert.strictEqual(ch.length, 4); assert(ch.every(x => rk.has(L.key(x)))); assert.strictEqual(new Set(ch.map(L.key)).size, 4); }
});
assert.deepStrictEqual(revs.map(r => r.words.length), Array.from({ length: 19 }, (_, n) => 20 * (n + 1)));
// stale/mismatched saved review sessions are not resumed; matching ones are
const r2 = path.find(x => x.id === 'r2'); assert.strictEqual(r2.words.length, 40);
assert(!L.validResume(L.newSession(U[2].concat(U[3]).map(L.key)), r2.words));
const okS = L.newSession(r2.words.map(L.key)); L.answerSession(okS, true); assert(L.validResume(JSON.parse(JSON.stringify(okS)), r2.words));
bigs.forEach((b, n) => {
  const pi = path.indexOf(b); assert.strictEqual(path[pi - 1].id, 'r' + (6 * n + 4)); assert.strictEqual(path[pi - 2].id, 'u' + (6 * n + 5));
  assert.strictEqual(b.words.length, 60); assert.deepStrictEqual(b.words, W.slice(60 * n, 60 * n + 60));
});
// gating
const G = L.newGate();
assert(L.isUnlocked(path, 0, G)); for (let i = 1; i < path.length; i++) assert(!L.isUnlocked(path, i, G));
assert.deepStrictEqual(L.recordAttempt(G, 'u0', 10, 1), { pct: 90, perfect: false }); assert(!L.isUnlocked(path, 1, G));
// miss then retry correct in same session: still not perfect
const S = L.newSession(U[0].map(L.key), () => 0.3); L.answerSession(S, false);
while (S.queue.length) L.answerSession(S, true);
assert.strictEqual(S.done, 10); assert.strictEqual(S.missed.length, 1);
assert(!L.recordAttempt(G, 'u0', S.total, S.missed.length).perfect); assert(!L.isUnlocked(path, 1, G));
assert(L.recordAttempt(G, 'u0', 10, 0).perfect); assert(L.isUnlocked(path, 1, G)); assert(!L.isUnlocked(path, 2, G));
L.recordAttempt(G, 'u0', 10, 5); assert(L.isUnlocked(path, 1, G)); assert.strictEqual(G.best.u0, 100); // no relock
L.recordAttempt(G, 'u1', 10, 0); assert(L.isUnlocked(path, 2, G)); assert(!L.isUnlocked(path, 3, G)); // review gates unit 3
L.recordAttempt(G, 'r0', 20, 0); assert(L.isUnlocked(path, 3, G));
const G2 = JSON.parse(JSON.stringify(G)); assert(L.isUnlocked(path, 3, G2) && !L.isUnlocked(path, 4, G2)); // persists via JSON
// resume: a 384 session survives JSON round trip mid-way
let F = L.newSession(path[path.length - 1].words.map(L.key)); for (let i = 0; i < 100; i++) L.answerSession(F, i !== 5);
F = JSON.parse(JSON.stringify(F)); assert.strictEqual(F.done, 99); assert.strictEqual(F.missed.length, 1);
let n = 0; while (!L.answerSession(F, true)) n++;
assert.strictEqual(F.done, 384); assert.strictEqual(new Set(F.seen).size, 384); assert.strictEqual(F.missed.length, 1);
const rt = L.quizTypes(20, true); assert(rt.filter(x => x === 'word2def').length === 10 && rt.filter(x => x === 'def2word').length === 10);
const bk = L.importData(L.exportData(P, G)); assert.deepStrictEqual(bk.gate.passed, G.passed); assert.deepStrictEqual(bk.gate.best, G.best);
const G3 = L.newGate(); G3.resume.final = JSON.parse(JSON.stringify(L.newSession(['a', 'b']))); L.answerSession(G3.resume.final, false);
const b3 = L.importData(L.exportData({}, G3)); assert.deepStrictEqual(b3.gate.resume.final, G3.resume.final);
// Integration: real path stages + session -> rendered question options
const BY = Object.fromEntries(W.map(w => [L.key(w), w]));
const u2 = path.find(x => x.id === 'u1'), pair = new Set(U[0].concat(U[1]).map(L.key));
assert.strictEqual(u2.pool.length, 20); assert.deepStrictEqual(new Set(u2.pool.map(L.key)), pair);
assert.strictEqual(path.find(x => x.id === 'u0').pool.length, 20); assert.strictEqual(path.find(x => x.id === 'u38').pool.length, 4);
for (const st of path) {
  const poolK = new Set((st.pool || st.words).map(L.key));
  const S2 = L.newSession(st.words.map(L.key));
  for (let qi = 0; S2.queue.length && qi < 60; qi++) {
    const q = L.buildQuestion(st, S2.queue[0].k, S2.qi, BY);
    assert(q.options.every(o => poolK.has(L.key(o))), st.id); assert.strictEqual(q.options.filter(o => o === q.w).length, 1);
    L.answerSession(S2, true);
  }
}
for (let r = 0; r < 200; r++) for (const qi of [0, 1]) {
  const q = L.buildQuestion(u2, 'adapt', qi, BY);
  assert(!q.options.some(o => /^(speculate|invent|fabricate)$/i.test(o.w))); assert(q.options.every(o => pair.has(L.key(o))));
}
// a resumed (JSON) session still gets fresh pair-pool options
const RS = JSON.parse(JSON.stringify(L.newSession(u2.words.map(L.key)))); assert(L.buildQuestion(u2, RS.queue[0].k, RS.qi, BY).options.every(o => pair.has(L.key(o))));
const ex = [0, 1].map(qi => L.buildQuestion(u2, 'adapt', qi, BY)); console.log(ex.map(q => q.type + ': ' + q.options.map(o => q.type === 'word2def' ? o.w + '=' + o.d : o.w).join(' | ')).join('\n'));
// Daily Review
const DT = Date.UTC(2026, 10, 7, 20); // Nov 7 12pm PST
assert.strictEqual(L.laDay(DT), '2026-11-07');
assert.strictEqual(L.laDay(Date.UTC(2026, 10, 8, 7, 59)), '2026-11-07'); assert.strictEqual(L.laDay(Date.UTC(2026, 10, 8, 8)), '2026-11-08');
assert.strictEqual(L.laDay(Date.UTC(2026, 6, 8, 6, 59)), '2026-07-07'); assert.strictEqual(L.laDay(Date.UTC(2026, 6, 8, 7)), '2026-07-08'); // PDT
assert.strictEqual(L.laDay(Date.UTC(2026, 2, 8, 7, 59)), '2026-03-07'); assert.strictEqual(L.laDay(Date.UTC(2026, 2, 8, 8)), '2026-03-08'); // DST start day
const DG = L.newGate(), DP = {};
assert(L.ensureDaily(DG, DP, DT)); assert(!L.dailyBlocks(DG)); // new user: nothing to review
L.grade(DP, W[0], true, DT); L.grade(DP, W[1], true, DT); DG.passed.u0 = DT;
assert(!L.ensureDaily(DG, DP, DT + 3600e3)); assert(!L.dailyBlocks(DG)); // words learned today don't block today
const DT2 = DT + 864e5; assert(L.ensureDaily(DG, DP, DT2)); assert(L.dailyBlocks(DG)); assert.deepStrictEqual(DG.daily.words, [L.key(W[0]), L.key(W[1])].sort());
assert(DG.passed.u0); // unlocks kept
const day2 = DG.daily.day;
assert(!L.recordDaily(DG, day2, 2, 1).perfect); assert(L.dailyBlocks(DG)); // mistake
const DS = L.newSession(DG.daily.words); L.answerSession(DS, false); while (DS.queue.length) L.answerSession(DS, true);
assert(!L.recordDaily(DG, day2, DS.total, DS.missed.length).perfect); assert(L.dailyBlocks(DG)); // miss then retry right ≠ perfect
assert(L.recordDaily(DG, day2, 2, 0).perfect); assert(!L.dailyBlocks(DG));
L.grade(DP, W[2], true, DT2); assert(!L.ensureDaily(DG, DP, DT2 + 1000)); assert(!L.dailyBlocks(DG)); // no re-block same day
assert(L.recordDaily(DG, '2026-01-01', 2, 0).stale); // old-day run doesn't count
// rollover clears paused daily session; backup keeps daily
DG.resume.daily = L.newSession(['x']); L.ensureDaily(DG, DP, DT2 + 864e5); assert(!DG.resume.daily); assert.strictEqual(DG.daily.words.length, 3);
const DB = L.importData(L.exportData(DP, DG)); assert.deepStrictEqual(DB.gate.daily, DG.daily); assert.deepStrictEqual(DB.gate.passed, DG.passed);
// existing user with no daily record: first load blocks on all started words
const EG = L.newGate(); EG.passed.u0 = 1; L.ensureDaily(EG, DP, DT); assert(L.dailyBlocks(EG)); assert.strictEqual(EG.daily.words.length, 3);
// small pool: options stay within learned words
const ds = { type: 'daily', words: [W[0], W[1]], pool: [W[0], W[1]] }; const dq = L.buildQuestion(ds, L.key(W[0]), 0, BY);
assert.strictEqual(dq.options.length, 2); assert(dq.options.every(o => o === W[0] || o === W[1]));
// Grammar
const GR = require('./grammar.js'); assert.strictEqual(GR.length, 19); assert.strictEqual(new Set(GR.map(x => x.id)).size, 19);
GR.forEach(x => { assert(x.title && x.rule && x.trap && x.before && x.after && x.before !== x.after, x.id); assert(x.qs.length >= 2);
  x.qs.forEach(q => { assert(Number.isInteger(q.a) && q.a >= 0 && q.a < q.o.length && q.why, x.id); assert.strictEqual(new Set(q.o).size, q.o.length); }); });
const GG = {}; assert.strictEqual(L.recordGrammar(GG, 'tense', 2, 1), 50); L.recordGrammar(GG, 'tense', 2, 2); L.recordGrammar(GG, 'tense', 2, 0);
assert.deepStrictEqual(GG.tense, { best: 100, tries: 3 });
const gb = L.importData(L.exportData(P, G, GG)); assert.deepStrictEqual(gb.grammar, GG); assert.deepStrictEqual(gb.gate.passed, G.passed);
assert.strictEqual(L.importData(JSON.stringify({ app: 'sat-vocab-practice', v: 2, progress: P, gate: G })).grammar, null); // older v2 backup keeps grammar
// Weak words in reviews
{ const WP = {}, r0 = path.find(x => x.id === 'r0'), BYK = Object.fromEntries(W.map(w => [L.key(w), w]));
  r0.words.forEach(w => L.grade(WP, w, true, 1)); L.grade(WP, r0.words[0], false, 1); // weak inside range
  const outside = W.slice(200, 240); outside.forEach(w => L.grade(WP, w, false, 1)); // 40 weak outside range (>30)
  assert.strictEqual(L.allWeak(WP, W).length, 41); assert.strictEqual(L.weakWords(WP, W).length, 41);
  const rw = L.withWeak(r0.words, WP, W); assert.strictEqual(rw.length, 60); assert.strictEqual(new Set(rw.map(L.key)).size, 60);
  assert(outside.every(w => rw.includes(w)));
  const rs = L.newSession(rw.map(L.key)); L.answerSession(rs, true); const saved = JSON.parse(JSON.stringify(rs));
  L.grade(WP, W[300], false, 2); // new weak word after start: snapshot unchanged
  const snap = L.resumeSnapshot(saved, r0.words, BYK); assert.strictEqual(snap.length, 60); assert(!snap.includes(W[300]));
  assert.strictEqual(L.resumeSnapshot(L.newSession(['abate']), r0.words, BYK), null); // doesn't cover range -> fresh
  const q = L.buildQuestion({ type: 'review', words: snap, pool: snap }, L.key(outside[0]), 0, BYK); assert(q.options.every(o => snap.includes(o)));
  // daily: today's weak words added; passed day not relocked
  const DG2 = L.newGate(), D1 = Date.UTC(2026, 10, 9, 20); const DPp = { abate: { stage: 0, due: 0, right: 1, wrong: 0, lapses: 0 } };
  L.ensureDaily(DG2, DPp, D1); L.grade(DPp, W[100], false, D1);
  const dw = L.withWeak(DG2.daily.words.map(k => BYK[k]), DPp, W); assert.deepStrictEqual(dw.map(L.key), ['abate', L.key(W[100])]);
  L.recordDaily(DG2, DG2.daily.day, 2, 0); L.grade(DPp, W[101], false, D1); L.ensureDaily(DG2, DPp, D1 + 1000); assert(!L.dailyBlocks(DG2));
}
// Wrong-answer explanations and ding
{ const BYK = Object.fromEntries(W.map(w => [L.key(w), w])), u = path.find(x => x.id === 'u1');
  const tgt = BYK.adapt, q1 = L.buildQuestion(u, 'adapt', 0, BYK), wrong1 = q1.options.find(o => o !== tgt);
  assert.strictEqual(q1.type, 'word2def');
  const e1 = L.explainWrong('word2def', tgt, wrong1, null, W);
  assert(e1.includes(wrong1.d) && e1.includes(`"${wrong1.w}"`) && e1.includes(tgt.d), e1);
  const q2 = L.buildQuestion(u, 'adapt', 1, BYK), wrong2 = q2.options.find(o => o !== tgt); assert.strictEqual(q2.type, 'def2word');
  const e2 = L.explainWrong('def2word', tgt, wrong2, null, W); assert(e2.includes(`"${wrong2.w}"`) && e2.includes(wrong2.d) && e2.includes(`belongs to "Adapt"`), e2);
  assert(L.explainWrong('type', tgt, null, ' Abate ', W).includes('You typed "Abate", which means: ' + BYK.abate.d));
  assert(L.explainWrong('type', tgt, null, 'adaptt', W).includes('spelling counts'));
  assert(L.explainWrong('type', tgt, null, '', W).startsWith('No answer'));
  const same = { w: 'Zz', d: tgt.d }; assert(L.explainWrong('word2def', tgt, same, null, W).includes('also fits'));
  // ding: only when enabled; graceful without audio
  let started = 0; const fake = () => ({ state: 'running', currentTime: 0, destination: {}, createGain: () => ({ connect() {}, gain: { setValueAtTime() {}, exponentialRampToValueAtTime() {} } }), createOscillator: () => ({ type: '', frequency: { setValueAtTime() {} }, connect() {}, start() { started++; }, stop() {} }) });
  assert.strictEqual(L.playDing(true, fake), true); assert.strictEqual(started, 2);
  assert.strictEqual(L.playDing(false, fake), false); assert.strictEqual(started, 2);
  assert.strictEqual(L.playDing(true, () => null), false); assert.strictEqual(L.playDing(true, () => { throw new Error('blocked'); }), false);
}
// Example sentences: every word has a full original sentence that uses the word
{ const seenE = new Set();
  for (const w of W) {
    assert(w.e && /^[A-Z"“]/.test(w.e) && /[.!?]$/.test(w.e) && w.e.split(' ').length >= 6, 'bad example: ' + w.w);
    assert(new RegExp('\\b' + w.w.toLowerCase()).test(w.e.toLowerCase()), 'word not used: ' + w.w);
    assert(!/(the word|\bdefinition\b)/i.test(w.e), 'metalinguistic: ' + w.w); assert(!seenE.has(w.e)); seenE.add(w.e);
    const m = L.markExample(w.e, w); assert(/<mark>[^<]+<\/mark>/.test(m), 'no highlight: ' + w.w);
    assert(m.replace(/<\/?mark>/g, '').indexOf('<') === -1);
  }
  assert.strictEqual(L.markExample('A <b>& abate', { w: 'Abate' }), 'A &lt;b&gt;&amp; <mark>abate</mark>');
}
console.log('all tests passed');
