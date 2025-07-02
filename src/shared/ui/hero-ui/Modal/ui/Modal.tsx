'use client';

import { Modal as HeroModal } from '@heroui/react';

import type { ModalProps as HeroModalProps } from '@heroui/react';
import type { FC } from 'react';

type ModalProps = Pick<HeroModalProps,
  | 'children'
  | 'isOpen'
  | 'onOpenChange'
  | 'backdrop'
  | 'size'
  | 'hideCloseButton'
>;

export const Modal: FC<ModalProps> = ({
  backdrop,
  children,
  hideCloseButton,
  isOpen,
  onOpenChange,
  size,
}) => (
  <HeroModal
    backdrop={backdrop}
    classNames={{
      base: 'border border-default-200 bg-default-100/95',
    }}
    hideCloseButton={hideCloseButton}
    isOpen={isOpen}
    onOpenChange={onOpenChange}
    size={size}
  >
    {children}
  </HeroModal>
);
