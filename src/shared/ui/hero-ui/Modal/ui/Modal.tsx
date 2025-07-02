'use client';

import { Modal as HeroModal } from '@heroui/react';

import type { ModalProps as HeroModalProps } from '@heroui/react';
import type { FC } from 'react';

type ModalProps = Pick<HeroModalProps,
  | 'children'
  | 'isOpen'
  | 'onOpenChange'
  | 'backdrop'
>;

export const Modal: FC<ModalProps> = ({
  backdrop,
  children,
  isOpen,
  onOpenChange,
}) => (
  <HeroModal
    backdrop={backdrop}
    isOpen={isOpen}
    onOpenChange={onOpenChange}
  >
    {children}
  </HeroModal>
);
