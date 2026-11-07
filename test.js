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
assert.deepStrictEqual(L.importData(L.exportData(P)), P);
assert.throws(() => L.importData('{"x":1}'));
const qt = L.quizTypes(10, true); assert(qt.includes('word2def') && qt.includes('def2word') && !qt.includes('type'));
assert(L.quizTypes(2, true).length === 2 && new Set(L.quizTypes(2, true)).size === 2);
console.log('all tests passed');
