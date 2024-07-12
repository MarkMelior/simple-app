import { getProjectsByCategory } from '@/entity/project';

export type ProjectCategoryPageProps = {
	params: { category: string };
};

export default async function ProjectCategoryPage({
	params,
}: ProjectCategoryPageProps) {
	const projects = await getProjectsByCategory(params.category);

	return (
		<>
			{projects.map(({ title }) => (
				<></>
			))}
		</>
	);
}

// todo
// export async function generateMetadata({
// 	params,
// }: ProjectCategoryPageProps): Promise<Metadata> {
// 	const { metadata } = await getProject(params.category, params.name);

// 	return {
// 		title: `Simple App | ${metadata.title}`,
// 		description: `${metadata.description}. Technologies: ${metadata.tags?.join(
// 			', ',
// 		)}`,
// 	};
// }
