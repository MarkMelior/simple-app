import type { ModalProps } from '@heroui/react';

export interface ModalOptions {
  backdrop?: ModalProps['backdrop']
}

export interface BaseModalProps {
  isOpen: boolean
  options?: ModalOptions
  toggle: (options?: ModalOptions) => void
}
