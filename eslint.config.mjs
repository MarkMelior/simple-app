import { FlatCompat } from '@eslint/eslintrc';
import stylistic from '@stylistic/eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import perfectionistPlugin from 'eslint-plugin-perfectionist';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

import scssImportNamePlugin from './config/eslint /scss-import-name.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintCommonRules = {
  // https://eslint.org/docs/latest/rules/arrow-body-style
  'arrow-body-style': ['error', 'as-needed'],
  // https://eslint.org/docs/latest/rules/comma-dangle
  'comma-dangle': ['error', 'always-multiline'],
  // https://eslint.org/docs/latest/rules/no-console
  'no-console': ['error', { allow: ['warn', 'info', 'error'] }],
  // Запретить использование пустых функций
  'no-empty-function': 'error',
  // Форматирование объектов
  'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
  // https://eslint.org/docs/latest/rules/padding-line-between-statements
  'padding-line-between-statements': [
    'error',
    { blankLine: 'always', next: '*', prev: ['const', 'let', 'var'] },
    {
      blankLine: 'any',
      next: ['const', 'let', 'var'],
      prev: ['const', 'let', 'var'],
    },
    { blankLine: 'always', next: 'return', prev: '*' },
  ],
  'sort-imports': [
    'error',
    {
      ignoreCase: false,
      ignoreDeclarationSort: true,
      ignoreMemberSort: false,
    },
  ],
};

const eslintReactRules = {
  // useEffect зависимости
  'react-hooks/exhaustive-deps': 'off',
  // Указывает пропсам значения true и false
  'react/jsx-boolean-value': ['error', 'always'],
  // Соответствие стандартным DOM-свойствам
  'react/no-unknown-property': 'error',
  // Компоненты должны быть закрыты
  'react/self-closing-comp': 'error',
};

const eslintTypescriptRules = {
  '@typescript-eslint/consistent-type-imports': [
    'error',
    {
      disallowTypeAnnotations: false, // Позволяет аннотации через `import type`
      prefer: 'type-imports', // Всегда использовать "import type" для типов
    },
  ],
  '@typescript-eslint/no-unused-vars': [
    'warn',
    { argsIgnorePattern: '^_' },
  ],
};

const eslintPerfectionistRules = {
  'perfectionist/sort-exports': [
    'error',
    {
      order: 'asc',
      type: 'natural',
    },
  ],
  'perfectionist/sort-interfaces': [
    'error',
    {
      order: 'asc',
      type: 'natural',
    },
  ],
  'perfectionist/sort-jsx-props': [
    'error',
    {
      order: 'asc',
      type: 'natural',
    },
  ],
  'perfectionist/sort-objects': [
    'error',
    {
      order: 'asc',
      type: 'natural',
    },
  ],
};

const eslintStylisticRules = {
  // Применяет разрывы строк после открытия и перед закрытием скобок массива.
  '@stylistic/array-bracket-newline': ['error', { multiline: true }],
  // Применяет скобки вокруг стрелочных функций.
  '@stylistic/arrow-parens': ['error', 'always'],
  // Обеспечивает единообразный стиль раскосов для блоков.
  '@stylistic/brace-style': ['error', '1tbs'],
  // Требует или запрещает конечные запятые.
  '@stylistic/comma-dangle': ['error', 'only-multiline'],
  //
  '@stylistic/eol-last': ['error', 'always'],
  // Обеспечивает единообразие отступов.
  '@stylistic/indent': ['error', 2],
  //
  '@stylistic/jsx-closing-bracket-location': ['error'],
  //
  '@stylistic/jsx-max-props-per-line': ['error', { maximum: { multi: 1, single: 3 } }],
  // Обеспечивает переводы строк между операндами троичных выражений.
  '@stylistic/multiline-ternary': 'off',
  // Запрещает смешанные пробелы и табуляции для отступов.
  '@stylistic/no-mixed-spaces-and-tabs': 'error',
  // Обеспечивает единообразный стиль раскосов для объектов для новой строки.
  '@stylistic/object-curly-newline': ['error'],
  // Обеспечивает единообразный стиль раскосов для объектов.
  '@stylistic/object-curly-spacing': ['error', 'always'],
  // Обеспечивает последовательное использование обратных, двойных или одинарных кавычек.
  '@stylistic/quotes': ['error', 'single'],
  // Требует или запрещает точки с запятой.
  '@stylistic/semi': ['error', 'always'],
  // Обеспечивает одинаковый интервал после `//` или `/*` в комментарии.
  '@stylistic/spaced-comment': ['error', 'always'],
};

const eslintImportRules = {
  // Все импортированные данные отображаются перед другими операторами.
  'import/first': 'error',
  // Перевод строки после инструкций import.
  'import/newline-after-import': 'error',
  // Запретить повторный импорт одного и того же модуля в несколько мест.
  'import/no-duplicates': 'error',
  // Запретить модули без экспорта или экспорт без соответствующего импорта в другой модуль.
  'import/no-unused-modules': 'error',
  // Примените соглашение в порядке импорта модуля.
  'import/order': [
    'error',
    {
      'alphabetize': {
        caseInsensitive: true,
        order: 'asc',
      },
      'groups': [
        ['builtin', 'external'], // Встроенные модули и внешние библиотеки
        'internal', // Внутренние модули
        ['parent', 'sibling', 'index'], // Относительные импорты
        'type', // Импорты типов
        'object', // Динамические импорты (например, require)
        'unknown', // Неизвестные импорты
      ],
      'newlines-between': 'always',
      'pathGroups': [
        {
          group: 'sibling',
          pattern: '.*/**/*.scss',
          position: 'after',
        },
        {
          group: 'internal',
          pattern: '@/widgets/**',
          position: 'before',
        },
        {
          group: 'internal',
          pattern: '@/shared/**',
          position: 'before',
        },
        {
          group: 'internal',
          pattern: '@/features/**',
          position: 'before',
        },
        {
          group: 'internal',
          pattern: '@/entities/**',
          position: 'before',
        },
        {
          group: 'internal',
          pattern: '@/app/**',
          position: 'before',
        },
      ],
    },
  ],
};

const eslintNextRules = {
  '@next/next/no-img-element': 'off',
};

const eslintTailwindRules = {
  'tailwindcss/no-custom-classname': 'off',
};

const eslintConfig = [
  stylistic.configs.recommended,
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'plugin:tailwindcss/recommended',
  ),
  {
    plugins: {
      '@stylistic': stylistic,
      'custom-rules': scssImportNamePlugin,
      'import': importPlugin,
      'perfectionist': perfectionistPlugin,
    },
    rules: {
      ...eslintCommonRules,
      ...eslintStylisticRules,
      ...eslintReactRules,
      ...eslintImportRules,
      ...eslintTypescriptRules,
      ...eslintPerfectionistRules,
      ...eslintNextRules,
      ...eslintTailwindRules,
      'custom-rules/scss-import-name': 'error',
    },
  },
  {
    files: ['global.d.ts'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
];

export default eslintConfig;
