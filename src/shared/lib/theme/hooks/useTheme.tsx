'use client';

import { useTheme as useThemeNext } from 'next-themes';
import { useEffect, useState } from 'react';
import { CiDark, CiLight } from 'react-icons/ci';

import { ThemeEnum } from '../constants';

import type { IconType } from 'react-icons';

type SetTheme = (ThemeEnum: ThemeEnum) => void;

interface UseThemeProps {
  Icon: IconType
  setTheme: SetTheme
  theme: ThemeEnum
  themeName: string
  toggleTheme: () => void
}

export const useTheme = (): UseThemeProps => {
  const { setTheme: setThemeNext, theme: themeNext } = useThemeNext();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return {
      Icon: CiDark,
      setTheme: () => { /* void */ },
      theme: ThemeEnum.DARK,
      themeName: 'Тёмная',
      toggleTheme: () => { /* void */ },
    };
  };

  const theme = themeNext as ThemeEnum;
  const setTheme = setThemeNext as SetTheme;

  return {
    Icon: theme === ThemeEnum.DARK ? CiDark : CiLight,
    setTheme,
    theme,
    themeName: theme === ThemeEnum.DARK ? 'Тёмная' : 'Светлая',
    toggleTheme: () => setTheme(theme === ThemeEnum.DARK ? ThemeEnum.LIGHT : ThemeEnum.DARK),
  };
};
