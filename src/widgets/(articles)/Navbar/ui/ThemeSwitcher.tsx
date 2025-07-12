'use client';

import { useTheme } from '@/shared/lib/theme';
import { Button } from '@/shared/ui/client';

import type { FC } from 'react';

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { Icon, toggleTheme } = useTheme();

  return (
    <Button
      className={className}
      color="primary"
      isIconOnly={true}
      onPress={toggleTheme}
      variant="light"
    >
      <Icon size={24} />
    </Button>
  );
};
