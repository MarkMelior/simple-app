import { getLang } from '@/shared/config/i18n';
import { getMdx, MDXRemote } from '@/shared/config/mdx';
import { StackButtons } from '@/shared/ui';
import { Header, Headlines } from '@/widgets';
import { MDXComponents } from 'mdx/types';
import dynamic from 'next/dynamic';
import path from 'path';

export default async function Home() {
	const lang = await getLang();

	const dir = path.join(process.cwd(), 'app', `home-${lang}.mdx`);
	const { metadata, content, headlines } = await getMdx(dir);

	const components: MDXComponents = {
		StackButtons: dynamic(() =>
			import('@/shared/ui').then((mod) => mod.StackButtons),
		),
	};

	return (
		<>
			<div className='mb-8 z-30 rounded-lg relative overflow-hidden select-none pointer-events-none'>
				<img src='/images/banner.jpg' alt='Banner' />
			</div>
			<Header
				note={metadata.note}
				title={metadata.title}
				description={metadata.description}
				isCenter
				classNames={{ description: 'mt-4 text-[1.075rem] md:w-[75%] mx-auto' }}
			/>
			<MDXRemote source={content} components={components} />
			<Headlines headlines={headlines} />
			<StackButtons
				tags={[
					'TypeScript',
					'Next.js',
					// 'React',
					// 'Redux Toolkit',
					// 'Scss',
					// 'Tailwind',
				]}
			/>
		</>
	);
}
