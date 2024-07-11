import { getProjectData } from '@/entity/project';
import { Header } from '@/widgets';
import dynamic from 'next/dynamic';

export type ProjectPageProps = {
	params: { name: string };
};

export default async function ProjectPage({ params }: ProjectPageProps) {
	const Project = dynamic(() => import(`/projects/${params.name}/page.mdx`));

	const metadata = await getProjectData(params.name);

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
