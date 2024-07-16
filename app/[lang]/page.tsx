import { getLang } from '@/shared/config/i18n';
import { getMdx, MDXRemote } from '@/shared/config/mdx';
import { StackButtons } from '@/shared/ui';
import { Header } from '@/widgets';
import { MDXComponents } from 'mdx/types';
import dynamic from 'next/dynamic';
import path from 'path';

export default async function Home() {
	const lang = await getLang();

	const dir = path.join(process.cwd(), 'app', '[lang]', `home-${lang}.mdx`);
	const mdx = await getMdx(dir);
	const metadata = mdx.metadata;
	const content = mdx.content;

	const components: MDXComponents = {
		StackButtons: dynamic(() =>
			import('@/shared/ui').then((mod) => mod.StackButtons),
		),
	};

	return (
		<>
			<div className='mb-8 z-30 rounded-lg relative overflow-hidden select-none pointer-events-none'>
				<img src={'/images/banner.jpg'} alt='Banner' />
			</div>
			<Header
				note={metadata.note}
				title={metadata.title}
				description={metadata.description}
			/>
			<MDXRemote source={content} components={components} />
			<StackButtons tags={['TypeScript', 'Next.js', 'RTK Query']} />
		</>
	);
}
