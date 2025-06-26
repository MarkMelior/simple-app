import { create } from 'zustand';

import type { HeaderSectionType } from '../types';

interface HeaderStore {
  activeSection: HeaderSectionType
  isAlertClosed: boolean
  isHoveredMenu: boolean
  isVisible: (hoveredSection: HeaderSectionType) => boolean
  lastActiveSection: HeaderSectionType
  setActiveSection: (activeSection: HeaderSectionType) => void
  setIsAlertClosed: (isAlertClosed: boolean) => void
  setIsHoveredMenu: (isHoveredMenu: boolean) => void
};

export const useHeader = create<HeaderStore>((set, get) => ({
  activeSection: null,
  isAlertClosed: false,
  isHoveredMenu: false,
  isVisible: (hoveredSection) => get().activeSection === hoveredSection || (get().lastActiveSection === hoveredSection && get().isHoveredMenu),
  lastActiveSection: null,
  setActiveSection: (activeSection) => {
    set({ activeSection });

    if (activeSection) {
      set({ lastActiveSection: activeSection });
    }
  },
  setIsAlertClosed: (isAlertClosed) => {
    set({ isAlertClosed });
  },
  setIsHoveredMenu: (isHoveredMenu) => {
    set({ isHoveredMenu });
  },
}));
