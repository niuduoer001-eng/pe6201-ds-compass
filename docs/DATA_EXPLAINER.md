# Data explainer

## Files and purpose

| File | Purpose | Origin | Personal data |
| --- | --- | --- | --- |
| `data/programmes.json` | Retrieval catalogue and encoded English-evidence fields | 15 concise author paraphrases of official university pages | None |
| `data/train_intents.json` | Synthetic examples for the local Naive Bayes fallback | Author-created synthetic training examples | None |
| `data/metrics.json` | Frozen evaluation summary and limitations | Recorded project evaluation metadata | None |

## Programme catalogue schema

Each programme record has an `id`, `school`, `title`, `domain`, `region`, concise `summary`, `academic` note, `source_url`, `language_source`, `verified_on`, and `evidence_type`. Where supported by the selected page, `ielts_min` and `band_min` are recorded. A null English threshold means the system must return **review**; it must not infer a missing rule.

The catalogue contains only data needed for this prototype. It excludes applicant names, historical admissions outcomes, application essays, contact details, or scraped personal records.

## Provenance and quality controls

Programme text is a paraphrase, not a copied university page. The application exposes the original page link on every card so a user can verify the current information. `verified_on` records the snapshot date, and the rule engine marks a source older than 90 days for recheck. This is a limited freshness control: it cannot prove that every transcription is correct or that a page has not changed within the window.

## Appropriate and inappropriate use

The data supports a source-linked discovery shortlist. It does not support admissions prediction, university scoring, population-level claims, or inference about a specific school's admission competitiveness. The optional undergraduate-school field in the interface is not joined to any ranking table and is not used by retrieval.

## Maintenance path

A maintainer should verify each source URL before an admission cycle, add a new snapshot date only after review, retain the previous record in version control, and ask a second reviewer to check changed English rules. Additions should use the same schema and must include a direct official source URL.
