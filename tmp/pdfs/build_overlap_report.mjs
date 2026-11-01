import fs from "node:fs/promises";
import vm from "node:vm";
import { Workbook, SpreadsheetFile } from "@oai/artifact-tool";

const root = "D:/2.Project/1.Web đấu thầu/quiz-dauthau-bancn";
const oldCode = await fs.readFile(`${root}/questions.js`, "utf8");
const context = {};
vm.createContext(context);
vm.runInContext(`${oldCode}\n;globalThis.__questions = questions;`, context);
const oldItems = context.__questions;
const newItems = JSON.parse(await fs.readFile(`${root}/tmp/pdfs/parsed.json`, "utf8"));

function normalize(value) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d").replace(/Đ/g, "D")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function tokenDice(a, b) {
  const aa = new Set(normalize(a).split(" ").filter(Boolean));
  const bb = new Set(normalize(b).split(" ").filter(Boolean));
  let common = 0;
  for (const t of aa) if (bb.has(t)) common++;
  return aa.size + bb.size ? (2 * common) / (aa.size + bb.size) : 0;
}

function parseOptions(block) {
  const text = String(block).replace(/===== PAGE \d+ =====\s*\d*\s*/g, " ").replace(/\s+/g, " ").trim();
  const marks = [...text.matchAll(/(?:^|\s)([A-D])\.\s/g)];
  const options = [];
  for (let i = 0; i < marks.length; i++) {
    const start = marks[i].index + marks[i][0].length;
    const end = i + 1 < marks.length ? marks[i + 1].index : text.length;
    options.push(text.slice(start, end).trim());
  }
  return options;
}

const oldByNorm = new Map();
oldItems.forEach((q, i) => {
  const key = normalize(q.question);
  if (!oldByNorm.has(key)) oldByNorm.set(key, []);
  oldByNorm.get(key).push({ ...q, oldNo: i + 1 });
});

const exactRows = [];
const exactNew = new Set();
const exactOld = new Set();
for (const q of newItems) {
  const matches = oldByNorm.get(normalize(q.question)) ?? [];
  for (const old of matches) {
    const newOptions = parseOptions(q.block);
    const sameOptions = newOptions.length === old.options.length && newOptions.every((x, i) => normalize(x) === normalize(old.options[i]));
    exactRows.push([q.n, old.oldNo, q.question, sameOptions ? "Không" : "Có", old.correct ?? ""]);
    exactNew.add(q.n);
    exactOld.add(old.oldNo);
  }
}

const nearRows = [];
const nearNew = new Set();
const nearOld = new Set();
for (const q of newItems) {
  if (exactNew.has(q.n)) continue;
  let best = null;
  for (let i = 0; i < oldItems.length; i++) {
    const score = tokenDice(q.question, oldItems[i].question);
    if (!best || score > best.score) best = { score, oldNo: i + 1, old: oldItems[i] };
  }
  if (best && best.score >= 0.86) {
    nearRows.push([q.n, best.oldNo, best.score, q.question, best.old.question, best.old.correct ?? ""]);
    nearNew.add(q.n);
    nearOld.add(best.oldNo);
  }
}
nearRows.sort((a, b) => b[2] - a[2] || a[0] - b[0]);

const wb = Workbook.create();
const summary = wb.worksheets.add("Tổng hợp");
const exact = wb.worksheets.add("Trùng nguyên văn");
const near = wb.worksheets.add("Gần trùng");
for (const s of [summary, exact, near]) s.showGridLines = false;

summary.getRange("A2:D2").merge();
summary.getRange("A2").values = [["Đối chiếu ngân hàng câu hỏi cũ và mới"]];
summary.getRange("A3:D3").merge();
summary.getRange("A3").values = [["Bộ cũ: questions.js của dự án | Bộ mới: 430 câu theo Thông báo 2775/TB-QLĐT"]];
summary.getRange("A5:B10").values = [
  ["Chỉ tiêu", "Số lượng"],
  ["Câu trong bộ cũ", oldItems.length],
  ["Câu trong bộ mới", newItems.length],
  ["Câu mới trùng nguyên văn với bộ cũ", exactNew.size],
  ["Câu mới gần trùng (từ 86% từ khóa)", nearNew.size],
  ["Tổng câu mới có đối ứng cũ", new Set([...exactNew, ...nearNew]).size],
];
summary.getRange("A12:D14").values = [
  ["Quy tắc", "Trùng nguyên văn được xác định sau khi bỏ dấu tiếng Việt, chuẩn hóa khoảng trắng và dấu câu.", null, null],
  ["Quy tắc", "Gần trùng dùng hệ số Dice trên tập từ; cần đọc hai nội dung trước khi tái sử dụng đáp án.", null, null],
  ["Cảnh báo", "Cột đáp án cũ chỉ phục vụ đối chiếu dữ liệu, không xác nhận đáp án đó đúng theo pháp luật hiện hành.", null, null],
];
summary.getRange("B12:D12").merge();
summary.getRange("B13:D13").merge();
summary.getRange("B14:D14").merge();

