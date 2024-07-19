import { getProjectsByCategory } from '@/entity/project';
import { getDictionary } from '@/shared/config/i18n';
import { CategoryCard, Header } from '@/widgets';
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
		<div>
			<Header
				note={dict.ui['category-note']}
				title={category.title}
				description={dict.ui['category-description']}
			/>

			<CategoryCard projects={projects} />
		</div>
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
