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
      prefix: 'melior',
      themes: heroUiThemes,
    }),
    typography,
  ],
  theme: {
    extend: {
      animation: {
        'fade-in-opacity': 'fade-in-opacity 0.15s ease-out forwards',
      },
      backgroundImage: {
        noise: 'url(\'/images/interface/noise.png\')',
      },
      maxWidth: {
        '8xl': '90rem',
      },
      spacing: {
        heightArticlesNavbar: '64px',
      },
      zIndex: {
        header: '35',
        headerAlert: '30',
        light: '20',
        message: '100',
        scrollUp: '40',
        sidebar: '45',
      },
    },
  },
};

export default config;
