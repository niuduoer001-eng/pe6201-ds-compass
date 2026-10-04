# Code guide

## Module map

| File | Responsibility |
| --- | --- |
| `index.html` | Accessible browser form, field visibility, request construction, safe result rendering, and the visible method/limitation panel |
| `worker.mjs` | Hosted request boundary: routes, origin and size checks, validation orchestration, rate limiting, model call, local fallback, and JSON response |
| `engine.mjs` | Domain logic: validation, English-evidence status, deterministic retrieval, Naive Bayes fallback, and bounded model classification |
| `build.mjs` | Bundles source data and browser page into the deployable worker without exposing a runtime secret |
| `local.mjs` | Minimal local Node server for testing the built worker |
| `test.mjs` | Focused regression tests for high-risk decision boundaries |
| `data/*.json` | Versioned catalogue, training examples and evaluation summary |

## How the rules stay legible

`engine.mjs` contains the product rules in named functions rather than embedding them in the interface: `validate`, `englishCheck`, `recommend`, `nbPredict`, and `classify`. `englishCheck` returns one of `supported`, `gap`, or `review`; it never returns full eligibility. `recommend` filters by selected region and domain only. `classify` has a fixed schema and only accepts an allowed label or `abstain`.

## Run, test and deploy

Use Node 20 or later.

```text
node build.mjs
node local.mjs
node --test test.mjs
```

Open `http://127.0.0.1:8772` after starting the local server. The local environment does not contain the hosted model secret, so Other or unsure uses the English baseline. Production deployment uses `.openai/hosting.json` and a server-side `OPENROUTER_API_KEY`; never commit this key, `.env` files, or browser credentials.

## Review entry points

For a fast code review, start with `README.md`, then `docs/PRODUCT_DOCUMENTATION.md`, `engine.mjs`, `worker.mjs`, `data/programmes.json`, and `test.mjs`. This sequence shows product intent, architecture, rules, request boundary, evidence data, and regression coverage.
