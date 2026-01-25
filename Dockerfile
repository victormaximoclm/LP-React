# Dockerfile para Next.js - Otimizado para produção
# Usando Debian slim ao invés de Alpine para melhor suporte ao sharp
FROM node:20-slim AS base

# Instalar dependências apenas quando necessário
FROM base AS deps
# Instalar dependências nativas necessárias para sharp
RUN apt-get update && apt-get install -y \
    libvips-dev \
    && rm -rf /var/lib/apt/lists/*
WORKDIR /app

# Copiar arquivos de dependências
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
    if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
    elif [ -f package-lock.json ]; then npm ci; \
    elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
    else echo "Lockfile not found." && exit 1; \
    fi

# Reconstruir o código fonte apenas quando necessário
FROM base AS builder
# Instalar dependências nativas para sharp no builder também
RUN apt-get update && apt-get install -y \
    libvips-dev \
    && rm -rf /var/lib/apt/lists/*
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Variáveis de ambiente para build
ENV NEXT_TELEMETRY_DISABLED=1

# Build da aplicação
RUN yarn build

# Imagem de produção usando modo standalone
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Instalar dependências nativas do sharp em runtime (sem dev dependencies)
RUN apt-get update && apt-get install -y \
    libvips \
    && rm -rf /var/lib/apt/lists/*

RUN groupadd --system --gid 1001 nodejs || true
RUN useradd --system --uid 1001 --gid nodejs nextjs || true

# Copiar arquivos do build standalone
# A estrutura do standalone já inclui tudo necessário
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]

