'use client';

import { ThemeProvider } from 'next-themes';

import { ThemeEnum } from '@/shared/lib/theme';

import type { ThemeProviderProps } from 'next-themes';

export const NextThemesProvider = ({ children }: ThemeProviderProps) => (
  <ThemeProvider
    attribute="class"
    defaultTheme="system"
    disableTransitionOnChange={true}
    enableSystem={true}
    themes={Object.values(ThemeEnum)}
  >
    {children}
  </ThemeProvider>
);
