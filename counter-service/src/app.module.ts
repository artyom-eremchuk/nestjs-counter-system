import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CounterModule } from './counter/counter.module';

@Module({
  imports: [ScheduleModule.forRoot(), CounterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
