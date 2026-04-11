# Docker Deployment для Ubuntu 24.04

Этот проект содержит Docker конфигурацию для развертывания Vue 3 приложения на Ubuntu 24.04.

## Структура файлов

- **Dockerfile** - Multi-stage сборка (Node.js + Alpine Linux + Nginx)
- **docker-compose.yml** - Определение сервиса для Docker Compose
- **nginx.conf** - Конфигурация Nginx для SPA
- **.dockerignore** - Исключение ненужных файлов при сборке

## Требования

- Docker >= 20.10
- Docker Compose >= 2.0
- Ubuntu 24.04 (или любой Linux с Docker)

## Быстрый старт

### 1. Установка Docker на Ubuntu 24.04

```bash
# Обновляем пакеты
sudo apt update
sudo apt upgrade -y

# Устанавливаем Docker
sudo apt install -y docker.io docker-compose

# Добавляем текущего пользователя в группу docker (опционально)
sudo usermod -aG docker $USER

# Проверяем версию
docker --version
docker-compose --version
```

### 2. Сборка и запуск приложения

#### Вариант A: С Docker Compose (рекомендуется)

```bash
# Переходим в директорию проекта
cd /path/to/MKR_Frontend

# Собираем и запускаем контейнер
docker-compose up -d --build

# Проверяем статус
docker-compose ps

# Просмотр логов
docker-compose logs -f

# Остановка
docker-compose down
```

#### Вариант B: Прямой Docker

```bash
# Сборка образа
docker build -t mkr-frontend:latest .

# Запуск контейнера
docker run -d \
  --name mkr-frontend \
  -p 80:80 \
  mkr-frontend:latest

# Проверяем
docker ps
docker logs mkr-frontend

# Остановка
docker stop mkr-frontend
docker rm mkr-frontend
```

## Окружение

Приложение доступно по адресу:
- **HTTP**: http://localhost или http://your-server-ip

## Настройка для HTTPS (Let's Encrypt)

### 1. Установка Certbot

```bash
sudo apt install -y certbot python3-certbot-nginx
```

### 2. Получение сертификата

```bash
sudo certbot certonly --standalone -d your-domain.com
```

### 3. Обновление docker-compose.yml

Раскомментируйте или добавьте volumes для сертификатов:

```yaml
volumes:
  - /etc/letsencrypt/live/your-domain.com:/etc/nginx/ssl:ro
```

### 4. Обновление nginx.conf

Раскомментируйте HTTPS блок и замените `your-domain.com` на реальный домен.

### 5. Автоматическое обновление сертификата

```bash
sudo systemctl enable certbot.timer
sudo systemctl start certbot.timer
```

## Управление контейнером

```bash
# Просмотр запущенных контейнеров
docker ps

# Просмотр всех контейнеров
docker ps -a

# Просмотр логов
docker logs mkr-frontend

# Просмотр в реальном времени
docker logs -f mkr-frontend

# Переперестройка после обновления кода
docker-compose down
docker-compose up -d --build

# Очистка неиспользуемых образов
docker image prune -a

# Очистка неиспользуемых volumes
docker volume prune
```

## Оптимизация для production

### 1. Переменные окружения

Создайте `.env` файл:

```env
PORT=80
NODE_ENV=production
```

### 2. Масштабирование

Если нужно запустить несколько экземпляров:

```yaml
version: '3.9'

services:
  frontend:
    deploy:
      replicas: 3
    # ...
```

### 3. Health check

```yaml
services:
  frontend:
    healthcheck:
      test: ["CMD", "wget", "--quiet", "--tries=1", "--spider", "http://localhost/"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s
```

### 4. Resource limits

```yaml
services:
  frontend:
    deploy:
      resources:
        limits:
          cpus: '1'
          memory: 512M
        reservations:
          cpus: '0.5'
          memory: 256M
```

## Troubleshooting

### Порт 80 уже занят

```bash
# Найдите процесс, занимающий порт
sudo lsof -i :80

# Или используйте другой порт в docker-compose.yml
ports:
  - "8080:80"
```

### Ошибка при сборке

```bash
# Очистите Docker cache
docker system prune -a

# Пересоберите образ
docker-compose build --no-cache
```

### Проблемы с правами доступа

```bash
# Проверьте права на файлы
ls -la

# Если нужно, измените права
sudo chown -R $USER:$USER .
```

## Мониторинг

### Использование ресурсов

```bash
docker stats mkr-frontend
```

### Проверка логов

```bash
# Последние 100 строк
docker logs --tail 100 mkr-frontend

# С временными метками
docker logs -t mkr-frontend

# Только ошибки
docker logs mkr-frontend 2>&1 | grep -i error
```

## Backup и восстановление

### Backup образа

```bash
docker save mkr-frontend:latest | gzip > mkr-frontend-backup.tar.gz
```

### Восстановление образа

```bash
gunzip -c mkr-frontend-backup.tar.gz | docker load
```

## Production deployment

For production use with reverse proxy (e.g., Traefik, nginx-proxy):

```yaml
version: '3.9'

services:
  frontend:
    build: .
    expose:
      - "80"
    networks:
      - traefik-network
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.mkr-frontend.rule=Host(`your-domain.com`)"
      - "traefik.http.services.mkr-frontend.loadbalancer.server.port=80"

networks:
  traefik-network:
    external: true
```

## Дополнительная информация

Для более подробной информации о Docker и Docker Compose, посетите:
- https://docs.docker.com/
- https://docs.docker.com/compose/

---

**Автор**: MKR Social Project  
**Версия**: 1.0  
**Дата**: 2026-04-11
