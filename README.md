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
