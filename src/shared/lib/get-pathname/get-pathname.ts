'use server';

import { i18n, Locale } from '@/shared/config';
import { headers } from 'next/headers';

interface GetPathnameProps {
	withoutLang?: boolean;
}

export const getPathname = async ({ withoutLang }: GetPathnameProps = {}) => {
	const headersList = headers();
	const fullUrl = headersList.get('x-url') || '';

	const url = new URL(fullUrl);
	const pathname = url.pathname;

	if (withoutLang) {
		const segment = pathname.split('/')[1] as Locale;

		if (i18n.locales.includes(segment)) {
			return `/${pathname.split('/').slice(2).join('/')}`;
		}
	}

	return pathname;
};
