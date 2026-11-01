# Audit repository (2026-11-01)

## Hiện trạng

- Website tĩnh HTML/CSS/JavaScript, không có package manager hay build pipeline.
- Ba luồng chính: luyện 390 câu, thi thử ngẫu nhiên 70 câu và tra cứu.
- Tiến độ luyện được lưu trong `localStorage`; bài thi thử không lưu lịch sử.
- `questions.js` có 390 record, tất cả record có 4 phương án và đáp án A-D hợp lệ. Có 2 nội dung câu hỏi trùng theo phép so sánh normalize cơ bản; cần review thủ công trước khi deduplicate.
- Có nhiều bản sao/backup của ngân hàng câu hỏi, chưa có source of truth và version metadata.
- Git sạch khi audit, branch `main`, remote GitHub đã cấu hình.

## SQLite hiện có

`data/academy.sqlite` không chứa ngân hàng câu hỏi. Schema thử nghiệm gồm:

| Bảng | Số dòng | Ghi chú |
| --- | ---: | --- |
| `users` | 1 | Chứa password trong cột `password`; cần xem là dữ liệu nhạy cảm |
| `sessions` | 1 | Token lưu trực tiếp |
| `products` | 3 | Mô hình sản phẩm thử nghiệm |
| `orders` | 1 | Giao dịch thử nghiệm |
| `attempts` | 0 | Câu hỏi/câu trả lời lưu dạng TEXT |

Không migrate các bảng này tự động. Cần xác nhận giá trị nghiệp vụ và xử lý credential/token an toàn trước khi import.

## Vấn đề và rủi ro

1. Số `390` và `70` bị hard-code trong HTML/JavaScript và thông báo kết quả.
2. Đáp án đúng được gửi toàn bộ xuống browser, không thể bảo vệ tính toàn vẹn bài thi.
3. `innerHTML` nhận nội dung câu hỏi; hiện dữ liệu local nhưng sẽ thành XSS risk khi có admin/import.
4. Random test dùng `Math.random`, không có seed và không reproducible.
5. Không có authentication, authorization, validation, API, test, migration hay CI.
6. File WAL/SHM, debug log và SQLite có thể chứa dữ liệu nhạy cảm đang được track trong Git.
7. Analytics/AdSense lặp lại trên từng trang và chưa có cơ chế bật/tắt theo môi trường/consent.

## Kiến trúc đề xuất

- Monorepo pnpm: `apps/web` (Next.js), `apps/api` (NestJS), `database` (Prisma/PostgreSQL), sau đó thêm package contracts/UI khi có contract thực.
- Legacy ở root tiếp tục hoạt động đến khi feature parity được xác minh.
- API `/api/v1`; backend sở hữu scoring, authorization và database access.
- PostgreSQL là production source of truth; Prisma được chọn vì schema/migration type-safe và phù hợp monorepo TypeScript.

## API contract cấp cao

- Public: question banks, categories, search, practice session, exam generation/submission.
- User: profile, attempts, progress, bookmarks, statistics.
- Admin: questions, versions/options, import/export, settings, announcements, users/roles.
- Mọi collection có pagination/filter/sort nhất quán; lỗi có stable code và request ID.

## Milestone và acceptance criteria

1. **Foundation:** pnpm workspace, Next/Nest build, Prisma schema validate, Compose validate, health endpoint, env validation.
2. **Data migration:** importer dry-run/idempotent, 390 record được đối chiếu, duplicate báo cáo chứ không tự xóa.
3. **Feature parity:** ba luồng legacy chạy end-to-end trên API, progress khách vẫn tương thích localStorage.
4. **User/Admin:** auth an toàn, RBAC, history/progress, CRUD/version/import/settings và audit log.
5. **Hardening:** security/performance/accessibility review, test pyramid, backup/restore, production deployment docs.

## File legacy

Không xóa hay di chuyển trong milestone foundation. Các file backup câu hỏi chỉ được archive sau khi importer, checksum và rollback được xác minh.
