'use server';

import fs from 'fs/promises';
import matter from 'gray-matter';
import { ProjectMetadata } from '../../config/mdx/types/get-mdx.type';

interface MdxResponse<T> {
	metadata: T;
	content: string;
}

export async function getMdx<T = ProjectMetadata>(
	filePath: string,
): Promise<MdxResponse<T>> {
	const fileContents = await fs.readFile(filePath, 'utf8');

	const matterData = matter(fileContents);
	const metadata = matterData.data as T;
	const content = matterData.content;

	return { metadata, content };
}
