'use client';

import { usePathname } from 'next/navigation';
import { Locale, i18n } from './i18n.config';

export const useLang = (): Locale => {
	const pathname = usePathname();

	const segment = pathname.split('/')[1] as Locale;

	if (i18n.locales.includes(segment)) return segment;

	return i18n.defaultLocale;
};

// * The main logic is in getLang()
// ! There are a lot of requests to the server
// export const useLang = (): Locale => {
// 	const [lang, setLang] = useState<Locale>(i18n.defaultLocale);

// 	useEffect(() => {
// 		getLang().then(setLang);
// 	}, []);

// 	return lang;
// };
