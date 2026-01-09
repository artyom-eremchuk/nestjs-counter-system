import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerController } from './logger/logger.controller';

@Module({
  imports: [],
  controllers: [AppController, LoggerController],
  providers: [AppService],
})
export class AppModule {}
