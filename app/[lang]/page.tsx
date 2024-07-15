import { getDictionary } from '@/shared/config';
import { StackButtons } from '@/shared/ui';
import { Header } from '@/widgets';

export default async function Home() {
	const dictionary = await getDictionary();
	const { description, note, title } = dictionary['home-page'];

	return (
		<>
			<Header note={note} title={title} description={description} />
			<StackButtons tags={['TypeScript', 'Next.js', 'SSR', 'Markdown']} />
		</>
	);
}
