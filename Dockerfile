# Landing static site — served at https://didogi.ir/landing/
# Base images: Docker Hub by default. Build arg
# BASE_REGISTRY=nexus.mrzdev.ir/docker-mirror/library pulls them through the
# Nexus mirror (the build server must `docker login nexus.mrzdev.ir` first).
ARG BASE_REGISTRY=docker.io/library
FROM ${BASE_REGISTRY}/node:22-alpine AS builder
WORKDIR /app

# Dokploy often injects NODE_ENV=production; that would skip vite/tsc (devDependencies).
ENV NODE_ENV=development
ENV NODE_OPTIONS="--max-old-space-size=512"

ARG VITE_SITE_URL=https://didogi.ir/landing
ARG VITE_APP_URL=https://didogi.ir
ENV VITE_SITE_URL=$VITE_SITE_URL
ENV VITE_APP_URL=$VITE_APP_URL
ARG VITE_SUPPORT_EMAIL=
ARG VITE_SUPPORT_PHONE=
ARG VITE_SUPPORT_ADDRESS=
ARG VITE_ENAMAD_ID=
ARG VITE_ENAMAD_CODE=
ARG VITE_INSTAGRAM_URL=
ARG VITE_TELEGRAM_URL=
ARG VITE_BALE_URL=
ENV VITE_SUPPORT_EMAIL=$VITE_SUPPORT_EMAIL VITE_SUPPORT_PHONE=$VITE_SUPPORT_PHONE VITE_SUPPORT_ADDRESS=$VITE_SUPPORT_ADDRESS VITE_ENAMAD_ID=$VITE_ENAMAD_ID VITE_ENAMAD_CODE=$VITE_ENAMAD_CODE VITE_INSTAGRAM_URL=$VITE_INSTAGRAM_URL VITE_TELEGRAM_URL=$VITE_TELEGRAM_URL VITE_BALE_URL=$VITE_BALE_URL

COPY package.json package-lock.json ./
# npm: lockfile URLs by default. Build arg
# NPM_REGISTRY=https://nexus.mrzdev.ir/repository/npm-mirror/ plus Build Secrets
# NPM_USER/NPM_PASS switch to the Nexus mirror, 2 connections at a time (its CDN
# rate-limits bursts). The temp .npmrc is removed in the same layer.
ARG NPM_REGISTRY=
RUN --mount=type=secret,id=NPM_USER --mount=type=secret,id=NPM_PASS \
    if [ -n "$NPM_REGISTRY" ] && [ -s /run/secrets/NPM_USER ] && [ -s /run/secrets/NPM_PASS ]; then \
      AUTH=$(printf '%s:%s' "$(cat /run/secrets/NPM_USER)" "$(cat /run/secrets/NPM_PASS)" | base64 | tr -d '\n'); \
      printf 'registry=%s\n//%s:_auth=%s\n' "$NPM_REGISTRY" "${NPM_REGISTRY#https://}" "$AUTH" > /tmp/.npmrc; \
      export NPM_CONFIG_USERCONFIG=/tmp/.npmrc NPM_CONFIG_MAXSOCKETS=2; \
    fi; \
    npm ci --include=dev --ignore-scripts --no-audit --no-fund --fetch-retries=5 --fetch-retry-mintimeout=20000 --fetch-retry-maxtimeout=120000; \
    status=$?; rm -f /tmp/.npmrc; exit $status

COPY . .
# NODE_ENV=development above is only for installing devDependencies; the bundle
# must be built as production, or Vite emits React's debug build (jsxDEV).
RUN NODE_ENV=production npm run build

FROM ${BASE_REGISTRY}/nginx:alpine AS runner
RUN rm -rf /usr/share/nginx/html/*

# Keep /landing prefix so Traefik can forward PathPrefix(/landing) without stripping.
COPY --from=builder /app/dist /usr/share/nginx/html/landing
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget -q -O /dev/null http://127.0.0.1/landing/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
