import json
import re
from pathlib import Path

root = Path(__file__).resolve().parents[2]
questions = json.loads((root / "tmp/pdfs/parsed.json").read_text(encoding="utf-8"))
source = (root / "apps/web/src/data/question-bank.ts").read_text(encoding="utf-8")
match = re.search(r"const answerKey = `([^`]*)`", source)
assert match, "Không tìm thấy khóa đáp án trong question-bank.ts"
answers = match.group(1).split(",")
assert len(questions) == len(answers) == 430
items = []
for index, question in enumerate(questions):
    text = re.sub(r"\s+", " ", question["block"]).strip()
    markers = list(re.finditer(r"([ABCD])\s*\.\s*", text))
    start = next(index for index in range(len(markers) - 3) if [marker.group(1) for marker in markers[index:index + 4]] == list("ABCD"))
    labels = markers[start:start + 4]
    options = [text[labels[index].end(): labels[index + 1].start() if index < 3 else len(text)].strip() for index in range(4)]
    assert question["n"] == index + 1
    items.append({"position": question["n"], "content": re.sub(r"\s+", " ", question["question"]).strip(), "options": options, "answer": answers[index]})
assert len(items) == 430 and all(item["answer"] in "ABCD" and len(item["options"]) == 4 for item in items)
(root / "tmp/pdfs/final_bank.json").write_text(json.dumps(items, ensure_ascii=False), encoding="utf-8")
print(f"Exported {len(items)} questions")
