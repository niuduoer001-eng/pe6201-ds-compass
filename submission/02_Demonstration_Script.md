# DS Compass demonstration narration

## 0:00-0:08 - Purpose and boundary

Hello, I am Niu Duoer. This is DS Compass, my PE6201 individual project. It helps international applicants discover selected master's programmes in Singapore and the United Kingdom. It is an initial research tool, not an admission predictor or a university-ranking system.

## 0:08-0:25 - Profile and input design

I enter an undergraduate institution, an optional background category, major, GPA, destination, and a primary study direction. The school search accepts any institution. The optional 985, 211, or Double First Class field is only context: it does not affect retrieval or generate an admission probability. I then enter IELTS overall and four component scores. TOEFL can also be recorded without an unsupported conversion to IELTS.

## 0:25-0:42 - Working recommendation and evidence

With Artificial Intelligence selected, the system retrieves source-linked AI programme cards. Each card shows its university, summary, region, English-evidence status, and the official programme-page link. The English result is not an eligibility decision. It only reports the recorded rule, and asks the applicant to verify current requirements and test validity directly with the university.

## 0:42-0:56 - AI, data, evaluation and limitations

The method panel shows the system boundary. There are 15 concise records based on official university pages. Selected directions use deterministic catalogue retrieval. Only Other or unsure sends short keywords to a server-side model, which returns one fixed direction or abstains. The frozen synthetic evaluation has 37 cases, 86.5 percent exact-label accuracy, an 18.9 percent majority baseline, and 8.1 percent abstention. These are engineering checks, not admissions outcomes or independent human validation.

## 0:56-1:09 - Failure handling and close

Finally, I enter marine biology and ocean ecology, which is outside this catalogue. The system does not invent a match. It asks the user to clarify one primary study goal. This limitation is deliberate: stale university information, mixed goals, and incomplete coverage require manual review or abstention. The live system and its source code are publicly available for assessment.
