import { getDictionary } from '@/shared/config/i18n';

export default async function NotFound() {
	const dictionary = await getDictionary();

	return <>{dictionary['ui']['page-not-found']}</>;
}
