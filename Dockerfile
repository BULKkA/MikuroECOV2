# Stage 1: Build
FROM node:22-alpine AS builder

WORKDIR /app

# Копируем package.json и package-lock.json (если есть)
COPY package*.json ./

# Удаляем package-lock.json для чистой установки
RUN rm -f package-lock.json

# Устанавливаем зависимости
RUN npm install

# Копируем исходный код
COPY . .

# Собираем приложение
RUN npm run build

# Stage 2: Production
FROM node:22-alpine

WORKDIR /app

# Устанавливаем nginx
RUN apk add --no-cache nginx

# Копируем собранное приложение из builder stage
COPY --from=builder /app/dist ./dist

# Копируем Nginx конфигурацию
COPY nginx.conf /etc/nginx/http.d/default.conf

# Пробуем порт 80
EXPOSE 80

# Команда для запуска
CMD ["nginx", "-g", "daemon off;"]
