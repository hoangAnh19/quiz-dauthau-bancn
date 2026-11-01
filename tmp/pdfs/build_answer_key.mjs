import fs from "node:fs/promises";
import { Workbook, SpreadsheetFile } from "@oai/artifact-tool";

const sourcePath = "tmp/pdfs/parsed.json";
const outputDir = "outputs/2026-11-01-dap-an-dau-thau";
const outputPath = `${outputDir}/dap_an_430_cau_dau_thau_2775_2026.xlsx`;
const items = JSON.parse(await fs.readFile(sourcePath, "utf8"));

const overrides = {
  9:"D",
  53:"C",75:"C",107:"C",114:"D",122:"B",123:"D",189:"C",204:"D",211:"B",226:"B",
  269:"B",272:"C",279:"B",284:"C",295:"B",331:"D",370:"D",381:"B",382:"B",383:"C",
  384:"B",385:"B",386:"C",387:"C",388:"C",389:"D",390:"C",391:"D",392:"B",393:"A",
  394:"D",395:"A",396:"D",397:"D",398:"C",399:"A",400:"B",401:"B",403:"D",404:"C",
  407:"D",409:"B",410:"B",411:"D",412:"D",413:"D",414:"D",415:"D",416:"D",417:"D",
  418:"B",419:"D",420:"D",421:"B",422:"D",423:"A",424:"B",425:"B",426:"B",427:"A",
  428:"B",429:"D",430:"A"
};

function clean(s) {
  return s.replace(/===== PAGE \d+ =====\s*\d*\s*/g, " ").replace(/\s+/g, " ").trim();
}
function parseOptions(block) {
  const text = clean(block);
  const marks = [...text.matchAll(/(?:^|\s)([A-D])\.\s/g)];
  const out = {};
  for (let i = 0; i < marks.length; i++) {
    const start = marks[i].index + marks[i][0].length;
    const end = i + 1 < marks.length ? marks[i + 1].index : text.length;
    out[marks[i][1]] = text.slice(start, end).trim();
  }
  return out;
}

const rows = items.map((x) => {
  const answer = overrides[x.n] ?? x.correct;
  if (!answer) throw new Error(`Thiếu đáp án câu ${x.n}`);
  const opts = parseOptions(x.block);
  if (!opts[answer]) throw new Error(`Không đọc được phương án ${answer} câu ${x.n}`);
  const basis = x.n >= 411 ? "Luật Đấu thầu; Nghị định 274/2026/NĐ-CP" :
    x.n >= 381 ? "Luật Đấu thầu; VBHN 36/2026/VBHN-NĐ-BTC; Nghị định 349/2026/NĐ-CP; Thông tư 134/2026/TT-BTC" :
    "Luật Đấu thầu; VBHN 36/2026/VBHN-NĐ-BTC và văn bản chuyên ngành liên quan";
  return [x.n, clean(x.question), opts.A ?? "", opts.B ?? "", opts.C ?? "", opts.D ?? "", answer, opts[answer], basis];
});

const wb = Workbook.create();
const sheet = wb.worksheets.add("Đáp án 430 câu");
sheet.showGridLines = false;
sheet.tabColor = "#0F4C5C";

sheet.getRange("A2:I2").merge();
sheet.getRange("A2").values = [["Đáp án 430 câu thi nghiệp vụ chuyên môn về đấu thầu"]];
sheet.getRange("A3:I3").merge();
sheet.getRange("A3").values = [["Theo Thông báo 2775/TB-QLĐT ngày 22/10/2026 - áp dụng kỳ thi từ 10/11/2026"]];
sheet.getRange("A5:I5").values = [["STT","Câu hỏi","A","B","C","D","Đáp án","Nội dung đúng","Căn cứ đối chiếu"]];
sheet.getRangeByIndexes(5, 0, rows.length, 9).values = rows;

