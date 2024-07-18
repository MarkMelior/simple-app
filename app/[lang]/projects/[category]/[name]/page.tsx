import { getProject } from '@/entity/project';
import { MDXRemote } from '@/shared/config/mdx';
import { Header, Headlines } from '@/widgets';
import { MDXComponents } from 'mdx/types';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

export type ProjectPageProps = {
	params: { name: string; category: string };
};

export default async function ProjectPage({ params }: ProjectPageProps) {
	const { metadata, content, metadataCategory, headlines } = await getProject(
		params.category,
		params.name,
	);

	const components: MDXComponents = {
		AuthExample: dynamic(() =>
			import('@/projects/best-practice/app-router-auth/examples/auth').then(
				(mod) => mod.AuthExample,
			),
		),
	};

	return (
		<>
			{/* <div className='grid lg:grid-cols-[1fr,14rem] gap-10'>
				<div> */}
			<Header
				note={metadata?.note || metadataCategory?.title}
				noteLink={metadata?.note || metadataCategory?.link}
				title={metadata?.title}
				description={metadata?.description}
				tags={metadata?.tags}
			/>
			<MDXRemote source={content} components={components} />
			<Headlines headlines={headlines} />
			{/* </div>
				<div className='sticky top-[var(--height-navbar)] h-screen'>
					<ul>
						{headlines.map(({ depth, title, href }) => (
							<li key={title}>
								<Link href={href}>{title}</Link>
							</li>
						))}
					</ul>
				</div>
			</div> */}
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
