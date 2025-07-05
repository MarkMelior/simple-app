'use server';

import fs from 'fs/promises';
import path from 'path';

import { type ArticleMetadata, type CategoryMetadata, getMdx } from '@/shared/lib/mdx';

import { articlesDirectory } from '../constants';

import type { ArticleData, ArticlesCategoryEnum, ArticlesListResponse } from '../types';
import type { Dirent } from 'fs';

export async function getArticlesList(): Promise<ArticlesListResponse[]> {
  const rootDir = path.join(process.cwd(), articlesDirectory);
  const categoryDirs = await fs.readdir(rootDir, { withFileTypes: true }) as Dirent<ArticlesCategoryEnum>[];

  const articleListByCategory: ArticlesListResponse[] = [];

  for (const dirent of categoryDirs) {
    if (dirent.isDirectory()) {
      const categoryDir = path.join(rootDir, dirent.name);
      const articleFile = path.join(categoryDir, 'index.mdx');

      const mdxCategory = await getMdx<CategoryMetadata>(articleFile);
      const metadataCategory = mdxCategory.metadata;

      const articleDirs = await fs.readdir(categoryDir, {
        withFileTypes: true,
      });
      const articleList: ArticleData[] = [];

      for (const articleDirent of articleDirs) {
        if (articleDirent.isDirectory()) {
          const articleFile = path.join(
            categoryDir,
            articleDirent.name,
            'index.mdx',
          );

          const mdxArticle = await getMdx<ArticleMetadata>(articleFile);
          const articleMetadata = mdxArticle.metadata;

          articleList.push({
            ...articleMetadata,
            category: dirent.name,
            link: `/articles/${dirent.name}/${articleDirent.name}`,
            slug: articleDirent.name,
          });
        }
      }

      articleListByCategory.push({
        articles: articleList,
        link: `/articles/${dirent.name}`,
        slug: dirent.name,
        title: metadataCategory.title,
      });
    }
  }

  return articleListByCategory;
}
