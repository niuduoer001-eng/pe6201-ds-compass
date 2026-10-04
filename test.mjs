// Focused regression checks for validation, English-rule safety, and abstention boundaries.
import test from 'node:test';
import assert from 'node:assert/strict';
import {validate,englishCheck,recommend,nbPredict} from './engine.mjs';
import catalogue from './data/programmes.json' with {type:'json'};
import train from './data/train_intents.json' with {type:'json'};
test('rejects empty goal',()=>assert.throws(()=>validate({goals:'x',regions:['SG']})));
test('accepts a usable bilingual profile',()=>assert.equal(validate({goals:'我希望学习统计建模',regions:['UK'],ielts:7,bands:[7,7,6.5,7],test_date:'2026-09-01',course_start:'2027-09-01'}).regions[0],'UK'));
test('English check does not require applicant dates',()=>assert.equal(englishCheck({ielts:7,bands:[7,7,7,7]},catalogue.find(x=>x.id==='edinburgh-ai')).status,'supported'));
test('English result is not full eligibility',()=>assert.match(recommend({regions:['UK'],ielts:7,bands:[7,7,7,7],test_date:'2026-01-01',goals:'artificial intelligence'},'ai',catalogue).message,/academic eligibility/));
test('local baseline abstains on unknown text',()=>assert.equal(nbPredict('急诊手术药物治疗',train).label,'abstain'));
