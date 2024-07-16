import { CategoryMetadata, ProjectMetadata } from '@/shared/config/mdx';

export interface ProjectResponse {
	metadata: ProjectMetadata;
	content: string;
	metadataCategory: CategoryMetadata;
	contentCategory: string;
}

export interface ProjectsResponse {
	title: string;
	link: string;
	projects: (ProjectMetadata & { link: string })[];
}
