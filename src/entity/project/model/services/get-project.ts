'use server';

import { getLang } from '@/shared/config';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { ProjectMetadata } from './get-metadata';

export interface ProjectResponse {
	metadata: ProjectMetadata;
	content: string;
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

	// if (!exportedMetadata && !matterMetadata)
	if (!matterMetadata)
		throw new Error(
			`Unable to find metadata in file /projects/${name}/${lang}.mdx`,
		);

	return {
		// metadata: exportedMetadata || matterMetadata,
		metadata: matterMetadata,
		content: matterData.content,
	};
}
