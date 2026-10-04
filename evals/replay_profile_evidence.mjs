// Replays the small, hand-specified profile-to-requirement evidence check.
// It makes no model call and does not claim to evaluate admission outcomes.
import catalogue from '../data/programmes.json' with { type: 'json' };
import cases from './profile_evidence_cases.json' with { type: 'json' };
import { academicEvidence } from '../engine.mjs';

const results = cases.map((testCase) => {
  const programme = catalogue.find((row) => row.id === testCase.programme_id);
  const actual = academicEvidence({ degree: testCase.degree }, programme).status;
  return { ...testCase, actual, correct: actual === testCase.expected };
});

const correct = results.filter((row) => row.correct).length;
console.log(JSON.stringify({ cases: results.length, correct, accuracy_pct: Number((correct / results.length * 100).toFixed(1)), results }, null, 2));
