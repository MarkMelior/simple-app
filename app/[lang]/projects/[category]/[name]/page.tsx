import { getProject } from '@/entity/project';
import { MDXComponentsFormat } from '@/mdx-components';
import { rehypeExtractCodeProps } from '@/shared/lib';
import { Header } from '@/widgets';
import { MDXComponents } from 'mdx/types';
import { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import dynamic from 'next/dynamic';
import remarkGfm from 'remark-gfm';

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
				note={metadataCategory?.title}
				noteLink={metadataCategory?.link}
				title={metadata?.title}
				description={metadata?.description}
				tags={metadata?.tags}
			/>
			<MDXRemote
				source={content}
				components={{ ...MDXComponentsFormat, ...customComponents }}
				options={{
					mdxOptions: {
						rehypePlugins: [rehypeExtractCodeProps],
						remarkPlugins: [remarkGfm],
					},
				}}
			/>
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
