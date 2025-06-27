'use server';

import path from 'path';

import type { CategoryMetadata } from '@/shared/lib/mdx';
import { getMdx } from '@/shared/lib/mdx';

import { articlesDirectory } from '../constants';

import type { ProjectResponse } from '../types';

export async function getProject(
  category: string,
  name: string,
): Promise<ProjectResponse> {
  const dir = path.join(
    process.cwd(),
    articlesDirectory,
    category,
    name,
    'index.mdx',
  );
  const { content, headlines, metadata } = await getMdx(dir);

  const dirCategory = path.join(
    process.cwd(),
    articlesDirectory,
    category,
    'index.mdx',
  );
  const { content: contentCategory, metadata: metadataCategory } = await getMdx<CategoryMetadata>(dirCategory);

  if (!metadata) {
    throw new Error(`Unable to find metadata in file "${dir}"`);
  }

  return {
    content,
    contentCategory,
    headlines,
    metadata,
    metadataCategory: {
      ...metadataCategory,
      link: `/articles/${category}`,
    },
  };
}
