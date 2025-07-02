'use client';

import { ModalFooter as HeroModalFooter } from '@heroui/react';

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
  <HeroModalFooter className={className}>
    {children}
  </HeroModalFooter>
);
