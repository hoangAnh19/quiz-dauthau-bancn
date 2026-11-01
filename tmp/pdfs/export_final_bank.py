import json
import re
from pathlib import Path
import openpyxl

root = Path(r"D:\2.Project\1.Web đấu thầu\quiz-dauthau-bancn")
questions = json.loads((root / "tmp/pdfs/parsed.json").read_text(encoding="utf-8"))
sheet = openpyxl.load_workbook(root / "outputs/2026-11-01-dap-an-dau-thau/dap_an_430_cau_dau_thau_2775_2026.xlsx", data_only=True)["Đáp án 430 câu"]
items = []
for row, question in enumerate(questions, start=6):
    text = re.sub(r"\s+", " ", question["block"]).strip()
    markers = list(re.finditer(r"([ABCD])\s*\.\s*", text))
    start = next(index for index in range(len(markers) - 3) if [marker.group(1) for marker in markers[index:index + 4]] == list("ABCD"))
    labels = markers[start:start + 4]
    options = [text[labels[index].end(): labels[index + 1].start() if index < 3 else len(text)].strip() for index in range(4)]
    items.append({"position": question["n"], "content": re.sub(r"\s+", " ", question["question"]).strip(), "options": options, "answer": sheet.cell(row, 7).value})
assert len(items) == 430 and all(item["answer"] in "ABCD" and len(item["options"]) == 4 for item in items)
(root / "tmp/pdfs/final_bank.json").write_text(json.dumps(items, ensure_ascii=False), encoding="utf-8")
print(f"Exported {len(items)} questions")
