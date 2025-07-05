'use client';

import { ModalHeader as HeroModalHeader } from '@heroui/react';

import type { ModalHeaderProps as HeroModalHeaderProps } from '@heroui/react';
import type { FC } from 'react';

type ModalHeaderProps = Pick<HeroModalHeaderProps,
  | 'children'
  | 'className'
>;

export const ModalHeader: FC<ModalHeaderProps> = ({
  children,
  className,
}) => (
  <HeroModalHeader className={className}>
    {children}
  </HeroModalHeader>
);