exact.getRange("A2:E2").merge();
exact.getRange("A2").values = [["Các câu trùng nguyên văn"]];
exact.getRange("A4:E4").values = [["STT mới", "STT cũ", "Nội dung câu hỏi", "Phương án có thay đổi", "Đáp án cũ"]];
if (exactRows.length) exact.getRangeByIndexes(4, 0, exactRows.length, 5).values = exactRows;

near.getRange("A2:F2").merge();
near.getRange("A2").values = [["Các câu gần trùng cần rà soát"]];
near.getRange("A4:F4").values = [["STT mới", "STT cũ", "Mức tương đồng", "Câu hỏi mới", "Câu hỏi cũ", "Đáp án cũ"]];
if (nearRows.length) near.getRangeByIndexes(4, 0, nearRows.length, 6).values = nearRows;

const titleFormat = { font: { name: "Arial", size: 15, bold: true, color: "#0F172A" } };
const headerFormat = { fill: "#0F4C5C", font: { name: "Arial", size: 10, bold: true, color: "#FFFFFF" }, horizontalAlignment: "center", verticalAlignment: "center", wrapText: true };
summary.getRange("A2:D2").format = titleFormat;
summary.getRange("A3:D3").format.font = { name: "Arial", size: 10, italic: true, color: "#475569" };
summary.getRange("A5:B5").format = headerFormat;
summary.getRange("A5:B10").format.borders = { insideHorizontal: { style: "thin", color: "#E2E8F0" }, bottom: { style: "thin", color: "#CBD5E1" } };
summary.getRange("A5:A10").format.font = { name: "Arial", size: 10, bold: true };
summary.getRange("A12:A14").format.font = { name: "Arial", size: 10, bold: true };
summary.getRange("A12:D14").format.wrapText = true;
summary.getRange("A:A").format.columnWidth = 42;
summary.getRange("B:B").format.columnWidth = 22;
summary.getRange("C:D").format.columnWidth = 22;
summary.getRange("12:14").format.rowHeight = 34;

exact.getRange("A2:E2").format = titleFormat;
exact.getRange("A4:E4").format = headerFormat;
exact.getRange(`A5:E${exactRows.length + 4}`).format = { font: { name: "Arial", size: 10, color: "#1F2937" }, verticalAlignment: "top", wrapText: true };
exact.getRange(`A5:B${exactRows.length + 4}`).format.horizontalAlignment = "center";
exact.getRange(`D5:E${exactRows.length + 4}`).format.horizontalAlignment = "center";
exact.getRange("A:B").format.columnWidth = 10;
exact.getRange("C:C").format.columnWidth = 75;
exact.getRange("D:D").format.columnWidth = 22;
exact.getRange("E:E").format.columnWidth = 12;
exact.freezePanes.freezeRows(4);
if (exactRows.length) exact.tables.add(`A4:E${exactRows.length + 4}`, true, "ExactOverlap").style = "TableStyleMedium2";

near.getRange("A2:F2").format = titleFormat;
near.getRange("A4:F4").format = headerFormat;
near.getRange(`A5:F${nearRows.length + 4}`).format = { font: { name: "Arial", size: 10, color: "#1F2937" }, verticalAlignment: "top", wrapText: true };
near.getRange(`A5:C${nearRows.length + 4}`).format.horizontalAlignment = "center";
near.getRange(`C5:C${nearRows.length + 4}`).format.numberFormat = "0.0%";
near.getRange("A:B").format.columnWidth = 10;
near.getRange("C:C").format.columnWidth = 16;
near.getRange("D:E").format.columnWidth = 65;
near.getRange("F:F").format.columnWidth = 12;
near.freezePanes.freezeRows(4);
if (nearRows.length) near.tables.add(`A4:F${nearRows.length + 4}`, true, "NearOverlap").style = "TableStyleMedium2";

wb.recalculate();
const check = await wb.inspect({ kind: "table", range: "Tổng hợp!A2:B10", include: "values,formulas", tableMaxRows: 12, tableMaxCols: 4 });
console.log(check.ndjson);
const errors = await wb.inspect({ kind: "match", searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A|#NUM!|#NULL!|#SPILL!|#CALC!", options: { useRegex: true, maxResults: 50 }, summary: "final formula error scan" });
console.log(errors.ndjson);

const outDir = `${root}/outputs/2026-11-01-doi-chieu-cau-hoi`;
await fs.mkdir(outDir, { recursive: true });
for (const [sheetName, range, file] of [["Tổng hợp", "A2:D14", "preview-summary.png"], ["Trùng nguyên văn", "A2:E15", "preview-exact.png"], ["Gần trùng", "A2:F15", "preview-near.png"]]) {
  const preview = await wb.render({ sheetName, range, scale: 1, format: "png" });
  await fs.writeFile(`${outDir}/${file}`, new Uint8Array(await preview.arrayBuffer()));
}
const blob = await SpreadsheetFile.exportXlsx(wb);
const outputPath = `${outDir}/doi_chieu_cau_hoi_cu_va_moi_2775_2026.xlsx`;
await blob.save(outputPath);
console.log(JSON.stringify({ outputPath, oldCount: oldItems.length, newCount: newItems.length, exact: exactNew.size, near: nearNew.size }));
