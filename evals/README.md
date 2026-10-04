# Saved model evaluation

This directory contains the evaluation inputs and the predictions from the one recorded Gemini run. `intent_cases.json` is the frozen set of synthetic prompts; `model_outputs.json` stores the expected and returned label for each prompt; `summary.json` contains the counts reported in the project report.

The labels were written with GPT-4.1 mini assistance, not assigned by independent human reviewers. The set is small and should be read as a development check. It does not tell us whether applicants receive suitable programmes or whether any applicant will be admitted.

The overall score is 32 correct labels out of 37 (86.5%). The baseline predicts the most common label, `abstain`, for every case: 7 of 37 (18.9%). The model returned `abstain` on three prompts. All three were expected abstentions, but it also assigned an in-scope label to four of the seven out-of-scope prompts. That is the main failure to keep in mind when reading the overall accuracy.

One example error is T11: a prompt about using data to improve a company's sales pipeline was labelled `data` instead of `business`. The full list is in `model_outputs.json`.

The 37 calls cost about USD 0.000542 in the recorded provider usage. That is the benchmark run cost only. It excludes test generation and hosting and should not be used as a guaranteed future price.

`replay.mjs` recalculates the summary from the saved files. It does not call the model again; hosted model outputs can change over time.

`profile_evidence_cases.json` and `replay_profile_evidence.mjs` are a separate, deterministic regression check for the academic-preparation evidence shown on each result card. It contains eight hand-specified profile/programme pairs and checks whether the displayed evidence or review label matches the documented rule. Its 100% result means that the implemented rule reproduced these eight expected labels; it is not an admissions-accuracy result.
