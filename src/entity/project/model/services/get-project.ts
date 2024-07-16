'use server';

import { getLang } from '@/shared/config/i18n';
import { CategoryMetadata, getMdx } from '@/shared/config/mdx';
import path from 'path';
import { ProjectResponse } from '../types/project.type';

export async function getProject(
	category: string,
	name: string,
): Promise<ProjectResponse> {
	const lang = await getLang();

	const dir = path.join(
		process.cwd(),
		'projects',
		category,
		name,
		`${lang}.mdx`,
	);
	const mdx = await getMdx(dir);
	const metadata = mdx.metadata;
	const content = mdx.content;

	const dirCategory = path.join(
		process.cwd(),
		'projects',
		category,
		`${lang}.mdx`,
	);
	const mdxCategory = await getMdx<CategoryMetadata>(dirCategory);
	const metadataCategory = mdxCategory.metadata;
	const contentCategory = mdxCategory.content;

	if (!metadata) throw new Error(`Unable to find metadata in file "${dir}"`);

	return {
		metadata,
		metadataCategory: {
			...metadataCategory,
			link: `/projects/${category}`,
		},
		contentCategory,
		content,
	};
}
