# Quiz đấu thầu

Repository đang được chuyển đổi từ website tĩnh sang hệ thống full-stack theo từng milestone. Website legacy ở thư mục gốc vẫn được giữ nguyên trong thời gian đạt feature parity.

## Cấu trúc

- `apps/web`: Next.js frontend.
- `apps/api`: NestJS REST API, base path `/api/v1`.
- `database`: Prisma schema cho PostgreSQL.
- `docs/audit.md`: audit legacy, rủi ro và kế hoạch migration.
- Các file HTML/CSS/JS ở root: website legacy và regression baseline.

## Chạy local

Yêu cầu Node.js 24+, pnpm 11+ và Docker.

1. Sao chép `.env.example` thành `.env` và thay secret khi dùng ngoài local.
2. Chạy `pnpm install`.
3. Chạy `docker compose up -d postgres`.
4. Chạy `pnpm db:generate` và `pnpm db:migrate`.
5. Chạy `pnpm dev`.

Frontend mặc định ở `http://localhost:3000`; API ở `http://localhost:3001/api/v1`; Swagger ở `http://localhost:3001/api/docs`.

## Tự khởi động Windows và Cloudflare Tunnel

Để Docker/Postgres, API, web port 3000 và tunnel tự chạy sau khi đăng nhập Windows:

1. Cài `cloudflared` và tạo named tunnel cho domain `onthidauthau.xyz`.
2. Sao chép `ops/cloudflared/config.yml.example` thành `%USERPROFILE%\.cloudflared\config.yml`, thay UUID/user và chạy `cloudflared tunnel route dns onthidauthau onthidauthau.xyz` (thêm `www` nếu cần).
3. Mở PowerShell tại thư mục dự án và chạy:

   `powershell -ExecutionPolicy Bypass -File .\ops\windows\register-stack-task.ps1`

Task `QuizDauthau-Stack` sẽ chờ Docker Desktop, chạy migration, build/start API + web và khởi động tunnel. Log nằm trong `C:\WebServer\startup.log`, `api.log`, `web.log` và `cloudflared.log`.

## Kiểm tra

```text
pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm db:validate
docker compose config
```

Chưa chạy importer hoặc xóa các file dữ liệu cũ. Xem [audit và migration plan](docs/audit.md) trước khi thay đổi dữ liệu.
