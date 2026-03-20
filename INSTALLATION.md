# Установка и запуск (клон для другого компьютера)

1. Клонировать репозиторий:

1.1. ```bash
git clone https://github.com/BULKkA/MikuroECOV2.git
cd MikuroECOV2
```

2. Установить зависимости (содержащиеся в `package.json`):

2.1. ```bash
npm install
```

> Если требуется точно из .env (который содержит версии), можно сделать:
>
> ```bash
> npm install vue@$(grep VITE_APP_VUE_VERSION .env | cut -d'=' -f2 | tr -d '"') vite@$(grep VITE_APP_VITE_VERSION .env | cut -d'=' -f2 | tr -d '"')
> ```

3. Запустить локально:

3.1. ```bash
npm run dev
```

4. Открыть URL из вывода, обычно `http://localhost:5173`.

5. Сборка для продакшн:

5.1. ```bash
npm run build
```
