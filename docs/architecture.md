# Kiến trúc mục tiêu

```text
Browser -> Next.js web -> NestJS /api/v1 -> Prisma -> PostgreSQL
                            |               |
                            + OpenAPI       + migrations/importers
```

Frontend không truy cập database. NestJS controller chỉ phụ trách transport; service sở hữu business rules; repository/Prisma sở hữu persistence. Các contract public được version và không làm lộ database entity.

Hệ thống legacy ở repository root là baseline regression trong giai đoạn migration. Chỉ chuyển traffic khi có feature parity và kế hoạch rollback.
