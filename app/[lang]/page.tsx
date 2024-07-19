import { getProjectsByCategory } from '@/entity/project';
import { getLang } from '@/shared/config/i18n';
import { getMdx, MDXRemote } from '@/shared/config/mdx';
import { CategoryCard, Header, Headlines } from '@/widgets';
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

	const { projects } = await getProjectsByCategory('best-practice');

	return (
		<div>
			<div className='mb-8'>
				<div className='z-30 rounded-lg relative overflow-hidden select-none pointer-events-none'>
					<img
						src='/images/banner.jpg'
						alt='Banner'
						className='object-cover min-w-full min-h-32 xl:h-full'
					/>
				</div>
				{/* <Blackhole flip /> */}
			</div>
			<div className='flex flex-col md:flex-row gap-8 justify-between items-center'>
				<Header
					note={metadata.note}
					title={metadata.title}
					description={metadata.description}
					className='mb-0'
					isCenter='md'
					classNames={{
						description: 'mt-4 text-[1.075rem]',
					}}
				/>
				<img
					src='/images/heart.png'
					alt='3д модель сердца'
					className='max-w-36 md:max-w-48 z-20 select-none pointer-events-none'
				/>
			</div>
			<CategoryCard projects={projects.slice(0, 4)} className='mt-6' />
			<MDXRemote source={content} components={components} />
			<Headlines headlines={headlines} />
		</div>
	);
}
