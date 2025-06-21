'use server';

import fs from 'fs/promises';
import path from 'path';

import type { CategoryMetadata, ProjectMetadata } from '@/shared/lib/mdx';
import { getMdx } from '@/shared/lib/mdx';

import { articlesDirectory } from '../constants';

import type { ArticlesCategoryEnum } from '../types';

interface ProjectsByCategoryResponse {
  category: CategoryMetadata
  projects: ProjectMetadata[]
}

export async function getProjectListByCategory(
  category: ArticlesCategoryEnum,
): Promise<ProjectsByCategoryResponse> {
  const dirCategory = path.join(process.cwd(), articlesDirectory, category);
  const projectFile = path.join(dirCategory, 'index.mdx');

  const { metadata: metadataCategory } = await getMdx<CategoryMetadata>(
    projectFile,
  );

  const projectDirs = await fs.readdir(dirCategory, { withFileTypes: true });

  const metadataProject = await Promise.all(
    projectDirs
      .filter((dirent) => dirent.isDirectory())
      .map(async (dirent) => {
        const projectFile = path.join(dirCategory, dirent.name, 'index.mdx');

        const mdxProject = await getMdx<CategoryMetadata>(projectFile);
        const projectMetadata = mdxProject.metadata;

        return {
          ...projectMetadata,
          link: `/projects/${category}/${dirent.name}`,
        } as ProjectMetadata;
      }),
  );

  return {
    category: metadataCategory,
    projects: metadataProject,
  };
}
