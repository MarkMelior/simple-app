'use client';

import { useTheme as useThemeNext } from 'next-themes';
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

  const theme = themeNext as ThemeEnum;
  const setTheme = setThemeNext as SetTheme;

  return {
    Icon: theme === ThemeEnum.DARK ? CiLight : CiDark,
    setTheme,
    theme,
    themeName: theme === ThemeEnum.DARK ? 'Темная' : 'Светлая',
    toggleTheme: () => setTheme(theme === ThemeEnum.DARK ? ThemeEnum.LIGHT : ThemeEnum.DARK),
  };
};
