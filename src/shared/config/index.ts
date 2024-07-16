import { Dictionary, getDictionary } from './i18n/dictionaries';
import { getLang } from './i18n/get-lang';
import { i18n, Locale } from './i18n/i18n.config';
import { Link } from './i18n/link';
import { useDictionary } from './i18n/use-dictionary';
import { useLang } from './i18n/use-lang';
import { MDXComponentsData } from './mdx/mdx-components';
import { MDXRemote } from './mdx/mdx-remote';

export {
	getDictionary,
	getLang,
	i18n,
	Link,
	MDXComponentsData,
	MDXRemote,
	useDictionary,
	useLang,
};
export type { Dictionary, Locale };
