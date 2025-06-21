import { heroui } from '@heroui/react';
import typography from '@tailwindcss/typography';

import { heroUiThemes } from './config/hero-ui/themes';

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  plugins: [
    heroui({
      addCommonColors: true,
      prefix: 'simple',
      themes: heroUiThemes,
    }),
    typography,
  ],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '90rem',
      },
    },
  },
};

export default config;
