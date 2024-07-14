'use client';

import { useEffect, useState } from 'react';
import { Dictionary } from './dictionaries';
import { Locale } from './i18n.config';
import { useLang } from './use-lang';

export const useDictionary = (locale?: Locale): Dictionary | undefined => {
	const dictionaries = {
		en: () => import('./dictionaries/en.json').then((module) => module.default),
		ru: () => import('./dictionaries/ru.json').then((module) => module.default),
	};

	const [dict, setDict] = useState<Dictionary>();

	const lang = useLang();

	useEffect(() => {
		dictionaries[locale || lang]?.().then(setDict);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [lang, locale]);

	return dict as Dictionary;
};

// * The main logic is in getDictionary()
// ! There are a lot of requests to the server
// export const useDictionary = (locale?: Locale): Dictionary | undefined => {
// 	const [dict, setDict] = useState<Dictionary>();
// 	const lang = useLang();

// 	useEffect(() => {
// 		getDictionary().then(setDict);
// 	}, [lang, locale]);

// 	return dict;
// };
