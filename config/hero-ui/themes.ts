import colors from 'tailwindcss/colors';

import { ExtendColors } from './extend-colors';
import { swapColorValues } from './swap-color-values';

import type { ConfigThemes } from '@heroui/react';

export const heroUiThemes: ConfigThemes = {
  dark: {
    colors: {
      content1: ExtendColors.main[900],
      content2: ExtendColors.main[800],
      content3: ExtendColors.main[700],
      content4: ExtendColors.main[600],
      default: {
        ...swapColorValues(ExtendColors.main),
        DEFAULT: ExtendColors.main[700],
        foreground: '#FFFFFF',
      },
      primary: {
        ...colors.blue,
        DEFAULT: colors.blue[500],
        foreground: '#FFFFFF',
      },
    },
  },
  light: {
    colors: {
      content1: ExtendColors.main[50],
      content2: ExtendColors.main[100],
      content3: ExtendColors.main[200],
      content4: ExtendColors.main[300],
      default: {
        ...ExtendColors.main,
        DEFAULT: ExtendColors.main[300],
        foreground: '#000000',
      },
      primary: {
        ...swapColorValues(colors.blue),
        DEFAULT: colors.blue[500],
        foreground: '#FFFFFF',
      },
    },
  },
};
