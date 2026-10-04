// Regression checks for input validation and result boundaries.
import test from 'node:test';
import assert from 'node:assert/strict';
import { validate, englishCheck, recommend, nbPredict } from './engine.mjs';
import catalogue from './data/programmes.json' with { type: 'json' };
import trainingRows from './data/train_intents.json' with { type: 'json' };

test('rejects an empty study goal', () => {
  assert.throws(() => validate({ goals: 'x', regions: ['SG'] }));
});

test('accepts a usable Chinese-language profile', () => {
  const profile = {
    goals: '我希望学习统计建模',
    regions: ['UK'],
    ielts: 7,
    bands: [7, 7, 6.5, 7],
    test_date: '2026-09-01',
    course_start: '2027-09-01',
  };

  assert.equal(validate(profile).regions[0], 'UK');
});

test('English check does not require applicant dates', () => {
  const profile = { ielts: 7, bands: [7, 7, 7, 7] };
  const programme = catalogue.find((row) => row.id === 'edinburgh-ai');

  assert.equal(englishCheck(profile, programme).status, 'supported');
});

test('English status is not presented as full eligibility', () => {
  const profile = {
    regions: ['UK'],
    ielts: 7,
    bands: [7, 7, 7, 7],
    goals: 'artificial intelligence',
  };
  const result = recommend(profile, 'ai', catalogue);

  assert.match(result.message, /academic eligibility/);
});

test('local baseline abstains on unknown Chinese text', () => {
  assert.equal(nbPredict('急诊手术药物治疗', trainingRows).label, 'abstain');
});
