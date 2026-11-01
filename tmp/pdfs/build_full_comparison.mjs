import fs from "node:fs/promises";
import { Workbook, SpreadsheetFile } from "@oai/artifact-tool";

const root = "D:/2.Project/1.Web đấu thầu/quiz-dauthau-bancn";
const report = JSON.parse(await fs.readFile(`${root}/tmp/pdfs/comparison_v4_full.json`, "utf8"));
const outputDir = `${root}/outputs/2026-11-01-so-sanh-430-cau`;
await fs.mkdir(outputDir, { recursive: true });

const wb = Workbook.create();
const summary = wb.worksheets.add("Tổng hợp");
const detail = wb.worksheets.add("Đối chiếu 430 câu");
const navy = "#155F82";
const pale = "#EAF4FA";
const amber = "#FFF2CC";
const red = "#FCE4D6";
const green = "#E2F0D9";

summary.getRange("A1:F1").merge();
summary.getRange("A1").values = [["So sánh 430 câu hỏi và đáp án"]];
summary.getRange("A2:F2").merge();
summary.getRange("A2").values = [["So sánh theo cùng số thứ tự; chỉ kết luận trùng/khác đáp án khi hai câu hỏi trùng hoặc gần trùng."]];
summary.getRange("A4:B10").values = [
  ["Chỉ tiêu", "Kết quả"],
  ["Số câu trong bộ của tôi", report.summary.ours],
  ["Số câu trong file v4", report.summary.theirs],
  ["Trùng nguyên văn (đối chiếu tìm kiếm tốt nhất)", report.summary.exact_question],
  ["Tương đồng cao ≥ 90%", report.summary.high_similarity],
  ["Câu trùng/gần trùng theo cùng STT", report.summary.same_position_high_similarity],
  ["Cần đối chiếu thủ công do khác câu hoặc lệch thứ tự", 430 - report.summary.same_position_high_similarity],
];
summary.getRange("D4:H8").values = [
  ["Phân bố đáp án", "A", "B", "C", "D"],
  ["Bộ của tôi", report.summary.our_answer_distribution.A, report.summary.our_answer_distribution.B, report.summary.our_answer_distribution.C, report.summary.our_answer_distribution.D],
  ["File v4", report.summary.their_answer_distribution.A, report.summary.their_answer_distribution.B, report.summary.their_answer_distribution.C, report.summary.their_answer_distribution.D],
  ["Lưu ý", "File v4 có tỷ trọng đáp án A rất cao; không dùng phân bố này để suy ra đáp án pháp lý.", "", "", ""],
  ["Nguồn file v4", "Tệp Dap_An_Ngan_Hang_Cau_Hoi_Dau_Thau-v4.xlsx do người dùng cung cấp", "", "", ""],
];
summary.getRange("A12:F14").values = [
  ["Cách đọc bảng chi tiết", "", "", "", "", ""],
  ["Trùng nguyên văn", "Có thể đối chiếu đáp án trực tiếp."],
  ["Gần trùng", "Cần đọc phương án trước khi dùng đáp án; có thể đã thay đổi câu chữ hoặc điều kiện pháp lý."],
];
summary.mergeCells("E7:H7");
summary.mergeCells("E8:H8");
summary.getRange("E7:H8").format.wrapText = true;
summary.getRange("E7:H8").format.rowHeight = 34;
summary.getRange("A1:F1").format = { fill: navy, font: { name: "Arial", size: 14, bold: true, color: "#FFFFFF" }, horizontalAlignment: "center", verticalAlignment: "center" };
summary.getRange("A2:F2").format = { fill: pale, font: { name: "Arial", size: 10, italic: true }, wrapText: true, verticalAlignment: "center" };
summary.getRange("A4:B4").format = { fill: navy, font: { name: "Arial", bold: true, color: "#FFFFFF" }, horizontalAlignment: "center" };
summary.getRange("D4:H4").format = { fill: navy, font: { name: "Arial", bold: true, color: "#FFFFFF" }, horizontalAlignment: "center" };
summary.getRange("A12:F12").format = { fill: navy, font: { name: "Arial", bold: true, color: "#FFFFFF" } };
summary.getRange("A4:B10").format.borders = { preset: "all", style: "thin", color: "#C9D6DF" };
summary.getRange("D4:H8").format.borders = { preset: "all", style: "thin", color: "#C9D6DF" };
summary.getRange("A12:F14").format.borders = { preset: "all", style: "thin", color: "#C9D6DF" };
summary.getRange("A1:F14").format.font = { name: "Arial", size: 10 };
summary.getRange("A1:F1").format.font = { name: "Arial", size: 14, bold: true, color: "#FFFFFF" };
summary.getRange("A1:F1").format.rowHeight = 28;
summary.getRange("A2:F2").format.rowHeight = 34;
summary.getRange("A:A").format.columnWidth = 42;
summary.getRange("B:B").format.columnWidth = 64;
summary.getRange("C:C").format.columnWidth = 5;
summary.getRange("D:D").format.columnWidth = 24;
summary.getRange("E:H").format.columnWidth = 12;
summary.showGridLines = false;

