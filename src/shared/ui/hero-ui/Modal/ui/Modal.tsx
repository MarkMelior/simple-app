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
  | 'placement'
  | 'onClose'
  | 'scrollBehavior'
>;

export const Modal: FC<ModalProps> = ({
  backdrop = 'blur',
  children,
  hideCloseButton,
  isOpen,
  onClose,
  onOpenChange,
  placement,
  scrollBehavior,
  size,
}) => (
  <HeroModal
    backdrop={backdrop}
    classNames={{ base: 'border border-default-200 bg-default-100/95' }}
    hideCloseButton={hideCloseButton}
    isOpen={isOpen}
    onClose={onClose}
    onOpenChange={onOpenChange}
    placement={placement}
    scrollBehavior={scrollBehavior}
    size={size}
  >
    {children}
  </HeroModal>
);
