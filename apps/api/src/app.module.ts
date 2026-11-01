import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { validateEnvironment } from './config/environment.js';
import { HealthModule } from './health/health.module.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { QuestionsModule } from './questions/questions.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, validate: validateEnvironment }),
    HealthModule,
    PrismaModule,
    QuestionsModule,
  ],
})
export class AppModule {}
