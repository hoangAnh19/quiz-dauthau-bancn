import json
import re
import unicodedata
from pathlib import Path

import openpyxl

ROOT = Path(r"D:\2.Project\1.Web đấu thầu\quiz-dauthau-bancn")
OURS = ROOT / "outputs" / "2026-11-01-dap-an-dau-thau" / "dap_an_430_cau_dau_thau_2775_2026.xlsx"
THEIRS = Path(r"C:\Users\PC\Downloads\Dap_An_Ngan_Hang_Cau_Hoi_Dau_Thau-v4.xlsx")
OUT = ROOT / "tmp" / "pdfs" / "comparison_v4.json"

def norm(value):
    value = unicodedata.normalize("NFKD", str(value or ""))
    value = "".join(c for c in value if not unicodedata.combining(c))
    return re.sub(r"[^a-z0-9]+", " ", value.lower()).strip()

def tokens(value):
    return set(norm(value).split())

def dice(a, b):
    a, b = tokens(a), tokens(b)
    return 2 * len(a & b) / (len(a) + len(b)) if a or b else 0

def load(path, sheet, start, question_col, answer_col):
    wb = openpyxl.load_workbook(path, data_only=True, read_only=False)
    ws = wb[sheet]
    out = []
    for r in range(start, ws.max_row + 1):
        no = ws.cell(r, 1).value
        q = ws.cell(r, question_col).value
        ans = ws.cell(r, answer_col).value
        if isinstance(no, int) and q and ans:
            out.append({"no": no, "question": str(q), "answer": str(ans).strip().upper()})
    return out

ours = load(OURS, "Đáp án 430 câu", 6, 2, 7)
theirs = load(THEIRS, "Đáp Án 430 Câu Hỏi", 2, 2, 7)
results = []
for item in theirs:
    candidates = sorted(((dice(item["question"], o["question"]), o) for o in ours), reverse=True, key=lambda x:x[0])
    score, matched = candidates[0]
    results.append({
        "theirNo": item["no"], "ourNo": matched["no"], "score": round(score, 4),
        "theirAnswer": item["answer"], "ourAnswer": matched["answer"],
        "sameAnswer": item["answer"] == matched["answer"],
        "question": item["question"], "ourQuestion": matched["question"]
    })
summary = {
    "ours": len(ours), "theirs": len(theirs),
    "exact_question": sum(x["score"] == 1 for x in results),
    "high_similarity": sum(x["score"] >= .9 for x in results),
    "same_answer": sum(x["sameAnswer"] for x in results),
    "different_answer": sum(not x["sameAnswer"] for x in results),
    "weak_match": sum(x["score"] < .86 for x in results),
}
same_no = []
for a, b in zip(theirs, ours):
    same_no.append({"no": a["no"], "score": round(dice(a["question"], b["question"]),4), "theirAnswer":a["answer"], "ourAnswer":b["answer"], "sameAnswer":a["answer"]==b["answer"]})
summary["same_position_high_similarity"] = sum(x["score"] >= .9 for x in same_no)
summary["same_position_same_answer"] = sum(x["sameAnswer"] for x in same_no)
summary["their_answer_distribution"] = {k:sum(x["answer"]==k for x in theirs) for k in "ABCD"}
summary["our_answer_distribution"] = {k:sum(x["answer"]==k for x in ours) for k in "ABCD"}
OUT.write_text(json.dumps({"summary": summary, "rows": results}, ensure_ascii=False, indent=2), encoding="utf-8")
by_their_no = {x["theirNo"]: x for x in results}
parallel = []
for i in range(430):
    o, t = ours[i], theirs[i]
    score = dice(o["question"], t["question"])
    status = "Trùng nguyên văn" if norm(o["question"]) == norm(t["question"]) else ("Gần trùng" if score >= .86 else "Khác / không cùng câu")
    answer_status = ("Trùng đáp án" if o["answer"] == t["answer"] else "Khác đáp án") if status != "Khác / không cùng câu" else "Không so sánh đáp án"
    best = by_their_no[t["no"]]
    parallel.append({"stt":i+1,"ourQuestion":o["question"],"ourAnswer":o["answer"],"v4Question":t["question"],"v4Answer":t["answer"],"positionScore":round(score,4),"questionStatus":status,"answerStatus":answer_status,"bestOurNo":best["ourNo"],"bestScore":best["score"]})
report = {"summary":summary,"parallel":parallel,"bestMatches":results}
(ROOT / "tmp" / "pdfs" / "comparison_v4_full.json").write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding="utf-8")
print(json.dumps(summary, ensure_ascii=False))
for x in results:
    if not x["sameAnswer"]:
        print(f"{x['theirNo']}=>{x['ourNo']} {x['theirAnswer']}!={x['ourAnswer']} score={x['score']}")
