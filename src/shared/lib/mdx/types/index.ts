import type { StackVariants } from '@/shared/constants';

export interface MdxHeadline {
  href: string
  nested?: MdxHeadline[]
  title: string
}

export interface ProjectMetadata {
  description: string
  link: string
  note: string
  publishDate: string
  tags?: StackVariants[]
  title: string
}

export interface CategoryMetadata {
  link: string
  title: string
}
