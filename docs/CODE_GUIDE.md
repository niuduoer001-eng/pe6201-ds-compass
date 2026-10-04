# Code map

Start with `worker.mjs` to see what happens to a request. It validates the body, calls the classifier only for **Other or unsure**, applies a per-minute limit, and returns the recommendation. The programme data and page are embedded at build time.

`engine.mjs` holds the rules used by both the hosted worker and local build:

- `validate` checks the study direction, region and IELTS values.
- `classify` calls OpenRouter and accepts only a known label or `abstain`.
- `nbPredict` is the local fallback; it tokenises English words and applies Laplace smoothing.
- `recommend` filters on region and direction.
- `englishCheck` returns `supported`, `gap` or `review` for IELTS evidence.

The school, school-background, major and GPA fields are not used by `recommend`. That is intentional and can be confirmed by following the form payload in `index.html` into `worker.mjs` and `engine.mjs`.

## Run

The only runtime dependency is Node.js 20 or later. From the repository root:

```text
node build.mjs
node local.mjs
```

Then visit `http://127.0.0.1:8772`. The local worker has no production secret, so the keyword path uses `nbPredict`.

Run the focused checks with:

```text
node --test test.mjs
```

To recalculate the saved evaluation counts without making API calls:

```text
node evals/replay.mjs
```

## File responsibilities

| File | Responsibility |
| --- | --- |
| `index.html` | Form, visible method notes, API request and result cards |
| `worker.mjs` | Hosted API routes, request checks, rate limit and model/fallback choice |
| `engine.mjs` | Profile rules, classification, programme filtering and English checks |
| `build.mjs` | Inserts JSON data and HTML into the worker bundle |
| `local.mjs` | Local HTTP wrapper around the built worker |
| `test.mjs` | Five focused rule regression tests |
| `data/` | Current programme catalogue, fallback examples and metric summary |
| `evals/` | Frozen classification prompts, recorded labels and replay script |

The code is compact because this is a prototype, but each rule is named and kept in the engine module. The test suite is small: it does not exercise the hosted secret, a live OpenRouter request or every browser interaction.
