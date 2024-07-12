import { Locale } from '@/shared/config';
import { Header } from '@/widgets';
import { getDictionary } from '../../src/shared/config/i18n/dictionaries';

export default async function Home({
	params: { lang },
}: {
	params: { lang: Locale };
}) {
	const dictionary = await getDictionary(lang);
	const { description, note, title } = dictionary['home-page'];

	return (
		<>
			<Header note={note} title={title} description={description} />
		</>
	);
}
