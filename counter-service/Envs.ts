export const Envs = {
  port: parseInt(process.env.PORT || '3000'),
  loggerUrl: process.env.LOGGER_URL || 'http://localhost:3001',
  intervalMs: parseInt(process.env.INTERVAL_MS || '10000'),
} as const;
