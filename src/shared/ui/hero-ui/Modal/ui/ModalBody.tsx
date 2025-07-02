'use client';

import { ModalBody as HeroModalBody } from '@heroui/react';

import type { ModalBodyProps as HeroModalBodyProps } from '@heroui/react';
import type { FC } from 'react';

type ModalBodyProps = Pick<HeroModalBodyProps,
  | 'children'
>;

export const ModalBody: FC<ModalBodyProps> = ({
  children,
}) => (
  <HeroModalBody>
    {children}
  </HeroModalBody>
);
