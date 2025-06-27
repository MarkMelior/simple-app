import type { StackVariants } from '@/shared/constants';

export interface MdxHeadline {
  href: string
  nested?: MdxHeadline[]
  title: string
}

export interface ProjectMetadata {
  createdAt: string
  description: string
  link: string
  note: string
  tags?: StackVariants[]
  title: string
  updatedAt: string
}

export interface CategoryMetadata {
  link: string
  title: string
}
