import { getLang, MDXRemote } from '@/shared/config';
import { getMdx } from '@/shared/lib';
import { StackButtons } from '@/shared/ui';
import { Header } from '@/widgets';
import path from 'path';

export default async function Home() {
	const lang = await getLang();

	const dir = path.join(process.cwd(), 'app', '[lang]', `home-${lang}.mdx`);
	const mdx = await getMdx(dir);
	const metadata = mdx.metadata;
	const content = mdx.content;

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
			<MDXRemote source={content} />
			<StackButtons tags={['TypeScript', 'Next.js', 'SSR', 'Markdown']} />
		</>
	);
}
