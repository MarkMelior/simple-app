'use server';

import { getLang } from '@/shared/config';
import fs from 'fs/promises';
import path from 'path';
import { CategoryMetadata, getMetadata, ProjectMetadata } from './get-metadata';

export interface ProjectsResponse {
	title: string;
	link: string;
	projects: (ProjectMetadata & { link: string })[];
}

export async function getProjects(): Promise<ProjectsResponse[]> {
	const lang = await getLang();

	const rootDir = path.join(process.cwd(), 'projects');
	const categoryDirs = await fs.readdir(rootDir, { withFileTypes: true });

	const projectsByCategory: ProjectsResponse[] = [];

	for (const dirent of categoryDirs) {
		if (dirent.isDirectory()) {
			const categoryDir = path.join(rootDir, dirent.name);
			const indexFile = path.join(categoryDir, `${lang}.mdx`);
			const categoryMetadata = (await getMetadata(
				indexFile,
			)) as CategoryMetadata;

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
					const projectMetadata = await getMetadata(projectFile);

					projects.push({
						...projectMetadata,
						link: `/projects/${dirent.name}/${projectDirent.name}`,
					} as ProjectMetadata & { link: string });
				}
			}

			projectsByCategory.push({
				title: categoryMetadata.title,
				link: `/projects/${dirent.name}`,
				projects,
			});
		}
	}

	return projectsByCategory;
}
