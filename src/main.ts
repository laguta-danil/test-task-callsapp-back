import { NestFactory } from '@nestjs/core';
import * as process from 'process';
import { AppModule } from './modules/app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: true,
    credentials: true,
  });

  await app.listen(process.env.PORT);
}
bootstrap();
