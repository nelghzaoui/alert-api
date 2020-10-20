import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    methods: 'GET,PUT,PATCH,POST,DELETE',
    optionsSuccessStatus: 204,
  });
  await app.listen(3000);
}
bootstrap();
