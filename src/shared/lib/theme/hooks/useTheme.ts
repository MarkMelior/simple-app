import { useTheme as useThemeNext } from 'next-themes';
import { useCallback } from 'react';

import { ThemeEnum } from '../constants';

type SetTheme = (ThemeEnum: ThemeEnum) => void;

interface UseThemeProps {
  setTheme: SetTheme
  theme: ThemeEnum
  toggleTheme: () => void
}

export const useTheme = (): UseThemeProps => {
  const { setTheme: setThemeNext, theme: themeNext } = useThemeNext();

  const theme = themeNext as ThemeEnum;
  const setTheme = setThemeNext as SetTheme;

  const toggleTheme = useCallback(() => {
    setTheme(theme === ThemeEnum.DARK ? ThemeEnum.LIGHT : ThemeEnum.DARK);
  }, [theme]);

  return {
    setTheme,
    theme,
    toggleTheme,
  };
};
