# syntax=docker/dockerfile:1

ARG NODE_VERSION=22.15.0

FROM node:${NODE_VERSION}-alpine

RUN addgroup -S appgroup && adduser -S -G appgroup appuser

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN chown -R appuser:appgroup /app
USER appuser

EXPOSE 3013

CMD npm run dev


# ARG NODE_VERSION=22.15.0
# FROM node:${NODE_VERSION}-alpine
# ENV NODE_ENV production
# WORKDIR /usr/src/app
# RUN --mount=type=bind,source=package.json,target=package.json \
#     --mount=type=bind,source=package-lock.json,target=package-lock.json \
#     --mount=type=cache,target=/root/.npm \
#     npm ci --omit=dev
# USER node
# COPY . .
# EXPOSE 3013
# CMD npm run dev


# syntax=docker.io/docker/dockerfile:1

# FROM node:18-alpine AS base
# FROM base AS deps
# RUN apk add --no-cache libc6-compat
# WORKDIR /app
# COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* .npmrc* ./
# RUN \
#   if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
#   elif [ -f package-lock.json ]; then npm ci; \
#   elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
#   else echo "Lockfile not found." && exit 1; \
#   fi
# FROM base AS builder
# WORKDIR /app
# COPY --from=deps /app/node_modules ./node_modules
# COPY . .
# RUN \
#   if [ -f yarn.lock ]; then yarn run build; \
#   elif [ -f package-lock.json ]; then npm run build; \
#   elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run build; \
#   else echo "Lockfile not found." && exit 1; \
#   fi
# FROM base AS runner
# WORKDIR /app
# ENV NODE_ENV=production
# RUN addgroup --system --gid 1001 nodejs
# RUN adduser --system --uid 1001 nextjs
# COPY --from=builder /app/public ./public
# COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
# COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
# USER nextjs
# EXPOSE 3013
# ENV PORT=3013
# ENV HOSTNAME="0.0.0.0"
# CMD ["node", "server.js"]