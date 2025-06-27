import fsd from '@feature-sliced/steiger-plugin';
import { defineConfig } from 'steiger';

/** Doc: https://github.com/feature-sliced/steiger?tab=readme-ov-file#rules */

export default defineConfig([
  ...fsd.configs.recommended,
  {
    files: ['./src/**'],
    rules: {
      'fsd/inconsistent-naming': 'off',
      'fsd/insignificant-slice': 'off',
      'fsd/no-segmentless-slices': 'off',
      'fsd/segments-by-purpose': 'off',
    },
  },
  {
    files: ['src/shared/styles/**'],
    rules: {
      'fsd/public-api': 'off',
    },
  },
  {
    files: ['src/shared/ui/**', 'src/entities/articles/**'],
    rules: {
      'fsd/no-reserved-folder-names': 'off',
    },
  },
  {
    files: ['src/app/articles/[category]/[name]/page.tsx'],
    rules: {
      'fsd/no-public-api-sidestep': 'off',
    },
  },
]);
