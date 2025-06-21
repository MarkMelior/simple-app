'use server';

import fs from 'fs/promises';
import path from 'path';

import { type CategoryMetadata, type ProjectMetadata, getMdx } from '@/shared/lib/mdx';

import { articlesDirectory } from '../constants';

import type { ProjectsResponse } from '../types';

export async function getProjectList(): Promise<ProjectsResponse[]> {
  const rootDir = path.join(process.cwd(), articlesDirectory);
  const categoryDirs = await fs.readdir(rootDir, { withFileTypes: true });

  const projectsByCategory: ProjectsResponse[] = [];

  for (const dirent of categoryDirs) {
    if (dirent.isDirectory()) {
      const categoryDir = path.join(rootDir, dirent.name);
      const projectFile = path.join(categoryDir, 'index.mdx');

      const mdxCategory = await getMdx<CategoryMetadata>(projectFile);
      const metadataCategory = mdxCategory.metadata;

      const projectDirs = await fs.readdir(categoryDir, {
        withFileTypes: true,
      });
      const projects: ProjectMetadata[] = [];

      for (const projectDirent of projectDirs) {
        if (projectDirent.isDirectory()) {
          const projectFile = path.join(
            categoryDir,
            projectDirent.name,
            'index.mdx',
          );

          const mdxProject = await getMdx<CategoryMetadata>(projectFile);
          const projectMetadata = mdxProject.metadata;

          projects.push({
            ...projectMetadata,
            link: `/projects/${dirent.name}/${projectDirent.name}`,
          } as ProjectMetadata);
        }
      }

      projectsByCategory.push({
        link: `/projects/${dirent.name}`,
        projects,
        title: metadataCategory.title,
      });
    }
  }

  return projectsByCategory;
}
