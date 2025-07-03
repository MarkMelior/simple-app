'use client';

import { create } from 'zustand';

import type { ModalOptions } from './types';

// articles больше не используется. Хук useModals сейчас просто для примера
type ModalKey = 'articles';

type ModalState = {
  isOpen: boolean
  options: ModalOptions
};

type ModalStore = {
  modals: Record<ModalKey, ModalState>
  toggle: (key: ModalKey, opts?: ModalOptions) => void
};

const useModalsStore = create<ModalStore>((set) => ({
  modals: {} as ModalStore['modals'],
  toggle: (key, options = {}) =>
    set((state) => {
      const current = state.modals[key] || { isOpen: false, options: {} };

      return {
        modals: {
          ...state.modals,
          [key]: current.isOpen
            ? { isOpen: false, options: {} }
            : { isOpen: true, options: options },
        },
      };
    }),
}));

export function useModals(key: ModalKey) {
  const modals = useModalsStore((state) => state.modals);
  const toggleModal = useModalsStore((state) => state.toggle);

  const { isOpen, options } = modals[key] ?? { isOpen: false, options: {} };

  return {
    isOpen,
    options,
    toggle: (options?: ModalOptions) => toggleModal(key, options),
  };
}
