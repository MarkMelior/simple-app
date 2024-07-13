'use server';

import { getPathname } from '@/shared/lib';
import { Locale, i18n } from './i18n.config';

export const getLang = async (): Promise<Locale> => {
	const pathname = await getPathname();

	const segment = pathname.split('/')[1] as Locale;

	if (i18n.locales.includes(segment)) return segment;

	return i18n.defaultLocale;
};
