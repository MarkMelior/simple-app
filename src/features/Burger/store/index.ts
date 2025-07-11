import { create } from 'zustand';

interface BurgerStore {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
};

export const useBurger = create<BurgerStore>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => {
    set({ isOpen });
  },
}));
