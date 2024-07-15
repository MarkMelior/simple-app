import { getDictionary } from '@/shared/config';

export default async function NotFound() {
	const dictionary = await getDictionary();

	return <>{dictionary['ui']['page-not-found']}</>;
}
