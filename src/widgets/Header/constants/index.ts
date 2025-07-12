import type { HeaderSectionType } from '../types';

interface HeaderSection {
  disabled?: boolean
  label: string
  width: number
}

export const headerSections: Record<
  Exclude<HeaderSectionType, null>,
  HeaderSection
> = {
  about: { label: 'Обо мне', width: 704 },
  apps: { disabled: true, label: 'Мини-приложения', width: 700 },
};
