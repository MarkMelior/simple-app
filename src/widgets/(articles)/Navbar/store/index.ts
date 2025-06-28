import { create } from 'zustand';

interface ArticleNavbarStore {
  isHoveredButton: boolean
  isHoveredMenu: boolean
  setIsHoveredButton: (isAlertClosed: boolean) => void
  setIsHoveredMenu: (isHoveredMenu: boolean) => void
};

export const useArticleNavbar = create<ArticleNavbarStore>((set) => ({
  isHoveredButton: false,
  isHoveredMenu: false,
  setIsHoveredButton: (isHoveredMenu) => {
    set({ isHoveredMenu });
  },
  setIsHoveredMenu: (isHoveredMenu) => {
    set({ isHoveredMenu });
  },
}));
