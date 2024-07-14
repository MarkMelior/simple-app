import { getProjectsByCategory } from '@/entity/project';
import { getDictionary, Link } from '@/shared/config';
import { Header } from '@/widgets';
import { Metadata } from 'next';

export type ProjectCategoryPageProps = {
	params: { category: string };
};

export default async function ProjectCategoryPage({
	params,
}: ProjectCategoryPageProps) {
	const { projects, category } = await getProjectsByCategory(params.category);
	const dict = await getDictionary();

	return (
		<>
			<Header
				note={dict.ui['category-note']}
				title={category.title}
				description={dict.ui['category-description']}
			/>

			<div className='grid grid-cols-2 gap-4'>
				{projects.map((project) => (
					<Link
						href={project.link}
						key={project.title}
						className='px-6 py-4 bg-default-100 hover:bg-default-100/50 border border-default-200 hover:border-default-300 rounded-md flex flex-col gap-2 transition active:scale-[0.98]'
					>
						{project.title}
						<span className='text-default-600 text-sm'>
							{project.description}
						</span>
					</Link>
				))}
			</div>
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
