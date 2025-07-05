import path from 'path';

import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  addons: ['@storybook/addon-docs'],
  framework: '@storybook/nextjs',
  stories: ['../../src/shared/icons/icons.mdx'],
  webpackFinal: async (config) => {
    config.resolve!.alias = {
      ...config.resolve!.alias,
      '@': path.resolve(__dirname, '../../src'),
      '@/core': path.resolve(__dirname, '../../src/app/core'),
    };

    return config;
  },
};

export default config;
