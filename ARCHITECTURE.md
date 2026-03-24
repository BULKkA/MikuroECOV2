# Архитектура проекта MikuroECOV2 (Vue.js шаблон)

## 1. Цель документа

Описать архитектуру, необходимую для превращения имеющегося тестового шаблона в рабочий продукт, который поддерживает:
- регистрация/авторизация пользователя с CAPTCHA
- профиль пользователя
- лента постов блога
- комментарии и реакции к постам
- посты с фото/видео/текстом/Markdown
- роль-хранение: админ, редактор, пользователь
- посты создают только админ/редактор
- посты редактируют/удаляют администратор и автор
- промышленная безопасность (JWT, HTTPS, защита от CSRF, XSS и т.д.)

## 2. Технологический стек

### 2.1. Фронтенд
- Vue 3 + Composition API
- Vue Router (маршрутизация)
- Pinia (глобальные состояния: аутентификация, профиль, лента, посты)
- Vite (сборка)
- Axios / Fetch API (HTTP)
- i18n (возможная локализация)
- Формы: VeeValidate / zod / composables
- CAPTCHA: Google reCAPTCHA v2/v3 или hCaptcha

### 2.2. Бэкенд (контракт API)
- REST или GraphQL
- Аутентификация: JWT access+refresh, хранение токенов: secure httpOnly cookie
- API endpointы (пример):
  - POST /api/auth/register
  - POST /api/auth/login
  - POST /api/auth/refresh
  - POST /api/auth/logout
  - GET /api/users/:id
  - PUT /api/users/:id
  - GET /api/posts
  - GET /api/posts/:id
  - POST /api/posts
  - PUT /api/posts/:id
  - DELETE /api/posts/:id
  - POST /api/posts/:id/comments
  - GET /api/posts/:id/comments
  - POST /api/posts/:id/reactions
  - GET /api/posts/:id/reactions
  - POST /api/captcha/verify
- Хранение файлов: S3 / CDN / файл-сервер.

## 3. Схема ролей и прав

### 3.1. Роли
- `guest` (не аутентифицирован)
- `user` (обычный пользователь)
- `editor` (может создавать посты)
- `admin` (полный контроль)

### 3.2. Права
- создание поста -> `editor`, `admin`
- редактирование/удаление поста -> `admin`, автор
- комментирование/реакция -> `user`, `editor`, `admin`
- управление пользователями -> `admin`

## 4. Маршруты и UI

### 4.1. Страницы
- `/` - главная (лента постов)
- `/login` - вход с капчей
- `/register` - регистрация с капчей
- `/profile` - собственный профиль (только авторизованный)
- `/users/:id` - публичный профиль
- `/posts/:id` - просмотр поста + комментарии + реакции
- `/posts/new` - создавание (только editor/admin)
- `/posts/:id/edit` - редактирование (admin/author)
- `/admin` - панель администратора

### 4.2. Компоненты
- `PostFeed` (`PostCard`, `PostList`)
- `PostView` (детали + медиа + markdown)
- `PostEditor` (редактор, загрузка файлов, markdown preview)
- `CommentList`, `CommentItem`, `CommentForm`
- `ReactionButtons` (лайк/дизлайк/харт и т.п.)
- `UserAuthForm` (login/register с captcha)
- `UserProfile` (редактирование профиля)
- `RoleGuard` / HOC 

## 5. State и поток данных

- Pinia store `auth`: `user`, `token`, `roles`, `isLogged`, `captchaToken`.
- Pinia store `posts`: список постов, пост подгрузка, статус загрузки.
- Pinia store `comments`: для каждого поста.
- Мидлвары axios:
  - авторизация: вставка `Authorization: Bearer <token>`
  - refresh token на 401
  - глобальная обработка ошибок (toast/alert)

## 6. Безопасность (фронтенд + бэкенд)

- HTTPS — обязательное требование на проде.
- CAPTCHA на регистраци и логине.
- Пароли не хранятся на клиенте.
- XSS защита: вывод markdown с безопасным sanitizer (DOMPurify).
- CSRF: если cookie-based, применить CSRF токен.
- CORS: корректная политика.
- Rate limiting: в auth endpoints.

## 7. Медиа-контент в постах

### 7.1. Формат поста
- `type: text | markdown | media`.
- `content: string` (или `markdown`), `media: []` (фото/видео)
- Валидация: разрешенные mime, размер.

### 7.2. Рендер
- Markdown -> HTML (проверенный + sanitizer).
- Медиа: слайдер / галерея + плеер для видео.

## 8. Прототип существующей структуры

`src/views` и `src/components` в шаблоне Vue используются так:
- `HomeView.vue`, `AboutView.vue` (заменяются реальными экранами)
- `src/router/index.js` (добавить маршруты и guards)
- `src/stores` (Pinia store) добавлять новые файлы: `auth.js`, `posts.js`, `comments.js`

## 9. План внедрения (шаги)

1. Настроить Pinia + router + axios.
2. Разработать `auth` flow (регистрация/логин/captcha).  
3. Сделать плагины/миксин `roleGuard` и `privateRoute`.
4. Создать `PostFeed` + `Post` API.
5. Реализовать CRUD по ролям.
6. Добавить комментарии + реакции.
7. Тесты (Vitest/unit + e2e Playwright).
8. CI: lint/format/test.

## 10. Тестирование

- Unit tests для store и компонентов.
- e2e tests: регистрация + вход, создание/редактирование поста, комментарии.
- Интеграционные тесты: права доступа, RBAC.

---

> Документ готов для переводов и расширения на DevOps/Backend. На версии с реальным API он остаётся главным ориентиром для архитектуры.
