import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as admin from 'firebase-admin'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'http://localhost:8080'
  });

  await app.listen(3000);
}
bootstrap();
