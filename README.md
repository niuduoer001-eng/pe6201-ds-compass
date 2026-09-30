# DS Compass

PE6201 Individual Project by Niu Duoer. DS Compass is an evidence-led prototype for discovering selected master's programmes in Singapore and the United Kingdom.

**Live application:** https://ds-compass-sg-uk-niu.duoer001.chatgpt.site

## Purpose and boundary

An applicant selects a destination, study direction, and optional English-test evidence. The system retrieves only same-direction cards from a small catalogue and links every card to an official programme page. It does **not** rank universities, convert GPA, decide academic eligibility, or predict admission.

The school search accepts any institution. Its suggested list and optional 985, 211, or Double First Class background field are recorded only for user context; they do not affect retrieval or generate an admission probability.

IELTS overall and four component scores can be recorded. TOEFL iBT can also be recorded, but the system does not convert TOEFL to IELTS. Where a programme has no encoded comparable rule, the result asks the user to check the official page.

## AI and retrieval

For a selected direction, retrieval is deterministic over `data/programmes.json`. For **Other or unsure**, a server-side OpenRouter Gemini 2.5 Flash Lite call classifies short keywords into one fixed study-interest label. The model cannot invent programme facts because result cards are local source-linked records. A Laplace-smoothed Naive Bayes baseline is retained for fallback and comparison.

The secret key is configured only in the hosted runtime and is never stored in this repository.

## Repository structure

| Path | Contents |
| --- | --- |
| `index.html` | Browser interface |
| `worker.mjs` | Hosted API entry point and input handling |
| `engine.mjs` | Validation, classification, retrieval, and English-evidence rules |
| `data/` | 15 official-source programme records, synthetic intent examples, and frozen evaluation metrics |
| `test.mjs` | Automated core-logic tests |
| `submission/` | Final report, demonstration script, requirement alignment, silent demo, and narration cues |
| `.openai/hosting.json` | Deployment project reference; contains no secret |

## Run and test locally

Node 20 or later is required.

```text
node build.mjs
node local.mjs
```

Open `http://127.0.0.1:8772`. The local preview has no hosted API key, so **Other or unsure** uses the local baseline.

```text
node --test test.mjs
```

## Submission materials

- `submission/01_Business_and_Technical_Tradeoff_Analysis.pdf` - final analysis
- `submission/02_Demonstration_Script.md` - narration script
- `submission/03_Requirements_Alignment.md` - requirement-to-evidence checklist
- `submission/04_DS_Compass_Demo_Silent.webm` - complete 69-second silent screen recording; narration is timed in the demonstration script

The evaluation covers interest classification only: 37 frozen synthetic cases, 86.5% exact-label accuracy, 18.9% majority-class baseline, and 8.1% abstention. These figures do not measure admission outcomes, programme quality, or applicant eligibility.

## Safety and data handling

The repository contains no personal applicant records, admissions cases, API keys, `.env` files, browser credentials, or deployment archives. Programme descriptions are concise author paraphrases; applicants must verify current requirements on the linked university pages.
