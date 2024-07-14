'use server';

import { getPathname } from '@/shared/lib';
import { Locale, i18n } from './i18n.config';

export const getLang = async (): Promise<Locale> => {
	const pathname = await getPathname();

	// // Получаем язык из куки, если она установлена
	// const localeCookie = cookies().get('NEXT_LOCALE')?.value as Locale;

	// // Если куки установлена и язык валиден, возвращаем его
	// if (localeCookie && i18n.locales.includes(localeCookie)) {
	// 	return localeCookie;
	// }

	const segment = pathname.split('/')[1] as Locale;

	// Если сегмент URL валиден, возвращаем его
	if (i18n.locales.includes(segment)) return segment;

	// В противном случае возвращаем язык по умолчанию
	return i18n.defaultLocale;
};
