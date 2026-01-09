import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Envs } from 'Envs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(Envs.port);
}

bootstrap()
  .then(() => console.log('✅ Logger service started successfully'))
  .catch(() => console.log('❌ Logger service failed'));
