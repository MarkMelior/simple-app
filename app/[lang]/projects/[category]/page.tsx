import { getProjectsByCategory } from '@/entity/project';
import { Metadata } from 'next';
import Link from 'next/link';

export type ProjectCategoryPageProps = {
	params: { category: string };
};

export default async function ProjectCategoryPage({
	params,
}: ProjectCategoryPageProps) {
	const { projects, category } = await getProjectsByCategory(params.category);

	return (
		<>
			<h1>{category.title}</h1>

			<p>Projects:</p>
			{projects.map((project) => (
				<>
					<Link href={project.link} key={project.title}>
						{project.title} - {project.description}
					</Link>
				</>
			))}
		</>
	);
}

export async function generateMetadata({
	params,
}: ProjectCategoryPageProps): Promise<Metadata> {
	const { category, projects } = await getProjectsByCategory(params.category);

	return {
		title: `Simple App | ${category.title}`,
		description: `Category: ${category.title}. Projects: ${projects
			.map((project) => project.title)
			.join(', ')}.`,
	};
}
