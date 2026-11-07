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
function weakWords(prog, words, n = 20) {
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
// Distractors: prefer same part of speech so options look plausible.
function choices(word, all, n = 4, rnd = Math.random) {
  const others = all.filter(w => key(w) !== key(word));
  const same = shuffle(others.filter(w => w.p === word.p), rnd);
  const rest = shuffle(others.filter(w => w.p !== word.p), rnd);
  return shuffle([word, ...same.concat(rest).slice(0, n - 1)], rnd);
}

// Question types for a session. Intro (unit learn) quizzes alternate the two
// multiple-choice directions so both appear; other sessions also mix in typed recall.
function quizTypes(n, intro, rnd = Math.random) {
  const off = Math.floor(rnd() * 2);
  return Array.from({ length: n }, (_, i) => intro ? ['word2def', 'def2word'][(i + off) % 2] : ['def2word', 'word2def', 'type'][Math.floor(rnd() * 3)]);
}
function exportData(prog) { return JSON.stringify({ app: 'sat-vocab-practice', v: 1, progress: prog }); }
function importData(text) {
  const o = JSON.parse(text);
  if (!o || o.app !== 'sat-vocab-practice' || typeof o.progress !== 'object') throw new Error('Not a valid backup file');
  for (const [k, p] of Object.entries(o.progress))
    if (typeof p.stage !== 'number' || typeof p.due !== 'number') throw new Error('Bad entry: ' + k);
  return o.progress;
}
const api = { DAY, INTERVALS, UNIT_SIZE, makeUnits, grade, isNew, dueWords, weakWords, checkTyped, choices, shuffle, exportData, importData, key, quizTypes };
if (typeof module !== 'undefined') module.exports = api; else window.Logic = api;
