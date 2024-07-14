'use server';

import { getLang } from '@/shared/config';
import fs from 'fs/promises';
import path from 'path';
import { CategoryMetadata, getMetadata, ProjectMetadata } from './get-metadata';

export interface ProjectsByCategoryResponse {
	category: CategoryMetadata;
	projects: (ProjectMetadata & { link: string })[];
}

export async function getProjectsByCategory(
	category: string,
): Promise<ProjectsByCategoryResponse> {
	const lang = await getLang();

	const dir = path.join(process.cwd(), 'projects', category);
	const indexFile = path.join(dir, `index-${lang}.mdx`);
	const categoryMetadata = (await getMetadata(indexFile)) as CategoryMetadata;

	const projectDirs = await fs.readdir(dir, { withFileTypes: true });
	const projectMetadata = await Promise.all(
		projectDirs
			.filter((dirent) => dirent.isDirectory())
			.map(async (dirent) => {
				const projectFile = path.join(dir, dirent.name, `${lang}.mdx`);
				const projectMetadata = await getMetadata(projectFile);
				return {
					...projectMetadata,
					link: `/projects/${category}/${dirent.name}`,
				} as ProjectMetadata & { link: string };
			}),
	);

	return {
		category: categoryMetadata,
		projects: projectMetadata,
	};
}
