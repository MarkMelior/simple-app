import { StackVariants } from '@/shared/ui';

export interface MdxHeadline {
	title: string;
	href: string;
	nested?: MdxHeadline[];
}

export interface ProjectMetadata {
	note: string;
	title: string;
	description: string;
	tags?: StackVariants[];
	publishDate: string;
	link: string;
}

export interface CategoryMetadata {
	title: string;
	link: string;
}
