# Этап 1: Инфраструктура и Базовая Настройка - Сводка

На этом этапе были выполнены следующие шаги по настройке базовой инфраструктуры фронтенда:

## 1. Настройка Routing (Vue Router)
- **`e:\mikuro\MKR_Social\MKR_Frontend\src\App.vue`**: Удалена логика ручного переключения вкладок (`activeTab`, `currentComponent`). Компонент `<component :is="currentComponent" />` заменен на `<RouterView />` для использования Vue Router.
- **`e:\mikuro\MKR_Social\MKR_Frontend\src\router\index.js`**: Настроены основные маршруты для приложения: `/` (Home), `/about`, `/login`, `/register`, `/profile`, `/posts/:id`, `/admin`, а также маршрут для 404 страницы.
- **`e:\mikuro\MKR_Social\MKR_Frontend\src\views/`**: Созданы новые файлы-заглушки для всех основных страниц: `HomeView.vue`, `LoginView.vue`, `RegisterView.vue`, `ProfileView.vue`, `PostDetailView.vue`, `AdminView.vue`, `NotFoundView.vue`.
- **`e:\mikuro\MKR_Social\MKR_Frontend\src\components\Common\About.vue`**: Перемещен в `e:\mikuro\MKR_Social\MKR_Frontend\src\views\AboutView.vue` и теперь используется как полноценная страница.
- **`e:\mikuro\MKR_Social\MKR_Frontend\src\views\HomeView.vue`**: Содержимое `Roll.vue` было скопировано в `HomeView.vue` для начальной демонстрации ленты постов.
- **`e:\mikuro\MKR_Social\MKR_Frontend\src\main.js`**: Обновлен для инициализации и использования Vue Router и Pinia.

## 2. Глобальное состояние (Pinia)
- **`e:\mikuro\MKR_Social\MKR_Frontend\src\stores\auth.js`**: Создан Pinia-стор `auth` для управления состоянием аутентификации пользователя (user, roles, isLoggedIn, accessToken, refreshToken, captchaToken, loading, error). Включены placeholder-действия для `login`, `register`, `logout`, `setCaptchaToken`, `clearAuth`.
- **`e:\mikuro\MKR_Social\MKR_Frontend\src\stores\posts.js`**: Создан Pinia-стор `posts` для управления состоянием постов (список постов, текущий пост, пагинация, loading, error). Включены placeholder-действия для `fetchPosts`, `fetchPostById`, `addPost`, `updatePost`, `deletePost`, `clearPosts`.

## 3. HTTP Клиент (Axios)
- **`e:\mikuro\MKR_Social\MKR_Frontend\src\services\api.js`**: Настроен инстанс Axios с базовым URL (`/api` или из `VITE_API_BASE_URL`) и `withCredentials: true` для работы с `httpOnly` куками.
- Добавлен интерцептор запросов для автоматического добавления заголовка `Authorization` (если `accessToken` доступен).
- Добавлен интерцептор ответов для обработки ошибок `401 Unauthorized` с логикой попытки обновления токена через `/api/auth/refresh` и повторной отправки исходного запроса. В случае неудачи обновления токен очищается.

Эти изменения закладывают основу для дальнейшей разработки, обеспечивая централизованное управление маршрутизацией, состоянием и взаимодействием с API.