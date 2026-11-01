import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../../../../database/generated/client/client.js';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleDestroy {
  constructor() {
    super({ adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL! }) });
  }
  async onModuleDestroy(): Promise<void> { await this.$disconnect(); }
}
