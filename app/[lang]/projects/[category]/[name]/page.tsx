import { getProject } from '@/entity/project';
import { LocaleSwitcher } from '@/features';
import { getDictionary } from '@/shared/config/i18n';
import { MDXRemote } from '@/shared/config/mdx';
import { Header, Headlines } from '@/widgets';
import { MDXComponents } from 'mdx/types';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

export type ProjectPageProps = {
	params: { name: string; category: string };
};

export default async function ProjectPage({ params }: ProjectPageProps) {
	const dict = await getDictionary();

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
		CodeSteps: dynamic(() => import('@/widgets').then((mod) => mod.CodeSteps)),
		Blockquote: dynamic(() =>
			import('@/shared/ui').then((mod) => mod.Blockquote),
		),
	};

	if (!content) {
		return (
			<div className='text-danger-500 w-full h-full flex flex-col text-center items-center justify-center gap-6'>
				{dict.ui['error-not-translate']}
				<LocaleSwitcher dict={dict.ui} likeButton variant='solid' />
			</div>
		);
	}

	return (
		<div>
			<Header
				note={metadata?.note || metadataCategory?.title}
				noteLink={metadata?.note || metadataCategory?.link}
				title={metadata?.title}
				description={metadata?.description}
				tags={metadata?.tags}
			/>
			<MDXRemote source={content} components={components} />
			<Headlines headlines={headlines} />
		</div>
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
