import { getProject } from '@/entity/project';
import { MDXRemote } from '@/shared/config';
import { Header } from '@/widgets';
import { MDXComponents } from 'mdx/types';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

export type ProjectPageProps = {
	params: { name: string; category: string };
};

export default async function ProjectPage({ params }: ProjectPageProps) {
	const { metadata, content, metadataCategory } = await getProject(
		params.category,
		params.name,
	);

	const customComponents: MDXComponents = {
		AuthExample: dynamic(() =>
			import('@/projects/best-practice/app-router-auth/examples/auth').then(
				(mod) => mod.AuthExample,
			),
		),
	};

	return (
		<>
			<Header
				note={metadata?.note || metadataCategory?.title}
				noteLink={metadata?.note || metadataCategory?.link}
				title={metadata?.title}
				description={metadata?.description}
				tags={metadata?.tags}
			/>
			<MDXRemote source={content} components={customComponents} />
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
