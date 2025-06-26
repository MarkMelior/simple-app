'use client';

import { useTheme } from '@/shared/lib/theme';
import { Button } from '@/shared/ui/client';

export const ThemeSwitcher = () => {
  const { Icon, toggleTheme } = useTheme();

  return (
    <Button
      color="primary"
      isIconOnly={true}
      onPress={toggleTheme}
      variant="light"
    >
      <Icon size={24} />
    </Button>
  );
};
