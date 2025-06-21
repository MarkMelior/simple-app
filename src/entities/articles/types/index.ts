import type { CategoryMetadata, MdxHeadline, ProjectMetadata } from '@/shared/lib/mdx';

export interface ProjectResponse {
  content: string
  contentCategory: string
  headlines: MdxHeadline[]
  metadata: ProjectMetadata
  metadataCategory: CategoryMetadata
}

export interface ProjectsResponse {
  link: string
  projects: ProjectMetadata[]
  title: string
}

export enum ArticlesCategoryEnum {
  CODE = 'code'
}
