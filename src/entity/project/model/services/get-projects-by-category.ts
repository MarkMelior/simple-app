'use server';

import { getLang } from '@/shared/config/i18n';
import { CategoryMetadata, getMdx, ProjectMetadata } from '@/shared/config/mdx';
import fs from 'fs/promises';
import path from 'path';

interface ProjectsByCategoryResponse {
	category: CategoryMetadata;
	projects: (ProjectMetadata & { link: string })[];
}

export async function getProjectsByCategory(
	category: string,
): Promise<ProjectsByCategoryResponse> {
	const lang = await getLang();

	const dirCategory = path.join(process.cwd(), 'projects', category);
	const projectFile = path.join(dirCategory, `${lang}.mdx`);

	const mdxCategory = await getMdx<CategoryMetadata>(projectFile);
	const metadataCategory = mdxCategory.metadata;

	const projectDirs = await fs.readdir(dirCategory, { withFileTypes: true });

	const metadataProject = await Promise.all(
		projectDirs
			.filter((dirent) => dirent.isDirectory())
			.map(async (dirent) => {
				const projectFile = path.join(dirCategory, dirent.name, `${lang}.mdx`);

				const mdxProject = await getMdx<CategoryMetadata>(projectFile);
				const projectMetadata = mdxProject.metadata;

				return {
					...projectMetadata,
					link: `/projects/${category}/${dirent.name}`,
				} as ProjectMetadata & { link: string };
			}),
	);

	return {
		category: metadataCategory,
		projects: metadataProject,
	};
}
