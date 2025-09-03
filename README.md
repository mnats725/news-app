# NewsApp

React Native приложение для чтения новостей с использованием NewsAPI.

## Архитектура

- **`src/api/`** — работа с API (`axios` клиент и функции для получения новостей).
- **`src/constants/`** — константы (базовый URL, ключ API, дефолтные параметры).
- **`src/navigation/`** — корневой навигатор и маршруты экранов.
- **`src/screens/`** — экраны приложения:
  - список новостей,
  - детали новости.
- **`src/components/ui/`** — переиспользуемые UI-компоненты (карточки, чипсы, ошибки и т.д.).
- **`src/hooks/`** — кастомные хуки.
- **`src/utils/`** — вспомогательные функции.
- **`src/types/`** — типы данных и модели.

## Технологии

- React Native
- React
- TypeScript
- React Navigation (native-stack)
- Axios
- Styled-components
- ESLint + Prettier
- Jest

## Скрипты

- `yarn start` — запуск Metro Bundler
- `yarn android` — запуск на Android
- `yarn ios` — запуск на iOS
- `yarn lint` — линтинг
- `yarn test` — тесты

## Установка и запуск

```bash
yarn install
yarn start
yarn android # или yarn ios
```

## Установка и запуск

```typescript
export const NEWS_API_BASE_URL = '';
export const NEWS_API_KEY = '';
```
