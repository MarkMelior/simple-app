'use server';

import { getLang } from '@/shared/config';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { CategoryMetadata, ProjectMetadata } from './get-metadata';

export interface ProjectResponse {
	metadata: ProjectMetadata;
	content: string;
	metadataCategory: CategoryMetadata;
}

export async function getProject(
	category: string,
	name: string,
): Promise<ProjectResponse> {
	const lang = await getLang();
	// const { metadata: exportedMetadata } = (await import(
	// 	`/projects/${category}/${name}/page.mdx`
	// )) as Partial<{
	// 	metadata: ProjectMetadata;
	// }>;

	const dir = path.join(
		process.cwd(),
		'projects',
		category,
		name,
		`${lang}.mdx`,
	);
	const mdxFile = fs.readFileSync(dir);
	const matterData = matter(mdxFile);
	const matterMetadata = matterData.data as ProjectMetadata;

	const dirCategory = path.join(
		process.cwd(),
		'projects',
		category,
		`${lang}.mdx`,
	);
	const mdxFileCategory = fs.readFileSync(dirCategory);
	const matterMetadataCategory = matter(mdxFileCategory)
		.data as CategoryMetadata;

	// if (!exportedMetadata && !matterMetadata)
	if (!matterMetadata)
		throw new Error(
			`Unable to find metadata in file /projects/${name}/${lang}.mdx`,
		);

	return {
		// metadata: exportedMetadata || matterMetadata,
		metadata: matterMetadata,
		metadataCategory: {
			...matterMetadataCategory,
			link: `/projects/${category}`,
		},
		content: matterData.content,
	};
}
