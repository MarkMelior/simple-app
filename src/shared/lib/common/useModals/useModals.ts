'use client';

import { create } from 'zustand';

import type { ModalOptions } from './types';

type ModalKey = 'articlesCategories' | 'support';

type ModalState = {
  isOpen: boolean
  options: ModalOptions
};

type ModalStore = {
  modals: Record<ModalKey, ModalState>
  toggle: (key: ModalKey, opts?: ModalOptions) => void
  close: (key: ModalKey) => void
};

const useModalsStore = create<ModalStore>((set) => ({
  close: (key) => set((state) => ({ modals: { ...state.modals, [key]: { isOpen: false, options: {} } } })),
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
  const closeModal = useModalsStore((state) => state.close);

  const { isOpen, options } = modals[key] ?? { isOpen: false, options: {} };

  return {
    close: () => closeModal(key),
    isOpen,
    options,
    toggle: (options?: ModalOptions) => toggleModal(key, options),
  };
}
