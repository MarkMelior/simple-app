'use client';

import { ModalContent as HeroModalContent } from '@heroui/react';

import type { ModalContentProps as HeroModalContentProps } from '@heroui/react';
import type { FC } from 'react';

type ModalContentProps = Pick<HeroModalContentProps,
  | 'children'
>;

export const ModalContent: FC<ModalContentProps> = ({
  children,
}) => (
  <HeroModalContent>
    {children}
  </HeroModalContent>
);
