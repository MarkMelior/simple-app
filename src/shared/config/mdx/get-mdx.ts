'use server';

import fs from 'fs/promises';
import matter from 'gray-matter';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import {
	MdxHeadline,
	ProjectMetadata,
} from '../../config/mdx/types/get-mdx.type';
import { rehypeAutoHeading } from './plugins/rehype-auto-heading';

interface MdxResponse<T> {
	metadata: T;
	content: string;
	headlines: MdxHeadline[];
}

export async function getMdx<T = ProjectMetadata>(
	filePath: string,
): Promise<MdxResponse<T>> {
	const fileContents = await fs.readFile(filePath, 'utf8');

	const matterData = matter(fileContents);
	const metadata = matterData.data as T;
	const content = matterData.content;

	// * Get project headlines
	const headlines: MdxHeadline[] = [];

	await unified()
		.use(remarkParse)
		.use(remarkRehype)
		.use(rehypeAutoHeading, headlines)
		.use(rehypeStringify)
		.process(content);

	return { metadata, content, headlines };
}
