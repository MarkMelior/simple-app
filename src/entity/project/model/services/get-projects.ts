import { readdir } from 'fs/promises';
import path from 'path';
import { getProject, ProjectMetadata } from './get-project';

export async function getProjects(): Promise<ProjectMetadata[]> {
	// Retrieve slugs from post routes
	const dir = path.join(process.cwd(), 'projects');
	const slugs = (await readdir(dir, { withFileTypes: true })).filter((dirent) =>
		dirent.isDirectory(),
	);

	// Retrieve metadata from MDX files
	const posts = await Promise.all(
		slugs.map(async ({ name }) => {
			// @ts-ignore // TODO: fix this
			const { metadata } = await getProject(category, name);
			return { slug: name, ...metadata };
		}),
	);

	// Sort posts from newest to oldest
	posts.sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate));

	return posts;
}
