'use server';

import { getLang } from '@/shared/config/i18n';
import { CategoryMetadata, getMdx, ProjectMetadata } from '@/shared/config/mdx';
import fs from 'fs/promises';
import path from 'path';
import { ProjectsResponse } from '../types/project.type';

export async function getProjects(): Promise<ProjectsResponse[]> {
	const lang = await getLang();

	const rootDir = path.join(process.cwd(), 'projects');
	const categoryDirs = await fs.readdir(rootDir, { withFileTypes: true });

	const projectsByCategory: ProjectsResponse[] = [];

	for (const dirent of categoryDirs) {
		if (dirent.isDirectory()) {
			const categoryDir = path.join(rootDir, dirent.name);
			const projectFile = path.join(categoryDir, `${lang}.mdx`);

			const mdxCategory = await getMdx<CategoryMetadata>(projectFile);
			const metadataCategory = mdxCategory.metadata;

			const projectDirs = await fs.readdir(categoryDir, {
				withFileTypes: true,
			});
			const projects: (ProjectMetadata & { link: string })[] = [];

			for (const projectDirent of projectDirs) {
				if (projectDirent.isDirectory()) {
					const projectFile = path.join(
						categoryDir,
						projectDirent.name,
						`${lang}.mdx`,
					);

					const mdxProject = await getMdx<CategoryMetadata>(projectFile);
					const projectMetadata = mdxProject.metadata;

					projects.push({
						...projectMetadata,
						link: `/projects/${dirent.name}/${projectDirent.name}`,
					} as ProjectMetadata & { link: string });
				}
			}

			projectsByCategory.push({
				title: metadataCategory.title,
				link: `/projects/${dirent.name}`,
				projects,
			});
		}
	}

	return projectsByCategory;
}
