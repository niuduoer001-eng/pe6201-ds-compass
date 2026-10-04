# DS Compass

PE6201 individual project by Niu Duoer. The app helps an international applicant start comparing selected master's programmes in Singapore and the United Kingdom.

**Live app:** https://ds-compass-sg-uk-niu.duoer001.chatgpt.site

I built the first version around a simple task: choose a destination and a study direction, then get a short list of programme pages worth checking. The list comes from a catalogue of 15 records in `data/programmes.json`. Every result links to the university's page.

## What the app uses the profile for

Destination and study direction determine which records appear. The selected major then receives an academic-preparation evidence check against each programme's recorded requirement. It says whether the major is broadly related or needs manual review; it never decides eligibility or admission. The institution name, optional 985/211/Double First Class category and GPA are collected as context and do not generate an admission score. IELTS overall and component scores are compared only with rules recorded for a programme. TOEFL is recorded without converting it to an IELTS score. If a rule is missing or unclear, the app asks the user to check the official page.

The app is a starting point for research. It does not estimate admission chances, rank universities or decide whether a degree meets a programme's academic requirements.

## How classification works

Choosing one of the six listed directions uses a direct catalogue filter. Choosing **Other or unsure** sends the short keyword field to Gemini 2.5 Flash Lite through the hosted worker. The model returns a label from a fixed list or `abstain`; it does not write programme descriptions. If the model is unavailable, the worker uses the local Naive Bayes classifier and reports that fallback.

That classifier has a real limitation: its tokeniser uses English words, so the local fallback is weak on Chinese text. The hosted model prompt accepts Chinese and English, but the evaluation is too small to establish equal performance in both languages.

## Run it locally

Install Node.js 20 or later. In the project directory:

```text
node build.mjs
node local.mjs
```

Open `http://127.0.0.1:8772`. The local run does not include the hosted API key; **Other or unsure** therefore exercises the local fallback. To run the regression checks in `test.mjs`, use:

```text
node --test test.mjs
```

## Where to look

- `index.html` is the form and result display.
- `worker.mjs` handles requests and calls the model when configured.
- `engine.mjs` contains validation, classification, catalogue matching and English-rule handling.
- `data/` holds programme records, local training examples and the evaluation summary.
- `evals/` contains the frozen classification cases and the recorded model outputs.
- `docs/` explains the user, data, evaluation and code structure.
- `submission/` contains the report, timed demonstration script and requirement map.
- `submission/00_AI_Assistance_Statement.md` records the AI tools used while preparing this project.

The saved model evaluation got 32 of 37 labels right (86.5%), against 7 of 37 (18.9%) for an always-abstain baseline. It also missed four of seven out-of-scope examples. The evaluation explainer describes what that means and links to the cases. It is a small synthetic check, not evidence about admissions outcomes.

`node evals/replay_profile_evidence.mjs` replays eight profile-to-requirement evidence cases. It checks the deterministic matching rule, not admissions outcomes.

There is no final demo video in this repository yet. The course asks for the student's face, the screen and spoken explanation in a 5-minute recording; `submission/02_Demonstration_Script.md` is the guide for that recording.

The repository does not include an API key or applicant records. The hosted key is configured as a server-side secret.
