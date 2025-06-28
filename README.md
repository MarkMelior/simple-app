# Melior Web

> Демонстрирую здесь свои навыки в Web разработке + делюсь опытом

- Собственный [UI Kit](/src/shared/ui)
- Серверный рендеринг и [AppRouter](https://nextjs.org/docs/app)
- Архитектурная методология [Feature-Sliced Design](https://feature-sliced.design/docs/get-started/tutorial)
- 🤍🖤 Темная и светлая тема
- Полная типизация проекта
- 🚦 [Скрипты](/scripts) для упрощения жизни
- Настроены CI/CD и Deploy на Vercel
- ⚙️ Всё аккуратно сконфигурировано в [config](/config)
- [Обработка mdx](#mdx) файлов для статей
- Задачи ведутся в Jira

---

![Next.js 15](https://img.shields.io/badge/Next.js_15-000?logo=nextdotjs&logoColor=fff&style=for-the-badge)
![React 19](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Zustand](https://img.shields.io/badge/Zustand-FFB441?style=for-the-badge&logo=ziggo&logoColor=black)
![TypeScript 5](https://img.shields.io/badge/TypeScript_5-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Module SCSS](https://img.shields.io/badge/module_scss-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Feature-Sliced Design](https://img.shields.io/badge/FSD-3481FE?style=for-the-badge&logo=flat&logoColor=white)
![GIT](https://img.shields.io/badge/CI_/_CD-000000?style=for-the-badge&logo=github&logoColor=white)
![ESLint 9](https://img.shields.io/badge/ESLint_9-4B32C3?style=for-the-badge&logo=ESLint&logoColor=white)
![Stylelint](https://img.shields.io/badge/stylelint-263238?style=for-the-badge&logo=stylelint&logoColor=white)
![HeroUI](https://img.shields.io/badge/HeroUI-000?logo=HeroUI&logoColor=fff&style=for-the-badge)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Storybook](https://img.shields.io/badge/Storybook-FF4785?style=for-the-badge&logo=Storybook&logoColor=white)
![Lottie](https://img.shields.io/badge/Lottie-00DDB3?style=for-the-badge&logo=lottiefiles&logoColor=white)

⠀

> Продемонстрировать свои навыки, это не про «усложнить проект»... 
> *(всевозможные самописные утилиты, хуки, размазывание не переиспользуемого функционала по всей архитектуре, тесты на всё подряд)*.
> \
> Настоящее мастерство находится в простоте `^-^`

⠀

### 📋✏️ Общие правила проекта

#### Архитектура

- Необходимо оставлять комментарии к сложному функционалу;
- Папки с компонентами, как и сами компоненты, должны быть в `PascalCase`. Утилиты, моки, типы и т.п. в `kebab-case`;
- Наименование `.module.scss` должно начинаться с маленькой буквы, а компонента `.tsx` с большой;
- Серверные компоненты и типы экспортируем как обычно, через `index.ts`. Клиентские компоненты (`'use client'`) экспортируем через `client.ts`;
- Наименование типов. Данные получаемые с сервера: `Response`. Данные отправляемые на сервер: `Payload`.

#### Git

- `feature` - Добавление нового функционала;
- `fix` - Исправление какой-либо программной ошибки;
- `refactor` - Изменения в коде, не исправляющие ошибок и не добавляющие новый функционал;
- `test` - Добавление новых тестов или исправление существующих;
- `core` - Любые другие изменения.

> Пример названия ветки: `feature/MLR-777-short-description`. 
> Пример сообщения коммита: `MLR-777 | Short description`

##### SCSS

- [[custom-rules/restrict-apply](./config/stylelint/restrict-apply.js)] `@apply` запрещено использовать;
- [[custom-rules/scss-import-name](./config/eslint/scss-import-name.js)] Импорт стилей из `.module.scss` нужно называть `styles`.

##### Tailwind

- Добавлять пользовательские цвета нужно в `/config/hero-ui/themes`.
- Использовать переменную цвета нужно строго через `theme('colors.default.{50-900}')`. Через `var(--color-default-{50-900})` использовать запрещено!
- Tailwind можно использовать только в `shared/ui` и в `.module.scss`. Везде пишем стили ручками, но в идеале обходится без стилей вообще! Всё должны покрывать компоненты из UI

---
⠀

### 🎬📃 Скрипты

- `yarn dev` - Локальный запуск в режиме разработки с hot-reload
- `yarn build` - Сборка проекта для production
- `yarn start` - Запуск предварительно собранного проекта в production-режиме
- `yarn storybook` - Запуск Storybook
- `yarn lint:ts` - Проверка tslint
- `yarn lint:es` - Проверка eslint
- `yarn lint:es:fix` - Авто-исправление eslint
- `yarn lint:fsd` - Проверка архитектурных нарушений FSD
- `yarn lint:style` - Проверка stylelint
- `yarn lint:style:fix` - Авто-исправление stylelint
- `yarn lint:all` - Проверка всех линтеров
- `yarn script:tgs` - Скрипт конвертирования .tgs в .json ([описание](/scripts/tgs/README.md))
- `yarn script:tgs:clear` - Очистить конвертированные файлы

---
⠀

### 📂⚡️ Архитектура проекта

Проект написан в соответствии с архитектурной методологией [Feature-Sliced Design](https://feature-sliced.design/docs/get-started/tutorial) и [AppRouter](https://nextjs.org/docs/app) Next.js 15.

- [app](/src/app) - [AppRouter](https://nextjs.org/docs/app) + [`@core`](/src/app/@core);
- [widgets](/src/widgets) - Большие, автономные блоки функциональности или пользовательского интерфейса;
- [features](/src/features) - Повторно используемые реализации целых функций продукта;
- [entities](/src/entities) - Бизнес сущности;
- [shared](/src/shared) - Многократно-переиспользуемые компоненты и функции.

---
⠀

## Реализованный функционал

<h4 id="mdx"> Реализация MDX:</h4>

- [`src/app/articles/[category]/[name]/page.tsx`](/src/app/articles//[category]/[name]/page.tsx) - layout для mdx файлов проектов;
- [`src/app/articles/[category]/page.tsx`](/src/app/articles/[category]/page.tsx) - страница отображения проектов из категории;
- [getMdx()](/src/shared/lib/mdx/get-mdx.ts) - получение metadata и контента из mdx;
- [getArticle(category, name)](/src/entities/articles/services/getArticle.ts) - получение проекта по категории и имени;
- [getArticleListByCategory(category)](/src/entities/articles/services/getArticleListByCategory.ts) - получение всех проектов в выбранной категории;
- [getArticleList()](/src/entities/articles/services/getArticleList.ts) - получение всех категорий и проектов;
- [mdx-components.tsx](/src/shared/lib/mdx/mdx-components.tsx) - настройка отображения mdx;
- [MDXRemote](/src/shared/lib/mdx/mdx-remote.tsx) - общая настройка MDXRemote;
- [rehypeExtractCodeProps](/src/shared/lib/mdx/plugins/rehype-extract-code-props.ts) - самописный rehype-плагин для чтения пар ключ-значение в коде.

Вывод mdx страниц и метаданных происходит за счёт преобразования его через [gray-matter](https://www.npmjs.com/package/gray-matter). Рендер mdx через MDXRemote `next-mdx-remote/rsc` для серверного рендеринга (смотреть [MDXRemote](/src/shared/lib/mdx/mdx-remote.tsx))
