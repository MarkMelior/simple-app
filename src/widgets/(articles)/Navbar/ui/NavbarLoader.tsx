'use client';

import { useEffect, useState } from 'react';

import { Spinner, Tooltip } from '@/shared/ui/client';

export const NavbarLoader = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    return null;
  }

  return (
    <Tooltip content="Загрузка..." placement="bottom" size="sm">
      <Spinner className="ml-3" size="sm" />
    </Tooltip>
  );
};
