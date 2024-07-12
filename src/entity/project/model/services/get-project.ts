import { StackVariants } from '@/shared/ui';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export interface ProjectMetadata {
	note: string;
	title: string;
	description: string;
	tags?: StackVariants[];
	publishDate: string;
}

export interface Project {
	metadata: ProjectMetadata;
	content: string;
}

export async function getProject(
	category: string,
	name: string,
): Promise<Project> {
	const { metadata: exportedMetadata } = (await import(
		`/projects/${category}/${name}/page.mdx`
	)) as Partial<{
		metadata: ProjectMetadata;
	}>;

	const dir = path.join(process.cwd(), 'projects', category, name, 'page.mdx');
	const mdxFile = fs.readFileSync(dir);
	const matterData = matter(mdxFile);
	const matterMetadata = matterData.data as ProjectMetadata;

	if (!exportedMetadata && !matterMetadata)
		throw new Error(
			`Unable to find metadata in file /projects/${name}/page.mdx`,
		);

	return {
		metadata: exportedMetadata || matterMetadata,
		content: matterData.content,
	};
}
