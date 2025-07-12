import { create } from 'zustand';

interface PerformanceStore {
  isDisabledAnimation: boolean
  setIsDisabledAnimation: (isDisabledAnimation: boolean) => void
};

export const usePerformance = create<PerformanceStore>((set) => ({
  isDisabledAnimation: true,
  setIsDisabledAnimation: (isDisabledAnimation) => {
    set({ isDisabledAnimation });
  },
}));
