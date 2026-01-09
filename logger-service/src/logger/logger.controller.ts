import { Controller, Post, Body } from '@nestjs/common';

@Controller()
export class LoggerController {
  @Post('count')
  logCount(@Body() data: { count: number }) {
    const now = new Date();
    const time = now.toLocaleTimeString('ru-RU', {
      timeZone: 'Europe/Moscow',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });

    console.log(`✅ [${time}] Count: ${data.count} received successfully`);

    return {
      status: 'ok',
      receivedCount: data.count,
      timestamp: now.toISOString(),
    };
  }
}