const used = sheet.getRange(`A2:I${rows.length + 5}`);
used.format.font = { name: "Arial", size: 10, color: "#1F2937" };
used.format.verticalAlignment = "top";
sheet.getRange("A2:I2").format.font = { name: "Arial", size: 15, bold: true, color: "#0F172A" };
sheet.getRange("A3:I3").format.font = { name: "Arial", size: 10, italic: true, color: "#475569" };
sheet.getRange("A5:I5").format = {
  fill: "#0F4C5C",
  font: { name: "Arial", size: 10, bold: true, color: "#FFFFFF" },
  horizontalAlignment: "center",
  verticalAlignment: "center",
  wrapText: true,
  borders: { preset: "inside", style: "thin", color: "#FFFFFF" }
};
sheet.getRange(`A6:I${rows.length + 5}`).format.wrapText = true;
sheet.getRange(`A6:A${rows.length + 5}`).format.horizontalAlignment = "center";
sheet.getRange(`G6:G${rows.length + 5}`).format = {
  fill: "#D1FAE5",
  font: { name: "Arial", size: 11, bold: true, color: "#065F46" },
  horizontalAlignment: "center",
  verticalAlignment: "center"
};
sheet.getRange(`A5:I${rows.length + 5}`).format.borders = {
  insideHorizontal: { style: "thin", color: "#E2E8F0" },
  bottom: { style: "thin", color: "#CBD5E1" }
};
sheet.getRange("A:A").format.columnWidth = 7;
sheet.getRange("B:B").format.columnWidth = 48;
sheet.getRange("C:F").format.columnWidth = 34;
sheet.getRange("G:G").format.columnWidth = 9;
sheet.getRange("H:H").format.columnWidth = 38;
sheet.getRange("I:I").format.columnWidth = 38;
sheet.getRange("2:2").format.rowHeight = 25;
sheet.getRange("3:3").format.rowHeight = 20;
sheet.getRange("5:5").format.rowHeight = 32;
sheet.freezePanes.freezeRows(5);
sheet.freezePanes.freezeColumns(2);
sheet.tables.add(`A5:I${rows.length + 5}`, true, "AnswerKey430").style = "TableStyleMedium2";

const notes = wb.worksheets.add("Nguồn và lưu ý");
notes.showGridLines = false;
notes.tabColor = "#64748B";
notes.getRange("A2:D2").merge();
notes.getRange("A2").values = [["Nguồn đối chiếu và phạm vi sử dụng"]];
notes.getRange("A4:B10").values = [
  ["Tài liệu câu hỏi", "Thông báo 2775/TB-QLĐT ngày 22/10/2026, 430 câu, áp dụng từ 10/11/2026"],
  ["Luật nền", "Văn bản hợp nhất 74/VBHN-VPQH ngày 25/03/2026 - Luật Đấu thầu"],
  ["Lựa chọn nhà thầu", "Văn bản hợp nhất 36/2026/VBHN-NĐ-BTC ngày 23/09/2026"],
  ["Sửa đổi 2026", "Nghị định 349/2026/NĐ-CP ngày 09/09/2026"],
  ["Mẫu và báo cáo", "Thông tư 134/2026/TT-BTC ngày 09/09/2026"],
  ["Lựa chọn nhà đầu tư", "Nghị định 274/2026/NĐ-CP ngày 07/07/2026, hiệu lực 21/08/2026"],
  ["Lưu ý", "Đây là đáp án ôn tập được tổng hợp và đối chiếu, không phải đáp án chính thức do Cục Quản lý đấu thầu công bố. Khi cơ quan quản lý cập nhật ngân hàng câu hỏi, cần đối chiếu lại phiên bản mới."]
];
notes.getRange("A12:B17").values = [
  ["Liên kết chính thức", "https://vanban.chinhphu.vn/?classid=2629&docid=217348&pageid=27160"],
  ["", "https://vanban.chinhphu.vn/?docid=219604&orggroupid=4&pageid=27160"],
  ["", "https://vanban.chinhphu.vn/?classid=1&docid=219431&orggroupid=2&pageid=27160"],
  ["", "https://vanban.chinhphu.vn/?docid=219443&pageid=27160&typegroupid=6"],
  ["", "https://vanban.chinhphu.vn/?classid=1&docid=218807&pageid=27160&typegroupid=4"],
  ["", "https://chungchidauthau.mof.gov.vn"]
];
notes.getRange("A2:D2").format.font = { name: "Arial", size: 15, bold: true, color: "#0F172A" };
notes.getRange("A4:A10").format = { fill: "#E2E8F0", font: { name: "Arial", size: 10, bold: true } };
notes.getRange("A4:B17").format.font = { name: "Arial", size: 10, color: "#1F2937" };
notes.getRange("A4:B17").format.wrapText = true;
notes.getRange("A:A").format.columnWidth = 24;
notes.getRange("B:B").format.columnWidth = 95;
notes.freezePanes.freezeRows(3);

wb.recalculate();
const check = await wb.inspect({ kind: "table", sheetId: sheet.sheetId, range: "A2:I12", include: "values,formulas", tableMaxRows: 12, tableMaxCols: 9 });
console.log(check.ndjson);
const errors = await wb.inspect({ kind: "match", searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A|#NUM!|#NULL!|#SPILL!|#CALC!", options: { useRegex: true, maxResults: 50 }, summary: "final formula error scan" });
console.log(errors.ndjson);
await fs.mkdir(outputDir, { recursive: true });
const preview = await wb.render({ sheetName: "Đáp án 430 câu", range: "A2:I14", scale: 1, format: "png" });
await fs.writeFile(`${outputDir}/preview.png`, new Uint8Array(await preview.arrayBuffer()));
const out = await SpreadsheetFile.exportXlsx(wb);
await out.save(outputPath);
console.log(outputPath);
