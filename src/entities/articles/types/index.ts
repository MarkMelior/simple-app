import type { ArticleMetadata, CategoryMetadata, MdxHeadline } from '@/shared/lib/mdx';

export interface ArticleResponse {
  content: string
  contentCategory: string
  headlines: MdxHeadline[]
  metadata: ArticleMetadata
  metadataCategory: CategoryMetadata
}

export interface ArticleData extends ArticleMetadata {
  link: string
  slug: string
}

export interface ArticleListResponse {
  articles: ArticleData[]
  link: string
  slug: ArticlesCategoryEnum
  title: string
}

export enum ArticlesCategoryEnum {
  FRONTEND = 'frontend'
}