const headers = ["STT", "Câu hỏi của tôi", "Đáp án của tôi", "Câu hỏi file v4", "Đáp án v4", "Tương đồng cùng STT", "Tình trạng câu hỏi", "Đối chiếu đáp án", "STT tôi khớp nhất", "Độ tương đồng khớp nhất"];
const data = report.parallel.map(x => [x.stt, x.ourQuestion, x.ourAnswer, x.v4Question, x.v4Answer, x.positionScore, x.questionStatus, x.answerStatus, x.bestOurNo, x.bestScore]);
detail.getRangeByIndexes(0, 0, 1, headers.length).values = [headers];
detail.getRangeByIndexes(1, 0, data.length, headers.length).values = data;
detail.getRange("A1:J431").format.font = { name: "Arial", size: 10 };
detail.getRange("A1:J1").format = { fill: navy, font: { name: "Arial", size: 10, bold: true, color: "#FFFFFF" }, horizontalAlignment: "center", verticalAlignment: "center", wrapText: true };
detail.getRange("A2:A431").format.horizontalAlignment = "center";
detail.getRange("C2:C431").format.horizontalAlignment = "center";
detail.getRange("E2:E431").format.horizontalAlignment = "center";
detail.getRange("F2:F431").format.numberFormat = "0.0%";
detail.getRange("J2:J431").format.numberFormat = "0.0%";
detail.getRange("B2:B431").format.wrapText = true;
detail.getRange("D2:D431").format.wrapText = true;
detail.getRange("G2:H431").format.wrapText = true;
detail.getRange("A1:J431").format.verticalAlignment = "top";
detail.getRange("A1:J431").format.borders = { preset: "inside", style: "thin", color: "#E4ECF1" };
detail.getRange("A:A").format.columnWidth = 8;
detail.getRange("B:B").format.columnWidth = 54;
detail.getRange("C:C").format.columnWidth = 15;
detail.getRange("D:D").format.columnWidth = 54;
detail.getRange("E:E").format.columnWidth = 13;
detail.getRange("F:F").format.columnWidth = 16;
detail.getRange("G:G").format.columnWidth = 24;
detail.getRange("H:H").format.columnWidth = 24;
detail.getRange("I:I").format.columnWidth = 15;
detail.getRange("J:J").format.columnWidth = 18;
detail.getRange("A1:J431").format.rowHeight = 32;
detail.getRange("A1:J1").format.rowHeight = 38;
detail.freezePanes.freezeRows(1);
detail.showGridLines = false;
detail.getRange("G2:G431").conditionalFormats.add("containsText", { text: "Trùng nguyên văn", format: { fill: green } });
detail.getRange("G2:G431").conditionalFormats.add("containsText", { text: "Gần trùng", format: { fill: amber } });
detail.getRange("G2:G431").conditionalFormats.add("containsText", { text: "Khác / không cùng câu", format: { fill: red } });
detail.getRange("H2:H431").conditionalFormats.add("containsText", { text: "Khác đáp án", format: { fill: red, font: { bold: true, color: "#9C0006" } } });
detail.tables.add("A1:J431", true, "FullQuestionComparison");

wb.recalculate();
const check = await wb.inspect({kind:"table", range:"Đối chiếu 430 câu!A1:J12", include:"values", tableMaxRows:12, tableMaxCols:10});
console.log(check.ndjson);
const errors = await wb.inspect({kind:"match", searchTerm:"#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A", options:{useRegex:true,maxResults:20}, summary:"formula error scan"});
console.log(errors.ndjson);
const preview = await wb.render({sheetName:"Tổng hợp", range:"A1:H14", scale:1.5, format:"png"});
await fs.writeFile(`${outputDir}/preview.png`, new Uint8Array(await preview.arrayBuffer()));
const output = await SpreadsheetFile.exportXlsx(wb);
await output.save(`${outputDir}/so_sanh_day_du_430_cau_va_dap_an.xlsx`);
