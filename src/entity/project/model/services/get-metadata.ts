'use server';

import { StackVariants } from '@/shared/ui';
import fs from 'fs/promises';
import matter from 'gray-matter';
import { Metadata } from 'next';

export interface ProjectMetadata {
	note: string;
	title: string;
	description: string;
	tags?: StackVariants[];
	publishDate: string;
}

export interface CategoryMetadata {
	title: string;
}

export async function getMetadata(filePath: string): Promise<Metadata> {
	const fileContents = await fs.readFile(filePath, 'utf8');
	const { data } = matter(fileContents);
	return data as Metadata;
}
