# Evaluation explainer

## Evaluation question

The measured task is **primary study-interest classification** into `ai`, `data`, `systems`, `conversion`, `business`, `education`, or `abstain`. It does not evaluate programme quality, admissions decisions, English eligibility, or the usefulness of recommendations in real applications.

## Frozen evaluation record

`data/metrics.json` records a 37-case synthetic held-out set. GPT-4.1 mini generated and labelled the cases before Gemini 2.5 Flash Lite was evaluated. A requested 42-case generation returned 37 valid cases; the returned set was frozen without adding cases after results were seen.

| Measure | Result | Meaning |
| --- | --- | --- |
| Exact-label accuracy | 86.5% | Agreement with synthetic reference labels |
| Majority-class baseline | 18.9% | Trivial baseline comparison |
| Abstention rate | 8.1% | Portion withheld rather than forced into a label |
| Abstentions that would otherwise be errors | 0 | On this synthetic set only |

## Reproducible core checks

Run `node build.mjs` and `node --test test.mjs`. The test suite checks input rejection, acceptance of a bilingual profile, date-independent English-rule behaviour, non-eligibility wording, and abstention on an unknown request. These are targeted regression tests; they are not a substitute for a user study or model benchmark.

## Critique and next evaluation

The evaluation has small sample size, synthetic language, model-authored labels and potential vocabulary overlap with the task definition. It may therefore overstate performance on genuine students' wording. A stronger next evaluation would collect consented, human-labelled discovery queries; split data into development and untouched test sets before tuning; report label-level confusion and abstention errors; and run a task-based user study such as time to reach a verified official programme page.
