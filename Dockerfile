# Landing static site — served at https://didogi.com/landing/
FROM node:22-alpine AS builder
WORKDIR /app

ARG VITE_SITE_URL=https://didogi.com/landing
ARG VITE_APP_URL=https://didogi.com
ENV VITE_SITE_URL=$VITE_SITE_URL
ENV VITE_APP_URL=$VITE_APP_URL

COPY package.json package-lock.json ./
RUN npm ci --ignore-scripts
COPY . .
RUN npm run build

FROM nginx:alpine AS runner
RUN rm -rf /usr/share/nginx/html/*
# Keep /landing prefix: assets live at /landing/* when proxied with path
COPY --from=builder /app/dist /usr/share/nginx/html/landing
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/landing/ || exit 1
CMD ["nginx", "-g", "daemon off;"]
