import type { ArticleMetadata, CategoryMetadata, MdxHeadline } from '@/shared/lib/mdx';

export interface ArticleResponse {
  content: string
  contentCategory: string
  headlines: MdxHeadline[]
  metadata: ArticleMetadata
  metadataCategory: CategoryMetadata
}

export interface ArticleListResponse {
  articles: ArticleMetadata[]
  link: string
  title: string
}

export enum ArticlesCategoryEnum {
  FRONTEND = 'frontend'
}
