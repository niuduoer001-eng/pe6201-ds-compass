# Data notes

## What is in the repository

| File | Contents | Source |
| --- | --- | --- |
| `data/programmes.json` | 15 programme records, with descriptions and selected entry/English fields | My paraphrases of the official pages linked in each record |
| `data/train_intents.json` | Examples used by the local Naive Bayes classifier | Synthetic text written for the six direction labels |
| `data/metrics.json` | Short summary of the Gemini run | Calculated from the saved predictions in `evals/` |
| `evals/intent_cases.json` | Frozen inputs and expected labels for 37 cases | Synthetic cases created with GPT-4.1 mini assistance |
| `evals/model_outputs.json` | Returned label and correctness for every case | Recorded OpenRouter response output |
| `evals/frozen_manifest.json` | SHA-256 hashes for the inputs and outputs used in the reported run | Calculated from the checked-in files |

There are no personal applicant records or historical admissions decisions in these files. The proposal mentioned case data, but I did not use the supplied applicant examples because their labels and permission could not be established well enough to treat them as research data.

## Programme fields and sources

Each row in `programmes.json` identifies the programme, school, region and direction, then gives a short summary, an academic entry note, an official programme URL, a language-rule URL, and the date I checked it. IELTS overall and component thresholds are set only where I encoded a rule from the source. `null` means I have not encoded a threshold; the application should show `review` rather than fill it in by assumption.

The summaries are paraphrases. They are not a substitute for the linked pages. I checked the sources in late September 2026, but I have not built an automatic update feed. The 90-day warning can prompt a user to recheck an old record; it cannot catch every change or transcription error.

## Limits of the sample

Fifteen programmes are enough to demonstrate the retrieval flow, but they are not a representative survey of postgraduate options in either country. Some directions have only one or two cards. A result is therefore a starting point for browsing, not a complete comparison set. The profile's school and GPA fields are not joined to the programme data and do not change the output.

Before expanding the catalogue, I would have another person check each programme URL and English rule. That work has not yet been done.
