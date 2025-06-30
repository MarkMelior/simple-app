import type { StackVariants } from '@/shared/constants';
import type { IconNames } from '@/shared/icons/types';

export interface MdxHeadline {
  href: string
  nested?: MdxHeadline[]
  title: string
}

export interface ArticleMetadata {
  createdAt?: string
  description: string
  icon?: IconNames
  note?: string
  tags?: StackVariants[]
  title: string
  updatedAt?: string
}

export interface CategoryMetadata {
  link: string
  title: string
}
