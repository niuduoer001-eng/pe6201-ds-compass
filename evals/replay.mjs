// Recalculate the recorded benchmark summary from frozen inputs and outputs.
import { readFile } from 'node:fs/promises';

const readJson = async (path) => {
  const text = await readFile(new URL(path, import.meta.url), 'utf8');
  return JSON.parse(text.replace(/^\uFEFF/, ''));
};
const [cases, outputs, recorded] = await Promise.all([
  readJson('./intent_cases.json'),
  readJson('./model_outputs.json'),
  readJson('./summary.json'),
]);

const correct = outputs.filter((row) => row.correct).length;
const predictedAbstentions = outputs.filter((row) => row.predicted === 'abstain').length;
const oodCases = cases.filter((row) => row.label === 'abstain');
const oodAbstained = outputs.filter((row) => row.expected === 'abstain' && row.predicted === 'abstain').length;
const majorityCount = Math.max(...Object.values(recorded.label_counts));

console.log(JSON.stringify({
  cases: cases.length,
  correct,
  accuracy_pct: Number((100 * correct / cases.length).toFixed(1)),
  majority_baseline_pct: Number((100 * majorityCount / cases.length).toFixed(1)),
  predicted_abstentions: predictedAbstentions,
  abstention_rate_pct: Number((100 * predictedAbstentions / cases.length).toFixed(1)),
  ood_cases: oodCases.length,
  ood_abstained: oodAbstained,
  ood_abstention_recall_pct: Number((100 * oodAbstained / oodCases.length).toFixed(1)),
  recorded_summary_matches: correct === recorded.correct
    && cases.length === recorded.cases
    && predictedAbstentions === recorded.predicted_abstentions
    && oodAbstained === recorded.ood_abstained,
}, null, 2));
