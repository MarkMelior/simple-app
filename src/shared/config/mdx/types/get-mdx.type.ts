import { StackVariants } from '@/shared/ui';

export interface ProjectMetadata {
	note: string;
	title: string;
	description: string;
	tags?: StackVariants[];
	publishDate: string;
}

export interface CategoryMetadata {
	title: string;
	link: string;
}
