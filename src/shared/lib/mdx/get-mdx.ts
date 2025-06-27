'use server';

import fs from 'fs/promises';
import matter from 'gray-matter';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

import { rehypeAutoHeading } from './plugins/rehype-auto-heading';

import type { MdxHeadline, ProjectMetadata } from './types';

interface MdxResponse<T> {
  content: string
  headlines: MdxHeadline[]
  metadata: T
}

export async function getMdx<T = ProjectMetadata>(
  filePath: string,
): Promise<MdxResponse<T>> {
  const fileContents = await fs.readFile(filePath, 'utf8');

  // TODO: Обработка пустого файла. Редкий кейс, но сделать нужно
  // if (!fileContents) {
  // throw new Error('File not found');
  // }

  const matterData = matter(fileContents);
  const metadata = matterData.data as T;
  const content = matterData.content;

  const headlines: MdxHeadline[] = [];

  await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeAutoHeading, headlines)
    .use(rehypeStringify)
    .process(content);

  return { content, headlines, metadata };
}
