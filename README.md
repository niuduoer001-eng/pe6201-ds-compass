# DS Compass

PE6201 individual project: evidence-led master's programme discovery for selected Singapore and United Kingdom programmes.

## What the prototype does

The user selects a destination and study direction. The application retrieves same-direction programme cards from a local official-source catalogue. IELTS is checked only against encoded thresholds. TOEFL is recorded but not converted into IELTS. The prototype does not predict admission, score universities, or decide academic eligibility.

For Other or unsure, short keywords are classified by OpenRouter Gemini 2.5 Flash Lite into a fixed label. A local Naive Bayes baseline is retained for comparison and fallback. The API key is server-side only and is not included in this repository.

## Run locally

Use Node 20 or newer.

```text
node build.mjs
node local.mjs
```

Open `http://127.0.0.1:8772` in a browser. The local preview does not include the hosted API secret, so selecting Other or unsure uses the local baseline.

## Test

```text
node --test test.mjs
```

## Data and evaluation

`data/programmes.json` contains 11 author paraphrases of official university pages and source URLs. `data/train_intents.json` contains synthetic training examples. The project does not contain personal applicant data or historical admissions cases.

The report records a frozen 37-case synthetic interest-classification evaluation: Gemini exact-label accuracy was 86.5%; majority-class baseline was 18.9%. These metrics do not measure admission outcomes or eligibility.

## Repository safety

Never commit an OpenRouter key, `.env` file, personal application cases, browser credentials, or deployment archives.
