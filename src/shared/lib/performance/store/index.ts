import { create } from 'zustand';

interface PerformanceStore {
  isDisabledAnimation: boolean
  isDisabledAnimEmoji: boolean
  setIsDisabledAnimation: (isDisabledAnimation: boolean) => void
  setIsDisabledAnimEmoji: (isDisabledAnimEmoji: boolean) => void
};

export const usePerformance = create<PerformanceStore>((set) => ({
  isDisabledAnimation: true,
  isDisabledAnimEmoji: false,
  setIsDisabledAnimation: (isDisabledAnimation) => {
    set({ isDisabledAnimation });
  },
  setIsDisabledAnimEmoji: (isDisabledAnimEmoji) => {
    set({ isDisabledAnimEmoji });
  },
}));
