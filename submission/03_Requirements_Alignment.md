# PE6201 final-submission alignment — working status

This page records the final scope adopted from the approved proposal: an evidence-led master's programme discovery prototype for international applicants, using official admissions sources and a rented language model. The scope is **Singapore and the United Kingdom**, not an admission-prediction system.

| Official requirement | Current implementation evidence | Submission status |
|---|---|---|
| One scoped problem, named primary user, existing-tool gap | Final report: international applicant comparing programmes; DS Compass turns a stated direction into an official-source shortlist and exposes English-evidence uncertainty. | Complete |
| Working end-to-end AI system | Live DS Compass: profile → server-side LLM intent label → local official programme retrieval → IELTS evidence rule → linked result cards. | Complete |
| Non-AI baseline | Laplace-smoothed Naive Bayes English baseline runs if the model service is unavailable; its use is shown in the result. | Complete |
| Data, provenance and licensing | 15 hand-curated paraphrases of university pages, each with source URL and 30 Sep 2026 snapshot date. No personal historical cases are published or used. | Complete |
| LLM and technical/cost trade-off | OpenRouter-hosted Gemini 2.5 Flash Lite classifies Other or unsure short keywords into one fixed label. GPT-4.1 mini generated the held-out synthetic test set before Gemini was run. Key stays server-side. | Complete |
| Metric, target and baseline | Held-out set: 37 valid synthetic cases; Gemini accuracy 86.5%; majority-class baseline 18.9%; abstention 8.1%; 0 abstentions that would otherwise be errors. This is intent classification only. | Complete, needs report table |
| Evaluation safeguards | Labels were generated before evaluation by a different model; no test cases were added after the generator returned only 37 valid entries. Prompt-injection and unclear requests are designed to abstain. | Complete, needs limitations section |
| Failure, risk and mitigation | Source freshness prompt after 90 days; fixed output schema; same-domain retrieval; server-only key; no admission likelihood; manual-review states. | Complete, needs demo narration |
| ≤1200-word business and technical trade-off analysis | Final English report is 928 words and matches the deployed Singapore+UK prototype. | Complete |
| Working code in GitHub | Source code and supporting materials are published at https://github.com/niuduoer001-eng/pe6201-ds-compass. The public live application is linked in its README. | Complete |
| Recorded presentation/demo | A spoken recording remains required. The script has been updated for the current interface and includes the required limitations. | Outstanding — student must record narration |

The original proposal remains substantively aligned: its stated architecture is a foundation model plus official-source retrieval, its inputs include test results, and it explicitly rejects guarantees. The changes from the initial proof-of-concept are (1) a justified Singapore+UK directory expansion, and (2) a rented LLM now used for the narrowly defined intent-classification stage that the proposal anticipated.
