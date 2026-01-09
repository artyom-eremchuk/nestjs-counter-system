import axios, { AxiosError } from 'axios';
import { Envs } from 'Envs';
import { Injectable } from '@nestjs/common';
import { Interval } from '@nestjs/schedule';

@Injectable()
export class CounterService {
  private count: number = 0;

  @Interval(Envs.intervalMs)
  async sendCounter() {
    this.count++;
    const time = new Date().toLocaleTimeString('ru-RU', {
      timeZone: 'Europe/Moscow',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });

    try {
      await axios.post(`${Envs.loggerUrl}/count`, { count: this.count });
      console.log(`✅ [${time}] Count ${this.count} sent successfully`);
    } catch (error) {
      const axiosError = error as AxiosError;

      console.log(
        axiosError.code === 'ECONNREFUSED'
          ? `🔥 Logger service not available at ${Envs.loggerUrl}`
          : `❌ Failed to send count ${this.count}: ${axiosError.message}`,
      );
    }
  }
}
