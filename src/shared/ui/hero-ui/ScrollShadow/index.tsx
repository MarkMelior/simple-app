'use client';

import { ScrollShadow as ScrollShadowNext } from '@heroui/react';

import type { FC, ReactNode } from 'react';

interface ScrollShadowProps {
  children: ReactNode
}

export const ScrollShadow: FC<ScrollShadowProps> = ({ children }) => <ScrollShadowNext>{children}</ScrollShadowNext>;
