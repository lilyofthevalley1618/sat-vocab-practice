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
  assert.strictEqual(r.a, 2 * n); assert.strictEqual(r.b, 2 * n + 1);
  const pi = path.indexOf(r); assert(path[pi - 1].i === r.b && path[pi - 2].i === r.a);
  assert.strictEqual(r.words.length, 20); assert.strictEqual(new Set(r.words.map(L.key)).size, 20);
  assert.deepStrictEqual(r.words, U[r.a].concat(U[r.b]));
  const rk = new Set(r.words.map(L.key));
  for (const w of r.words) { const ch = L.choices(w, r.words); assert.strictEqual(ch.length, 4); assert(ch.every(x => rk.has(L.key(x)))); assert.strictEqual(new Set(ch.map(L.key)).size, 4); }
});
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
console.log('all tests passed');
