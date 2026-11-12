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
assert.strictEqual(revs.length, 19); assert.strictEqual(bigs.length, 6);
const pairs = path.filter(x => x.type === 'pair');
assert.strictEqual(pairs.length, 20); assert.strictEqual(path.length, 39 + 19 + 20 + 6 + 1);
assert.strictEqual(path[path.length - 1].id, 'final'); assert.strictEqual(path[path.length - 2].id, 'pr38');
assert.strictEqual(path[path.length - 3].id, 'u38');
assert.strictEqual(path[path.length - 1].words.length, 384); assert.strictEqual(new Set(path[path.length - 1].words.map(L.key)).size, 384);
revs.forEach((r, n) => {
  assert.strictEqual(r.a, 0); assert.strictEqual(r.b, 2 * n + 1); assert.strictEqual(r.id, 'r' + (2 * n));
  const pi = path.indexOf(r); assert.strictEqual(path[pi - 1].type, 'pair'); assert.strictEqual(path[pi - 1].id, 'pr' + (r.b - 1));
  assert(path[pi - 2].i === r.b && path[pi - 3].i === r.b - 1);
  assert.strictEqual(r.words.length, Math.min(20 * (n + 1), 380)); assert.strictEqual(new Set(r.words.map(L.key)).size, r.words.length);
  assert.deepStrictEqual(r.words, W.slice(0, r.words.length));
  const rk = new Set(r.words.map(L.key));
  for (const w of r.words.slice(0, 40)) { const ch = L.choices(w, r.words); assert.strictEqual(ch.length, 4); assert(ch.every(x => rk.has(L.key(x)))); assert.strictEqual(new Set(ch.map(L.key)).size, 4); }
});
assert.deepStrictEqual(revs.map(r => r.words.length), Array.from({ length: 19 }, (_, n) => 20 * (n + 1)));
pairs.forEach((pr, n) => {
  const last = n === 19;
  assert.strictEqual(pr.id, 'pr' + (last ? 38 : 2 * n));
  assert.strictEqual(pr.from, last ? 38 : 2 * n); assert.strictEqual(pr.to, last ? 38 : 2 * n + 1);
  const expect = last ? U[38] : U[2 * n].concat(U[2 * n + 1]);
  assert.deepStrictEqual(pr.words, expect); assert.deepStrictEqual(pr.pool, expect);
  assert.strictEqual(pr.words.length, last ? 4 : 20);
  const pi = path.indexOf(pr);
  if (last) { assert.strictEqual(path[pi - 1].id, 'u38'); assert.strictEqual(path[pi + 1].id, 'final'); }
  else { assert.strictEqual(path[pi - 1].id, 'u' + (2 * n + 1)); assert.strictEqual(path[pi + 1].id, 'r' + (2 * n)); }
});

