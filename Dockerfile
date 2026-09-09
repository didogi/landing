# Landing static site — served at https://didogi.com/landing/
FROM node:22-alpine AS builder
WORKDIR /app

# Dokploy often injects NODE_ENV=production; that would skip vite/tsc (devDependencies).
ENV NODE_ENV=development
ENV NODE_OPTIONS="--max-old-space-size=512"

ARG VITE_SITE_URL=https://didogi.com/landing
ARG VITE_APP_URL=https://didogi.com
ENV VITE_SITE_URL=$VITE_SITE_URL
ENV VITE_APP_URL=$VITE_APP_URL

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
