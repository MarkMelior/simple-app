'use client';

import { useEffect } from 'react';

import { detectDeviceInfo, usePerformance } from '@/shared/lib/performance';

import type { ReactNode } from 'react';

interface AppInitProviderProps {
  children: ReactNode
}

export const AppInitProvider = ({ children }: AppInitProviderProps) => {
  const { setIsDisabledAnimation } = usePerformance();

  useEffect(() => {
    const { isMobile, isTouch } = detectDeviceInfo();

    setIsDisabledAnimation(isMobile || isTouch);
  }, []);

  return children;
};
