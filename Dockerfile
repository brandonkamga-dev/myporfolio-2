# Build React
FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN pnpm install

COPY . .
RUN pnpm run build

# Serve with NGINX
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
