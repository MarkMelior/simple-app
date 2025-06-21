'use client';

import { useEffect, useState } from 'react';
import { CiDark, CiLight } from 'react-icons/ci';

import { ThemeEnum, useTheme } from '@/shared/lib/theme';
import { Button } from '@/shared/ui/client';

export const ThemeSwitcher = () => {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        color="primary"
        isIconOnly={true}
        isLoading={true}
        variant="light"
      />
    );
  }

  return (
    <Button
      color="primary"
      isIconOnly={true}
      onPress={() => setTheme(theme === ThemeEnum.DARK ? ThemeEnum.LIGHT : ThemeEnum.DARK)}
      variant="light"
    >
      {theme === ThemeEnum.DARK ? (
        <CiLight className="text-primary" size={24} />
      ) : (
        <CiDark className="text-primary" size={24} />
      )}
    </Button>
  );
};
