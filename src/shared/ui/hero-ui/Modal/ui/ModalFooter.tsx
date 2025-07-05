'use client';

import { ModalFooter as HeroModalFooter } from '@heroui/react';

import { cn } from '@/shared/lib/common';

import type { ModalFooterProps as HeroModalFooterProps } from '@heroui/react';
import type { FC } from 'react';

type ModalFooterProps = Pick<HeroModalFooterProps,
  | 'children'
  | 'className'
>;

export const ModalFooter: FC<ModalFooterProps> = ({
  children,
  className,
}) => (
  <HeroModalFooter className={cn('flex justify-center py-6', className)}>
    {children}
  </HeroModalFooter>
);
