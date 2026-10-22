# Đấu Thầu Academy

Cổng học tập tiếng Việt với Node.js 24+, SQLite và giao diện responsive. Không cần cài thư viện npm.

## Chạy nhanh trên Windows

Nhấp đúp `CHAY-WEBSITE.cmd`. File này tự chuyển vào thư mục dự án và tìm Node.js 24+ trên PATH hoặc runtime Codex có sẵn. Mở http://localhost:3000 và giữ cửa sổ máy chủ mở.

## Chạy local

Tại thư mục dự án:

```powershell
node server/server.js
```

Mở http://localhost:3000. Không mở `index.html` bằng file:// hoặc chạy riêng bằng GitHub Pages: các tính năng tài khoản cần máy chủ Node.js.

## Deploy bằng Docker

Mô hình production gồm hai container: Caddy nhận cổng 80/443 và tự cấp HTTPS, ứng dụng Node.js chỉ chạy trong mạng Docker ở cổng 3000. SQLite được lưu trong named volume `academy_data`, không nằm trong image.

1. Trỏ bản ghi DNS `A` của tên miền về IP máy chủ. Không để đồng thời IP GitHub Pages và IP máy chủ trên cùng hostname.
2. Mở TCP 80/443 trên firewall và security group; UDP 443 là tùy chọn cho HTTP/3.
3. Tạo file cấu hình môi trường:

```bash
cp .env.example .env
```

Sửa `DOMAIN` và `APP_ORIGIN` trong `.env` nếu dùng hostname khác, ví dụ `app.onthidauthau.xyz`.

4. Build và chạy:

```bash
docker compose up -d --build
docker compose ps
docker compose logs -f app caddy
```

Kiểm tra nội bộ ứng dụng bằng `docker compose exec app node -e "fetch('http://127.0.0.1:3000/api/health').then(async r=>console.log(r.status,await r.text()))"`, sau đó mở `https://<DOMAIN>`.

Để tạo quản trị viên, đặt biến môi trường trong phiên terminal rồi truyền vào container:

```bash
export ADMIN_EMAIL='email-quan-tri@example.com'
read -rsp 'Mật khẩu quản trị: ' ADMIN_PASSWORD && echo
export ADMIN_PASSWORD
docker compose exec -e ADMIN_EMAIL -e ADMIN_PASSWORD app node server/admin.js
unset ADMIN_PASSWORD
```

Không đưa `.env`, mật khẩu hoặc thư mục `data/` vào Git. Caddy lưu chứng chỉ trong volume `caddy_data`; cần giữ cả `academy_data` và `caddy_data` khi nâng cấp container.

## Tạo tài khoản quản trị

Trong PowerShell, đặt email thật và mật khẩu riêng (ít nhất 12 ký tự), rồi chạy:

```powershell
$env:ADMIN_EMAIL = 'email-quan-tri-cua-ban@example.com'
$securePassword = Read-Host 'Mật khẩu quản trị' -AsSecureString
$env:ADMIN_PASSWORD = [System.Net.NetworkCredential]::new('', $securePassword).Password
node server/admin.js
Remove-Item Env:ADMIN_PASSWORD
```

Đăng nhập và chọn **Quản trị website**. Không có tài khoản hoặc mật khẩu mặc định. Chạy lại lệnh cho cùng email sẽ đặt lại mật khẩu và cấp vai trò quản trị; chỉ người vận hành máy chủ được dùng lệnh này.

## Chức năng

- Đăng ký, đăng nhập, đăng xuất; mật khẩu băm scrypt, cookie HttpOnly, phiên 7 ngày.
- Tổng quan sử dụng dữ liệu thật, kho đề có tìm kiếm, bộ đề đã mua, lịch sử kết quả.
- Tạo đơn hàng, chống đặt trùng, giá lấy từ máy chủ; quản trị xác nhận đã nhận tiền rồi mở quyền làm bài.
- Đề ngẫu nhiên, chấm điểm trên máy chủ, xem đáp án sau khi nộp, lưu kết quả SQLite.
- Quản trị danh mục: tạo/sửa/ẩn bộ đề; xem học viên, duyệt/hủy đơn, thống kê doanh thu đã xác nhận.
- Giữ 390 câu hỏi gốc và các trang ôn tập, thi thử, tra cứu miễn phí; bổ sung giao diện đồng bộ.

## Kiểm thử

```powershell
node --test server/server.test.js
```

Kiểm thử dùng thư mục dữ liệu tạm riêng, không sửa dữ liệu thực. Bao phủ đăng ký/trùng email, đăng nhập, cookie, phân quyền, chặn yêu cầu khác origin, đơn hàng/giá, kích hoạt, cách ly dữ liệu học viên, chấm bài/nộp trùng, lịch sử khi sửa số câu và ẩn bộ đề.

## Vận hành và giới hạn hiện tại

- `data/academy.sqlite` là dữ liệu bền vững; thư mục `data/` đã được gitignore. Sao lưu toàn bộ SQLite bằng quy trình SQLite backup hoặc dừng máy chủ trước khi sao chép; không chỉ chép file chính trong lúc WAL đang ghi.
- Biến môi trường: `PORT` (3000), `HOST` (127.0.0.1), `DATA_DIR`, `APP_ORIGIN` (origin công khai chính xác), `NODE_ENV=production` (cookie Secure).
- Triển khai cần máy chủ hỗ trợ Node.js 24 và ổ đĩa bền vững, reverse proxy HTTPS; đặt `APP_ORIGIN` theo tên miền. Chưa triển khai lên tên miền hiện tại.
- Giá 49.000 / 99.000 / 149.000 VNĐ là dữ liệu mẫu, phải được chủ website duyệt trước khi mở bán. Các gói dùng chung ngân hàng gốc, khác số câu mỗi lượt; chưa có nội dung độc quyền hoặc mã kích hoạt bán lẻ.
- Đơn hàng được xử lý thủ công. Không tự dùng QR donate làm QR thanh toán. Chưa có cổng thanh toán/webhook, hóa đơn, hoàn tiền hay email giao dịch.
- Chưa có xác minh email hoặc quên mật khẩu tự động; cần dịch vụ gửi email và luồng reset trước khi mở rộng vận hành công khai.
- Bài đang làm giữ trong bộ nhớ trang, có cảnh báo khi rời trang; tải lại trình duyệt chưa khôi phục bài dở. Bài đã nộp lưu ở máy chủ.
- Hệ thống hiện tạo đề từ `questions.js`. Chưa có trình biên soạn câu hỏi hoặc nhập nội dung riêng cho từng gói. Không khẳng định nội dung pháp lý gốc còn cập nhật tại thời điểm triển khai; cần người phụ trách chuyên môn rà soát.
- Các trang ôn tập gốc vẫn dùng localStorage và giữ cấu hình Analytics/AdSense sẵn có. Trang cổng học tập mới không thêm quảng cáo.
