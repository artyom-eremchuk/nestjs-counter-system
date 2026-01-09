# ========= DEVELOPMENT STAGE =========
FROM node:20-alpine AS dev

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

# ========= BUILDER STAGE =========
FROM node:20-alpine AS builder

WORKDIR /app
COPY --from=dev /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ========= PRODUCTION STAGE =========
FROM node:20-alpine AS production

WORKDIR /app
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodeuser -u 1001 -G nodejs

COPY --from=builder --chown=nodeuser:nodejs /app/dist ./dist
COPY --from=builder --chown=nodeuser:nodejs /app/node_modules ./node_modules
COPY --chown=nodeuser:nodejs package*.json ./
COPY --chown=nodeuser:nodejs .env ./

ENV NODE_ENV=production
EXPOSE 3000

USER nodeuser
CMD ["node", "dist/src/main.js"]