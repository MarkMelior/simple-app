# Melior Web

> Демонстрирую здесь свои навыки в Web разработке + делюсь опытом

Tailwind можно использовать только в `shared/ui` и в `.module.scss`. Везде пишем стили ручками, если нужно. В идеале обходится без стилей вообще! Все должны покрывать компоненты из ui

## Реализованный функционал

## MDX

> MDX синхронизирован с i18n

#### Реализация MDX:

- [`app/[lang]/projects/[category]/[name]/page.tsx`](/app/[lang]/projects//[category]/[name]/page.tsx) - layout для mdx файлов проектов;
- [`app/[lang]/projects/[category]/page.tsx`](/app/[lang]/projects/[category]/page.tsx) - страница отображения проектов из категории;
- [getMdx()](/src/shared/config/mdx/get-mdx.ts) - получение metadata и контента из mdx;
- [getProject(category, name)](/src/entity/project/model/services/get-project.ts) - получение проекта по категории и имени;
- [getProjectListByCategory(category)](/src/entity/project/model/services/get-projects-by-category.ts) - получение всех проектов в выбранной категории;
- [getProjectList()](/src/entity/project/model/services/get-projects.ts) - получение всех категорий и проектов;
- [mdx-components.tsx](/src/shared/config/mdx/mdx-components.tsx) - настройка отображения mdx;
- [MDXRemote](/src/shared/config/mdx/mdx-remote.tsx) - общая настройка MDXRemote;
- [rehypeExtractCodeProps](/src/shared/config/mdx/plugins/rehype-extract-code-props.ts) - самописный rehype-плагин для чтения пар ключ-значение в коде.

Вывод mdx страниц и метаданных происходит за счёт преобразования его через [gray-matter](https://www.npmjs.com/package/gray-matter). Рендер mdx через MDXRemote `next-mdx-remote/rsc` для серверного рендеринга (смотреть [MDXRemote](/src/shared/config/mdx/mdx-remote.tsx))

---

## Архитектура проекта

Проект написан в соответствии с архитектурной методологией [Feature-Sliced Design](https://feature-sliced.design/docs/get-started/tutorial) и [AppRouter](https://nextjs.org/docs/app) (Next.js).

- [shared](/src/shared/) - функциональность многократного использования;
- [entity](/src/entity/) - бизнес сущности;
- [features](/src/features/) - повторно используемые реализации целых функций продукта;
- [widgets](/src/widgets/) - большие автономные блоки функциональности или пользовательского интерфейса;
- [app](/src/app/) - все, что обеспечивает работу приложения.
