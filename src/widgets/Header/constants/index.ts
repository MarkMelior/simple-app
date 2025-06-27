import type { HeaderSectionType } from '../types';

interface HeaderSection {
  label: string
  width: number
}

export const headerSections: Record<
  Exclude<HeaderSectionType, null>,
  HeaderSection
> = {
  about: { label: 'Обо мне', width: 704 },
  apps: { label: 'Мини-приложения', width: 700 },
  resources: { label: 'Статьи', width: 736 },
};

export const headerLinks = [
  // { href: '/articles', label: 'Статьи' },
  { href: '/help', label: 'Помощь' },
];
