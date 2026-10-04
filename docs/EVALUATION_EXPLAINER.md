# Evaluation notes

## What was measured

I measured one thing: whether Gemini classified a short study-interest description into the expected direction or `abstain`. I did not measure the quality of the programme matches, English rules, admission likelihood, or time saved by applicants.

The test inputs and expected labels are in `evals/intent_cases.json`. The model's output for each case is in `evals/model_outputs.json`. The set contains 37 synthetic prompts. GPT-4.1 mini helped create the wording and reference labels before the Gemini run. The cases were held apart from the local training file, but they were not labelled by independent human reviewers.

## Results

I did not record a minimum accuracy or OOD-recall threshold before running the model. The majority baseline is a reference point, not a pass mark.

| Check | Result |
| --- | ---: |
| Gemini exact labels | 32/37 (86.5%) |
| Always-predict-majority baseline (`abstain`) | 7/37 (18.9%) |
| Gemini returned `abstain` | 3/37 (8.1%) |
| Out-of-scope cases correctly withheld | 3/7 (42.9%) |
| Recorded model-call cost for 37 cases | USD 0.000542 |

The baseline is intentionally simple: `abstain` is the most common expected label, so the baseline predicts it for every prompt. It is a useful floor, not a strong alternative classifier.

## Where the model failed

The model accepted four of seven out-of-scope prompts as in-scope. It also confused one in-scope business case with data:

| Case | Prompt in brief | Expected | Gemini returned |
| --- | --- | --- | --- |
| T38 | AI tools to improve medication adherence | `abstain` | `ai` |
| T35 | Machine learning for legal document review | `abstain` | `ai` |
| T41 | Prompt engineering and scepticism of LLMs | `abstain` | `ai` |
| T34 | Technology used in clinical medicine | `abstain` | `business` |
| T11 | Data strategies for a company's sales pipeline | `business` | `data` |

The three model abstentions were all expected abstentions, but this does not offset the four false acceptances. The overall accuracy looks high partly because most of the in-scope examples were classified correctly. For using this as a discovery tool, the out-of-scope errors matter more than that headline suggests.

## What I can conclude

The result shows that the model learned the broad labels represented in this small synthetic set. It does not establish robust boundary detection. Wording was generated with model assistance, the set is small, and no separate human-labelled test was available. The evaluation was run once; `evals/replay.mjs` recalculates the summary from saved outputs but does not call Gemini again. A fresh model call could differ.

The next evaluation should use consented queries written by applicants, human reference labels, and a test set kept untouched while prompts and thresholds are tuned. I would report per-label results and out-of-scope recall separately from overall accuracy.
