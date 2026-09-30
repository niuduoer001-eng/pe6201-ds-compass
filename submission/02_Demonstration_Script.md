# DS Compass Demonstration Script

## Opening

Hello, I am Niu Duoer. This is my PE6201 individual project, Personalised AI Assisted Masters Programme Selection. DS Compass supports an international applicant who is comparing selected master's programmes in Singapore and the United Kingdom. It is an initial research tool, not an admissions predictor.

## Problem and scope

The user normally reads many university pages and must connect a broad goal such as data science, AI, systems, conversion computing, business analytics or learning technology to programme names and requirements. My system brings a small, source-linked catalogue into one workflow. I deliberately exclude application submission, university ranking, GPA conversion, visa advice and admission likelihood.

## Demonstration

I enter an undergraduate institution and degree for user context. The school search includes common Chinese universities, but users can also type any institution. The optional 985, 211 or Double First Class background field is recorded only for context: it never changes the shortlist or produces an admission prediction. I select a clear study direction, Artificial Intelligence, and select Singapore and the United Kingdom. I can enter IELTS overall and four component scores, or record a TOEFL iBT score. The system does not ask for an exam date; it asks the user to confirm validity for the next autumn intake on the official programme page.

After I submit, the server calls a rented language model to classify one fixed primary-interest label. The output cannot invent a programme requirement because the programme cards come from my local catalogue. The system returns the matching AI cards and shows a separate English-evidence status. Each card has the original university page link so the applicant can check current information.

I now demonstrate a limitation. If I write an unclear, equally mixed or out-of-catalogue goal, the system should abstain and ask for one main direction. If the language model is unavailable, the page explicitly reports its local English baseline rather than silently behaving as though the model ran.

## Evaluation and trade off

I evaluated only interest classification, not admissions. A different model generated and labelled a frozen synthetic test set before the deployed Gemini model was evaluated. There were 37 valid cases. Gemini achieved 86.5 percent exact-label accuracy, compared with an 18.9 percent majority-class baseline. This is a small synthetic engineering check and not independent human validation.

The project uses official programme pages, but information can change. The page prompts a recheck after 90 days. Academic eligibility, degree equivalence, English exemptions and admissions decisions remain manual review. I did not use or publish historical applicant cases because their labels, provenance and permission are uncertain.

## Closing

The acceptance test is that a user selects a destination, enters a clear goal and receives either a source-linked same-domain shortlist with a separate English-evidence status, or a clear abstention. The live site completes this path. My next improvement would be independently human-labelled evaluation data and a second reviewer for source encoding.
