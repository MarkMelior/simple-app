'use client';

import { HeroUIProvider as Provider } from '@heroui/react';

import type { HeroUIProviderProps } from '@heroui/react';

export const HeroUIProvider = ({ children }: HeroUIProviderProps) => (
  <Provider>
    {children}
  </Provider>
);