// stale/mismatched saved review sessions are not resumed; matching ones are
const r2 = path.find(x => x.id === 'r2'); assert.strictEqual(r2.words.length, 40);
assert(!L.validResume(L.newSession(U[2].concat(U[3]).map(L.key)), r2.words));
const okS = L.newSession(r2.words.map(L.key)); L.answerSession(okS, true); assert(L.validResume(JSON.parse(JSON.stringify(okS)), r2.words));
bigs.forEach((b, n) => {
  const pi = path.indexOf(b); assert.strictEqual(path[pi - 1].id, 'r' + (6 * n + 4)); assert.strictEqual(path[pi - 2].id, 'pr' + (6 * n + 4)); assert.strictEqual(path[pi - 3].id, 'u' + (6 * n + 5));
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
const iPr0 = path.findIndex(x => x.id === 'pr0'), iR0 = path.findIndex(x => x.id === 'r0'), iU2 = path.findIndex(x => x.id === 'u2');
assert.strictEqual(iPr0, 2); assert.strictEqual(iR0, 3); assert.strictEqual(iU2, 4);
L.recordAttempt(G, 'u1', 10, 0); assert(L.isUnlocked(path, iPr0, G)); assert(!L.isUnlocked(path, iR0, G)); // pair review gates cumulative
L.recordAttempt(G, 'pr0', 20, 0); assert(L.isUnlocked(path, iR0, G)); assert(!L.isUnlocked(path, iU2, G)); // cumulative still gates unit 3
L.recordAttempt(G, 'r0', 20, 0); assert(L.isUnlocked(path, iU2, G));
const G2 = JSON.parse(JSON.stringify(G)); assert(L.isUnlocked(path, iU2, G2) && !L.isUnlocked(path, iU2 + 1, G2)); // persists via JSON
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
const CLOZE_BANK = require('./cloze.js');
for (const st of path) {
  const poolK = new Set((st.pool || st.words).map(L.key));
  const S2 = L.newSession(st.words.map(L.key));
  for (let qi = 0; S2.queue.length && qi < 60; qi++) {
    const k = S2.queue[0].k;
    const q = st.type === 'pair' ? L.buildClozeQuestion(BY[k], st.pool || st.words, CLOZE_BANK[k], null) : L.buildQuestion(st, k, S2.qi, BY);
    if (st.type === 'pair') {
      assert.strictEqual(q.type, 'cloze', st.id); assert(q.prompt.includes('_____'), st.id);
      assert(q.options.some(o => o.w === q.w && o.fill === q.fill), st.id);
      assert(q.options.every(o => poolK.has(L.key(o.w))), st.id);
      assert.strictEqual(q.options.filter(o => o.w === q.w).length, 1, st.id);
    } else {
      assert(q.options.every(o => poolK.has(L.key(o))), st.id); assert.strictEqual(q.options.filter(o => o === q.w).length, 1);
    }
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
assert(L.recordDaily(DG, day2, 2, 0, 1).perfect); assert(L.dailyBlocks(DG)); // Part 1 alone does not finish the day
assert(L.recordDaily(DG, day2, 1, 0, 2).perfect); assert(!L.dailyBlocks(DG));
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
const GR = require('./grammar.js');
assert.strictEqual(GR.length, 28); assert.strictEqual(new Set(GR.map(x => x.id)).size, 28);
const P1IDS = ['tense', 'sva', 'pa', 'plurals', 'apos', 'modpunct', 'semicolon', 'colon', 'modifier'];
const P2IDS = ['combine', 'transitions', 'trans-contra', 'trans-similar', 'dash', 'suchas', 'lists', 'clauses', 'fragment', 'runon', 'depsubj', 'parallel', 'case', 'who-whom', 'pref', 'relpro', 'indef', 'confused', 'compare'];
assert.deepStrictEqual(GR.filter(t => t.part === 1).map(t => t.id), P1IDS);
assert.deepStrictEqual(GR.filter(t => t.part === 2).map(t => t.id), P2IDS);
assert.deepStrictEqual(GR.map(t => t.id), P1IDS.concat(P2IDS));
assert.strictEqual(GR[0].id, 'tense');
assert.strictEqual(GR[0].rule, 'Keep verbs consistent in tense or form throughout a sentence. Surrounding sentences can provide context clues for the proper tense. Shift tense only when the sentence signals a real change in time.');
assert(GR[0].note && /had left before he arrived/i.test(GR[0].note) && /has lived here for 3 years/i.test(GR[0].note));

GR.forEach(x => {
  assert(x.title && x.rule && x.trap && x.before && x.after && x.before !== x.after && x.source, x.id);
  assert(x.part === 1 || x.part === 2, x.id);
  assert(x.qs.length >= 10 && x.qs.length <= 12, x.id);
  assert(x.bank && x.bank.length === 6, x.id);
  const stems = new Set();
  x.qs.concat(x.bank).forEach(q => {
    assert(Number.isInteger(q.a) && q.a >= 0 && q.a < q.o.length && q.why, x.id);
    assert.strictEqual(q.o.length, 4); assert.strictEqual(new Set(q.o).size, q.o.length);
    assert(!stems.has(q.q), x.id + ': ' + q.q); stems.add(q.q);
    assert(Array.isArray(q.wx) && q.wx.length === q.o.length, x.id + ' wx');
    q.o.forEach((_, i) => {
      if (i === q.a) return;
      assert(q.wx[i] && String(q.wx[i]).trim(), x.id + ' missing why-wrong for option ' + i + ': ' + q.q);
    });
    q.o.forEach((_, i) => {
      const e = L.explainGrammar(q, i);
      assert.strictEqual(e.ok, i === q.a);
      assert(e.whyCorrect);
      if (!e.ok) assert(e.whyWrong && e.picked === q.o[i] && e.correct === q.o[q.a], x.id + ' ' + q.q);
    });
  });
});
const GP = L.makeGrammarPath(GR);
assert.strictEqual(GP.filter(x => x.type === 'rule').length, 28);
assert.strictEqual(GP[9].type, 'exam'); assert.strictEqual(GP[9].n, 60); assert.strictEqual(GP[9].id, 'g-exam1');
assert.deepStrictEqual(GP.filter(x => x.type === 'review').map(x => x.n), [30, 30, 30, 24]);
assert.strictEqual(GP[GP.length - 1].type, 'final'); assert.strictEqual(GP[GP.length - 1].n, 70);
assert.strictEqual(GP.length, 34);
const GG = {}; assert.strictEqual(L.recordGrammar(GG, 'tense', 2, 1), 50); L.recordGrammar(GG, 'tense', 2, 2); L.recordGrammar(GG, 'tense', 2, 0);
assert.deepStrictEqual(GG.tense, { best: 100, tries: 3 });
const gb = L.importData(L.exportData(P, G, GG)); assert.deepStrictEqual(gb.grammar, GG); assert.deepStrictEqual(gb.gate.passed, G.passed);
assert.strictEqual(L.importData(JSON.stringify({ app: 'sat-vocab-practice', v: 2, progress: P, gate: G })).grammar, null); // older v2 backup keeps grammar
const mg = L.migrateGrammar({ tense: { best: 90, tries: 1 }, sva: { best: 80, tries: 2 }, nonessential: { best: 100, tries: 4 }, essential: { best: 70, tries: 1 }, 'dash-such': { best: 50, tries: 1 }, apos: { best: 60, tries: 2 } });
assert.deepStrictEqual(mg.tense, { best: 90, tries: 1 }); assert.deepStrictEqual(mg.sva, { best: 80, tries: 2 }); assert.deepStrictEqual(mg.apos, { best: 60, tries: 2 });
assert.strictEqual(mg.nonessential, undefined); assert.strictEqual(mg.essential, undefined); assert.strictEqual(mg['dash-such'], undefined);
const g0 = { passed: {} }; assert(L.isUnlocked(GP, 0, g0)); for (let i = 1; i < GP.length; i++) assert(!L.isUnlocked(GP, i, g0));
assert(L.recordGrammarAttempt(g0, 'tense', 12, 1).pct === 92); assert(!L.isUnlocked(GP, 1, g0));
assert(L.recordGrammarAttempt(g0, 'tense', 12, 0).perfect); assert(L.isUnlocked(GP, 1, g0));
assert.strictEqual(g0.gbest.tense, 100);
const GT = Date.UTC(2026, 10, 10, 20); // Nov 10 12pm PST
const g1 = { passed: { tense: 1, sva: 1 } };
assert(L.ensureDailyGrammar(g1, GP, GT)); assert(L.grammarDailyBlocks(g1));
assert.deepStrictEqual(g1.daily.keys.slice().sort(), ['sva', 'tense']);
assert(L.grammarStepOpen(GP, 0, g1)); // already-passed rule stays open
assert(!L.grammarStepOpen(GP, 2, g1)); // new rule blocked until daily is done
g1.daily.passed = true; assert(L.grammarStepOpen(GP, 2, g1)); assert(!L.ensureDailyGrammar(g1, GP, GT + 1000));
const g2 = {}; L.ensureDailyGrammar(g2, GP, GT); assert(!L.grammarDailyBlocks(g2)); assert(g2.daily.passed);
const g3 = L.newGate(); const p3 = {}; L.ensureDaily(g3, p3, GT); L.grade(p3, W[0], true, GT);
const dayBefore = g3.daily && g3.daily.day; L.ensureDailyGrammar({ passed: { tense: 1 } }, GP, GT);
assert.deepStrictEqual(g3.daily && g3.daily.day, dayBefore); assert(!L.dailyBlocks(g3)); // vocab daily unaffected
const gex = L.buildGrammarExam(GR.slice(0, 9), 60, () => 0.3); assert.strictEqual(gex.length, 60);
assert(gex.every(q => q.o.length === 4 && Number.isInteger(q.a) && q.why && q.id && q.title));
const gdq = L.pickDailyGrammar(Object.fromEntries(GR.map(t => [t.id, t])), ['tense', 'sva'], 10, () => 0.4);
assert.strictEqual(gdq.length, 10);
const gqs = GR[0].qs.map((q, i) => Object.assign({}, q, { k: 'tense:' + i }));
const gs = L.newSession(gqs.map(q => q.k)); gs.questions = Object.fromEntries(gqs.map(q => [q.k, q]));
assert(L.validGramResume(gs, 12)); assert(!L.validGramResume(gs, 11));
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
  L.recordDaily(DG2, DG2.daily.day, 2, 0, 1); L.recordDaily(DG2, DG2.daily.day, 1, 0, 2); L.grade(DPp, W[101], false, D1); L.ensureDaily(DG2, DPp, D1 + 1000); assert(!L.dailyBlocks(DG2));
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
  assert.strictEqual(L.playDing(true, fake), true); assert.strictEqual(started, 3);
  assert.strictEqual(L.playDing(false, fake), false); assert.strictEqual(started, 3);
  assert.strictEqual(L.playDing(true, () => null), false); assert.strictEqual(L.playDing(true, () => { throw new Error('blocked'); }), false);
}
// Example sentences: exactly the PrepScholar examples
{ const SRC = require('./source-prepscholar.json'); let ok = 0, marked = 0;
  for (const w of W) { assert.strictEqual(w.e, SRC[w.w.toLowerCase()].e, w.w); ok++;
    const m = L.markExample(w.e, w); if (/<mark>/.test(m)) marked++; assert(m.replace(/<\/?mark>|<br>/g, '').indexOf('<') === -1); }
  assert.strictEqual(ok, 384); assert.strictEqual(marked, 384);
  assert.strictEqual(SRC.austere.e.split('\n').length, 3); assert.strictEqual(SRC.austere.d.split('\n').length, 3);
  assert(SRC.interpret.e.includes('for met?')); assert(SRC.permanent.e.includes(' ot get'));
  assert.strictEqual(L.markExample('A <b>& abated', { w: 'Abate' }), 'A &lt;b&gt;&amp; <mark>abated</mark>');
}
// First 40 words (Units 1–4): runtime quiz audit over many seeds
{ const BYK = Object.fromEntries(W.map(w => [L.key(w), w])), first40 = new Set(W.slice(0, 40).map(L.key));
  const groups = [['Acceptable', 'Adequate', 'Appropriate'], ['Adapt', 'Adjust', 'Accommodate'], ['Aggressive', 'Antagonistic'], ['Abate', 'Ameliorate']];
  let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const stages = path.filter(x => ['u0', 'u1', 'u2', 'u3', 'r0', 'r2'].includes(x.id)); assert.strictEqual(stages.length, 6);
  let n = 0;
  for (let run = 0; run < 300; run++) for (const st of stages) {
    const S = L.newSession(st.words.map(L.key), rnd);
    while (S.queue.length) {
      const q = L.buildQuestion(st, S.queue[0].k, S.qi, BYK, rnd); n++;
      assert.strictEqual(q.options.length, 4); assert.strictEqual(q.options.filter(o => o === q.w).length, 1);
      assert.strictEqual(new Set(q.options.map(o => o.d.toLowerCase())).size, 4);
      assert(q.options.every(o => first40.has(L.key(o))));
      for (const g of groups) assert(!(g.includes(q.w.w) && q.options.some(o => o !== q.w && g.includes(o.w))), q.w.w + ' with confusable');
      L.answerSession(S, rnd() > 0.2);
    }
  }
  assert(n > 10000);
  assert.strictEqual(BYK.abysmal.d, 'extremely bad'); assert.strictEqual(BYK.antecedent.d, 'A preceding event or condition.');
}
// Definitions must match the PrepScholar table exactly (whitespace-normalized), all 384
{ const SRC = require('./source-prepscholar.json'); assert.strictEqual(Object.keys(SRC).length, 384);
  let exact = 0;
  for (const w of W) {
    const src = SRC[w.w.toLowerCase()]; assert(src, 'no source for ' + w.w);
    const rebuilt = w.senses.map(s => w.p + '. ' + s).join('\n'); assert.strictEqual(rebuilt, src.d, w.w);
    assert.strictEqual(w.d, w.senses.join('; ')); exact++;
  }
  assert.strictEqual(exact, 384);
  // every unit/review question: right answer once, options from that stage's pool, no overlapping meanings
  const BYK = Object.fromEntries(W.map(w => [L.key(w), w]));
  for (const st of path.filter(x => x.type !== 'final')) {
    const poolK = new Set((st.pool || st.words).map(L.key));
    for (const w of st.words) for (const qi of [0, 1]) {
      const q = L.buildQuestion(st, L.key(w), qi, BYK);
      assert.strictEqual(q.options.length, 4, st.id + ' ' + w.w); assert.strictEqual(q.options.filter(o => o === w).length, 1);
      assert(q.options.every(o => poolK.has(L.key(o)))); assert(q.options.every(o => o === w || !L.confusable(w, o)), w.w);
    }
  }
}
// Pair fill-in reviews: migration does not relock already-unlocked units
{ const old = L.newGate();
  ['u0', 'u1', 'r0', 'u2'].forEach(id => L.recordAttempt(old, id, 10, 0));
  const p2 = L.makePath(U);
  assert(!old.passed.pr0);
  const iU2 = p2.findIndex(x => x.id === 'u2'), iPr0 = p2.findIndex(x => x.id === 'pr0'), iR0 = p2.findIndex(x => x.id === 'r0');
  assert(L.isUnlocked(p2, iU2, old)); // unit 3 stays open even before migration
  assert(!L.isUnlocked(p2, iR0, old)); // cumulative would look locked until grant
  assert(L.migratePairUnlocks(p2, old));
  assert(old.passed.pr0); assert(L.isUnlocked(p2, iR0, old)); assert(L.isUnlocked(p2, iU2, old));
  assert(!L.migratePairUnlocks(p2, old)); // idempotent
  // already-past pair review is available to retake; later units stay unlocked
  assert(L.isUnlocked(p2, iPr0, old));
  // user who finished only the two units is not auto-passed; the new review is required
  const mid = L.newGate(); L.recordAttempt(mid, 'u0', 10, 0); L.recordAttempt(mid, 'u1', 10, 0);
  assert(!L.migratePairUnlocks(p2, mid)); assert(!mid.passed.pr0);
  assert(L.isUnlocked(p2, iPr0, mid)); assert(!L.isUnlocked(p2, iR0, mid));
  L.recordAttempt(mid, 'pr0', 20, 0); assert(L.isUnlocked(p2, iR0, mid));
  // user already at the final: every pair review is granted
  const done = L.newGate(); done.passed.final = 1;
  assert(L.migratePairUnlocks(p2, done));
  assert(p2.filter(x => x.type === 'pair').every(x => done.passed[x.id]));
  // import of an older backup still returns the raw passed map; the app migrates after
  const imported = L.importData(L.exportData({}, old));
  assert(imported.gate.passed.pr0);
}

// Optional Practice words: distractors come from the same unit; helpers stay available for old backups
{ const w = U[0][0];
  assert.deepStrictEqual(L.unitWords(w, U), U[0]);
  assert.deepStrictEqual(L.unitWords(U[38][0], U), U[38]);
  const opts = L.choices(w, L.unitWords(w, U), 4, () => 0.4);
  assert(opts.includes(w));
  assert(opts.every(o => U[0].includes(o)), 'practice distractors stay in unit');
  const opts39 = L.choices(U[38][0], L.unitWords(U[38][0], U), 4, () => 0.2);
  assert(opts39.every(o => U[38].includes(o)));
  assert.strictEqual(typeof L.withWeak, 'function'); assert.strictEqual(typeof L.weakWords, 'function'); // kept for backups
}


// Profile: survey, active time, finish date, backups (older backups stay valid)
{ const NOW = Date.UTC(2026, 10, 12, 20); // Nov 12, 2026 12:00 Pacific
  assert.strictEqual(L.laDay(NOW), '2026-11-12');
  assert.deepStrictEqual(L.WORDS_DAY_OPTS[0], 10); assert.deepStrictEqual(L.WORDS_DAY_OPTS[L.WORDS_DAY_OPTS.length - 1], 200);
  assert.strictEqual(L.normalizeSurvey(null), null);
  assert.deepStrictEqual(L.normalizeSurvey({ wordsPerDay: 25, minutesPerDay: 12, at: 9 }), { wordsPerDay: 30, minutesPerDay: 12, at: 9 });
  assert.strictEqual(L.normalizeSurvey({ wordsPerDay: 5, minutesPerDay: 1 }).wordsPerDay, 10);
  assert.strictEqual(L.normalizeSurvey({ wordsPerDay: 5, minutesPerDay: 1 }).minutesPerDay, 5);
  assert.strictEqual(L.normalizeSurvey({ wordsPerDay: 999, minutesPerDay: 500 }).wordsPerDay, 200);
  assert.strictEqual(L.normalizeSurvey({ wordsPerDay: 999, minutesPerDay: 500 }).minutesPerDay, 180);
  const pr = L.newProfile();
  L.addActiveTime(pr, 90 * 1000, NOW);
  assert.strictEqual(pr.time.totalMs, 90000);
  assert.strictEqual(pr.time.days['2026-11-12'], 90000);
  assert.strictEqual(L.todayMs(pr, NOW), 90000);
  L.addActiveTime(pr, 10 * 60 * 1000, NOW); // capped at 5 min per flush
  assert.strictEqual(pr.time.days['2026-11-12'], 90000 + 5 * 60 * 1000);
  assert.strictEqual(L.formatDuration(30 * 1000), 'less than 1 min');
  assert.strictEqual(L.formatDuration(5 * 60 * 1000), '5 min');
  assert.strictEqual(L.formatDuration(65 * 60 * 1000), '1 hr 5 min');
  assert.strictEqual(L.formatDuration(120 * 60 * 1000), '2 hr');
  assert.strictEqual(L.addCalendarDays('2026-11-12', 19), '2026-12-01');
  assert.strictEqual(L.formatDate('2026-12-01'), 'December 1, 2026');
  assert.deepStrictEqual(L.projectFinish(384, 20, 384, NOW), { done: true, date: '2026-11-12', daysLeft: 0 });
  assert.deepStrictEqual(L.projectFinish(364, 20, 384, NOW), { done: false, date: '2026-11-12', daysLeft: 1 });
  assert.deepStrictEqual(L.projectFinish(364, 10, 384, NOW), { done: false, date: '2026-11-13', daysLeft: 2 });
  assert.deepStrictEqual(L.projectFinish(0, 20, 384, NOW), { done: false, date: '2026-12-01', daysLeft: 20 });
  pr.survey = L.normalizeSurvey({ wordsPerDay: 20, minutesPerDay: 30, at: NOW });
  pr.photo = 'data:image/jpeg;base64,' + 'A'.repeat(40);
  const exp = JSON.parse(L.exportData({}, L.newGate(), {}, pr));
  assert(exp.profile && exp.profile.survey.wordsPerDay === 20 && exp.profile.photo.startsWith('data:image/jpeg'));
  const got = L.importData(JSON.stringify(exp));
  assert.strictEqual(got.profile.survey.wordsPerDay, 20);
  assert.strictEqual(got.profile.time.days['2026-11-12'], pr.time.days['2026-11-12']);
  assert.strictEqual(L.importData(L.exportData(P)).profile, null); // older exports have no profile
  const huge = Object.assign({}, pr, { photo: 'data:image/jpeg;base64,' + 'B'.repeat(L.PHOTO_BACKUP_MAX + 10) });
  const slim = JSON.parse(L.exportData({}, L.newGate(), {}, huge));
  assert.strictEqual(slim.profile.photo, null); // oversized photo omitted from backup
  assert.strictEqual(L.importData(JSON.stringify({ app: 'sat-vocab-practice', v: 2, progress: P, gate: L.newGate() })).profile, null);
}


// Click-to-advance after feedback: enabled controls are left alone; disabled answers and blank areas advance
{ const btn = { tagName: 'BUTTON', disabled: false }; assert.strictEqual(L.advanceClickOk(btn), false);
  assert.strictEqual(L.advanceClickOk({ tagName: 'BUTTON', disabled: true }), true);
  assert.strictEqual(L.advanceClickOk({ tagName: 'BUTTON', getAttribute: n => n === 'disabled' ? '' : null }), true);
  assert.strictEqual(L.advanceClickOk({ tagName: 'BUTTON', disabled: false, getAttribute: () => null }), false);
  assert.strictEqual(L.advanceClickOk({ tagName: 'A', href: '#' }), false);
  assert.strictEqual(L.advanceClickOk({ tagName: 'INPUT', disabled: false }), false);
  assert.strictEqual(L.advanceClickOk({ tagName: 'LABEL', disabled: false }), false);
  assert.strictEqual(L.advanceClickOk({ tagName: 'P' }), true);
  assert.strictEqual(L.advanceClickOk(null), true);
  assert.strictEqual(L.advanceClickOk({ tagName: 'DIV' }), true);
}

// No future review dates/countdowns shown anywhere in the UI
{ const APP = require('fs').readFileSync(__dirname + '/app.js', 'utf8');
  assert(!/days`|next review|Next review|fmt\(/.test(APP)); assert(/In your Daily Review/.test(APP)); }
// Daily Review Part 2 + cloze sentences
{ const C = require('./cloze.js'), SRC = require('./source-prepscholar.json');
  assert.strictEqual(Object.keys(C).length, 384);
  for (const w of W) {
    const items = C[L.key(w)]; assert(items && items.length >= 3, w.w);
    const texts = new Set();
    for (const it of items) {
      assert.strictEqual((it.s.match(/_____/g) || []).length, 1, w.w);
      assert(it.fill && it.s.length > 20, w.w);
      assert(!texts.has(it.s), 'dup ' + w.w); texts.add(it.s);
      assert(it.s.replace('_____', it.fill) !== SRC[L.key(w)].e, 'copied official ' + w.w);
      const filled = it.s.replace('_____', it.fill);
      assert(filled.toLowerCase().includes(it.fill.toLowerCase()));
    }
    // avoid last used
    const p1 = L.pickCloze(items, 0, () => 0); assert.notStrictEqual(p1.i, 0);
    const always = new Set(); for (let i = 0; i < 8; i++) always.add(L.pickCloze(items, 0, () => 0.99).i);
    assert(!always.has(0) || items.length === 1);
  }
  assert.strictEqual(L.halfCount(60), 30); assert.strictEqual(L.halfCount(61), 31); assert.strictEqual(L.halfCount(1), 1);
  const keys = W.slice(0, 60).map(L.key), half = L.pickHalf(keys, () => 0.3);
  assert.strictEqual(half.length, 30); assert.strictEqual(new Set(half).size, 30); assert(half.every(k => keys.includes(k)));
  // part 1 perfect does not pass; both needed; part 2 fail keeps part1
  const G = L.newGate(); L.ensureDaily(G, { abate: { stage: 0, due: 0, right: 1, wrong: 0, lapses: 0 } }, Date.UTC(2026, 10, 10, 20));
  assert(L.dailyBlocks(G));
  assert(L.recordDaily(G, G.daily.day, 1, 0, 1).perfect); assert(G.daily.part1); assert(L.dailyBlocks(G));
  assert(!L.recordDaily(G, G.daily.day, 5, 1, 2).perfect); assert(G.daily.part1); assert(L.dailyBlocks(G));
  assert(L.recordDaily(G, G.daily.day, 5, 0, 2).perfect); assert(!L.dailyBlocks(G));
  // cloze questions: options from pool, one correct, no confusable, form matches blank
  const pool = W.slice(0, 20);
  for (const w of pool) {
    const q = L.buildClozeQuestion(w, pool, C[L.key(w)], null, () => 0.4);
    assert.strictEqual(q.type, 'cloze'); assert(q.prompt.includes('_____'));
    assert(q.options.some(o => o.w === w && o.fill === q.fill));
    assert.strictEqual(new Set(q.options.map(o => o.fill.toLowerCase())).size, q.options.length);
    assert(q.options.every(o => pool.includes(o.w)));
    assert(q.options.every(o => o.w === w || !L.confusable(w, o.w)));
  }
  // resume/backup includes part2 session + last cloze
  G.clozeLast = { abate: 2 }; G.resume.daily2 = L.newSession(['abate', 'abrupt']); G.resume.daily2.cloze = { abate: 1 };
  const bk = L.importData(L.exportData({}, G));
  assert.deepStrictEqual(bk.gate.clozeLast, { abate: 2 });
  assert.deepStrictEqual(bk.gate.resume.daily2.keys, ['abate', 'abrupt']);
  assert.strictEqual(bk.gate.resume.daily2.cloze.abate, 1);
  assert.strictEqual(bk.gate.daily.part1, true);
  // source defs+examples unchanged
  let eq = 0; for (const w of W) { const s = SRC[L.key(w)]; if (w.e === s.e && w.senses.map(x => w.p + '. ' + x).join('\n') === s.d) eq++; }
  assert.strictEqual(eq, 384);
}

// Recent Words Recall: unlock at Unit 9, weighted recent pool, typed grading
{ const path = L.makePath(U), G = L.newGate(), BY = Object.fromEntries(W.map(w => [L.key(w), w]));
  const u9 = path.findIndex(it => it.type === 'unit' && it.i === 8);
  assert(u9 > 0); assert.strictEqual(path[u9].id, 'u8');
  assert(!L.recallUnlocked(path, G));
  // passing Unit 8 itself is not enough; Unit 9 opens after the Units 1–8 review
  G.passed.u7 = 1; assert(!L.recallUnlocked(path, G));
  const prev = path[u9 - 1].id; G.passed[prev] = 1;
  assert(L.recallUnlocked(path, G));
  // still unlocked after later units
  G.passed.u8 = 1; assert(L.recallUnlocked(path, G));

  const prog = {};
  U.slice(0, 10).flat().forEach((w, i) => { L.grade(prog, w, true, 1 + i); });
  // Units 8–10 are recent (i 7,8,9); mark two recent and one older as weak
  L.grade(prog, U[8][0], false, 100); // unit 9 weak
  L.grade(prog, U[9][0], false, 100); // unit 10 weak
  L.grade(prog, U[0][0], false, 100); // unit 1 older weak
  const recent = L.recentLearned(U, prog, 3);
  assert.strictEqual(recent.length, 30);
  assert(recent.every(w => U.slice(7, 10).flat().includes(w)));
  const pick = L.pickRecall(U, prog, W, 10, () => 0.2);
  assert.strictEqual(pick.length, 10);
  assert.strictEqual(new Set(pick.map(L.key)).size, 10);
  assert(pick.every(w => !L.isNew(prog, w)));
  const rset = new Set(recent.map(L.key));
  const nRecent = pick.filter(w => rset.has(L.key(w))).length;
  const nOlder = 10 - nRecent;
  assert.strictEqual(nRecent, 7); assert.strictEqual(nOlder, 3);
  assert(pick.includes(U[8][0]) && pick.includes(U[9][0]), 'recent weak prioritized');
  assert(pick.includes(U[0][0]), 'older weak prioritized');
  // not yet learned words are never picked
  assert(!pick.includes(U[20][0]));

  const abate = BY.abate, withdraw = BY.withdraw, abysmal = BY.abysmal, abrupt = BY.abrupt, austere = BY.austere;
  assert(L.checkTyped(' ABATE ', abate) && L.checkTyped('abated', abate) && L.checkTyped('abating', abate) && L.checkTyped('abates', abate));
  assert(!L.checkTyped('abait', abate) && !L.checkTyped('abatement', abate) && !L.checkTyped('', abate));
  assert(L.checkTyped('withdrew', withdraw) && L.checkTyped('withdrawing', withdraw) && L.checkTyped('Withdraw', withdraw));
  assert(!L.checkTyped('withdrawnness', withdraw));

  assert.strictEqual(L.checkTypedDef(abysmal.d, abysmal).grade, 'right');
  assert.strictEqual(L.checkTypedDef('  EXTREMELY BAD  ', abysmal).grade, 'right');
  assert.strictEqual(L.checkTypedDef('very bad', abysmal).grade, 'right'); // very ~ extremely
  assert.strictEqual(L.checkTypedDef('bad', abysmal).grade, 'close');
  assert.strictEqual(L.checkTypedDef('pizza', abysmal).grade, 'wrong');
  assert.strictEqual(L.checkTypedDef('', abysmal).grade, 'wrong');
  assert.strictEqual(L.checkTypedDef('sudden and unexpected', abrupt).grade, 'right');
  assert.strictEqual(L.checkTypedDef('to become less active, less intense, or less in amount', abate).grade, 'right');
  assert.strictEqual(L.checkTypedDef('become less active and less intense', abate).grade, 'right');
  const closeAbate = L.checkTypedDef('become less', abate);
  assert.strictEqual(closeAbate.grade, 'close');
  assert.strictEqual(L.checkTypedDef('extremely plain', austere).grade, 'right'); // one official sense
  assert.strictEqual(L.checkTypedDef('totally unrelated sentence about cooking', abate).grade, 'wrong');
  assert(L.explainWrong('typeDef', abysmal, null, 'pizza', W).includes(abysmal.d));

  // mixed question types, resume/backup, does not affect daily gate
  const q0 = L.buildRecallQuestion(abate, 0, { recallOff: 0 });
  const q1 = L.buildRecallQuestion(abate, 1, { recallOff: 0 });
  assert.strictEqual(q0.type, 'type'); assert.strictEqual(q1.type, 'typeDef');
  const RG = L.newGate(); RG.passed[prev] = 1;
  L.ensureDaily(RG, prog, Date.UTC(2026, 10, 11, 20));
  assert(L.dailyBlocks(RG));
  RG.resume.recall = L.newSession(pick.map(L.key)); RG.resume.recall.recallOff = 1;
  const recBk = L.importData(L.exportData(prog, RG));
  assert.deepStrictEqual(recBk.gate.resume.recall.keys, pick.map(L.key));
  assert.strictEqual(recBk.gate.resume.recall.recallOff, 1);
  assert(L.dailyBlocks(recBk.gate)); // recall session does not pass the day
  // source defs still exact
  const SRC = require('./source-prepscholar.json');
  let eq2 = 0; for (const w of W) { const s = SRC[L.key(w)]; if (w.e === s.e && w.senses.map(x => w.p + '. ' + x).join('\n') === s.d) eq2++; }
  assert.strictEqual(eq2, 384);
}
console.log('all tests passed');
