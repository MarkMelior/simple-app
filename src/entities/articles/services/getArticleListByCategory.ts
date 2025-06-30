'use server';

import fs from 'fs/promises';
import path from 'path';

import type { ArticleMetadata, CategoryMetadata } from '@/shared/lib/mdx';
import { getMdx } from '@/shared/lib/mdx';

import { articlesDirectory } from '../constants';

import type { ArticleData, ArticlesCategoryEnum } from '../types';

interface ArticleListByCategoryResponse {
  articles: ArticleData[]
  category: CategoryMetadata
}

export async function getArticleListByCategory(
  category: ArticlesCategoryEnum,
): Promise<ArticleListByCategoryResponse> {
  const dirCategory = path.join(process.cwd(), articlesDirectory, category);
  const articleFile = path.join(dirCategory, 'index.mdx');

  const { metadata: metadataCategory } = await getMdx<CategoryMetadata>(
    articleFile,
  );

  const articleDirs = await fs.readdir(dirCategory, { withFileTypes: true });

  const metadataArticle: ArticleData[] = await Promise.all(
    articleDirs
      .filter((dirent) => dirent.isDirectory())
      .map(async (dirent) => {
        const articleFile = path.join(dirCategory, dirent.name, 'index.mdx');

        const mdxArticle = await getMdx<ArticleMetadata>(articleFile);
        const articleMetadata = mdxArticle.metadata;

        return {
          ...articleMetadata,
          link: `/articles/${category}/${dirent.name}`,
          slug: dirent.name,
        };
      }),
  );

  return {
    articles: metadataArticle,
    category: metadataCategory,
  };
}
