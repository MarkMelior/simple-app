'use client';

import { Dictionary, i18n, Link, Locale } from '@/shared/config';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

interface FooterGithubLinkProps {
	dict: Dictionary['ui'];
	lang: Locale;
}

export const FooterGithubLink: FC<FooterGithubLinkProps> = ({ dict, lang }) => {
	const pathname = usePathname();

	if (
		pathname === '/' ||
		i18n.locales.includes(pathname.split('/')[1] as Locale)
	)
		return null;

	const hrefGithub = `https://github.com/MarkMelior/simple-app/blob/master${pathname}/${lang}.mdx`;

	// const hrefHomePage = `https://github.com/MarkMelior/simple-app/blob/master/app/[lang]/page.tsx`;

	return (
		<Link
			target='_blank'
			href={hrefGithub}
			className='hover:text-default-600 transition'
		>
			{dict['footer-edit']}
		</Link>
	);
};
