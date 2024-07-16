Link## Реализованный функционал

### Интернационализация (i18n)

> Реализован i18n без использования сторонних библиотек

#### Файлы:

- [middleware.ts](/middleware.ts) - основной функционал работы i18n
- [getLang()](src/shared/config/i18n/get-lang.ts) - возвращает выбранный язык `en | ru`
- [useLang()](src/shared/config/i18n/use-lang.ts) - как `getLang()`, только для клиентского компонента
- [getDictionary()](src/shared/config/i18n/dictionaries.ts) - возвращает объект с переводами `ключ-значение`
- [useDictionary()](src/shared/config/i18n/use-dictionary.ts) - как `getDictionary()`, только для клиентского компонента
- [type Dictionary](src/shared/config/i18n/dictionaries.ts)
- [/dictionary](src/shared/config/i18n/dictionaries/) - директория с json файлами переводов
- [Link](src/shared/config/i18n/link.tsx) - компонент Link для i18n

#### Особенности:

Не нужно прокидывать props в каждый компонент, где используется перевод:

```diff
-	export const Navbar = ({ dict }: { dict: Dictionary['ui'] }) => {...}

+	export const Navbar = async () => {
+		const dictionary = await getDictionary();
```

Не нужно передавать язык в `getDictionary(lang)`, как это реализовано в [документации Next.js](https://nextjs.org/docs/app/building-your-application/routing/internationalization#localization):

```diff
- getDictionary(lang)
+ getDictionary()
```

Просто используем в любом серверном компоненте `const dict = await getDictionary();`, прокидываем в клиентский компонент как props `{ dict }: { dict: Dictionary['ui'] }` или используем `useDictionary()`

---

## MDX

> MDX синхронизирован с i18n

#### Реализация MDX:

- [`app/[lang]/projects/[category]/[name]/page.tsx`](/app/[lang]/projects//[category]/[name]/page.tsx) - layout для mdx файлов
- [`app/[lang]/projects/[category]/page.tsx`](/app/[lang]/projects/[category]/page.tsx) - страница отображения проектов из категории
- [getMetadata()](/src/entity/project/model/services/get-metadata.ts) - получение metadata из mdx
- [getProject(category, name)](/src/entity/project/model/services/get-project.ts) - получение проекта по категории и имени
- [getProjectsByCategory(category)](/src/entity/project/model/services/get-projects-by-category.ts) - получение всех проектов в выбранной категории
- [getProjects()](/src/entity/project/model/services/get-projects.ts) - получение всех категорий и проектов
- [mdx-components.tsx](/src/mdx-components.tsx) - настройка отображения mdx
- [rehypeExtractCodeProps](/src/shared/lib/rehype-extract-code-props/rehype-extract-code-props.ts) - самописный rehype-плагин для чтения пар ключ-значение в коде

Вывод mdx страниц и метаданных происходит за счёт преобразования его через [gray-matter](https://www.npmjs.com/package/gray-matter). Рендер mdx через MDXRemote `next-mdx-remote/rsc` для серверного рендеринга (смотреть [`app/[lang]/projects/[category]/[name]/page.tsx`](/app/[lang]/projects//[category]/[name]/page.tsx))

---

## Архитектура проекта

Проект написан в соответствии с методологией [Feature-Sliced Design](https://feature-sliced.design/docs/get-started/tutorial).

- [shared](/src/shared/) - функциональность многократного использования;
- [entity](/src/entity/) - бизнес сущности;
- [features](/src/features/) - повторно используемые реализации целых функций продукта;
- [widgets](/src/widgets/) - большие автономные блоки функциональности или пользовательского интерфейса;
- [app](/src/app/) - все, что обеспечивает работу приложения.
