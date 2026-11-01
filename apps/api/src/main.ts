import { ValidationPipe, VersioningType } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import { AppModule } from './app.module.js';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  const origins = config.getOrThrow<string>('CORS_ORIGINS').split(',').map((item) => item.trim());

  app.use(helmet());
  app.enableCors({ origin: origins, credentials: true });
  app.enableVersioning({ type: VersioningType.URI, defaultVersion: '1' });
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }));

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Quiz đấu thầu API')
    .setDescription('Versioned API for quiz-dauthau-bancn')
    .setVersion('1.0')
    .build();
  SwaggerModule.setup('api/docs', app, SwaggerModule.createDocument(app, swaggerConfig));

  await app.listen(config.getOrThrow<number>('API_PORT'));
}

void bootstrap();
