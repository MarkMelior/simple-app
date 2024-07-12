import { getProject } from '@/entity/project';
import { Header } from '@/widgets';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

export type ProjectPageProps = {
	params: { name: string; category: string };
};

export default async function ProjectPage({ params }: ProjectPageProps) {
	const Project = dynamic(
		() => import(`/projects/${params.category}/${params.name}/page.mdx`),
	);

	const { metadata } = await getProject(params.category, params.name);

	return (
		<>
			<Header
				note={metadata?.note}
				title={metadata?.title}
				description={metadata?.description}
				tags={metadata?.tags}
			/>
			<Project />
		</>
	);
}

export async function generateMetadata({
	params,
}: ProjectPageProps): Promise<Metadata> {
	const { metadata } = await getProject(params.category, params.name);

	return {
		title: `Simple App | ${metadata.title}`,
		description: `${metadata.description}. Technologies: ${metadata.tags?.join(
			', ',
		)}`,
	};
}
