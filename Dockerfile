# Landing static site — served at https://didogi.ir/landing/
FROM node:22-alpine AS builder
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
RUN npm ci --include=dev --ignore-scripts --no-audit --no-fund

COPY . .
RUN npm run build

FROM nginx:alpine AS runner
RUN rm -rf /usr/share/nginx/html/* \
  && apk add --no-cache curl

# Keep /landing prefix so Traefik can forward PathPrefix(/landing) without stripping.
COPY --from=builder /app/dist /usr/share/nginx/html/landing
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD curl -fsS http://127.0.0.1/landing/ >/dev/null || exit 1

CMD ["nginx", "-g", "daemon off;"]
