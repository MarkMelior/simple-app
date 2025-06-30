/**
 * Преобразует строку в kebab‑case.
 * 1. fooBar → foo-Bar  (разделяет стыки «маленькая+Большая»)
 * 2. заменяет пробелы и подчёркивания на «‑»
 * 3. переводит в нижний регистр
 */
export const toKebabCase = (str: string) =>
  str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
