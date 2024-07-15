'use client';

import { Dictionary, Link, Locale } from '@/shared/config';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

interface FooterGithubLinkProps {
	dict: Dictionary['ui'];
	lang: Locale;
}

export const FooterGithubLink: FC<FooterGithubLinkProps> = async ({
	dict,
	lang,
}) => {
	const pathname = usePathname();

	if (pathname === '/') return null;

	const hrefGithub = `https://github.com/MarkMelior/simple-app/blob/master${pathname}/${lang}.mdx`;

	const hrefHomePage = `https://github.com/MarkMelior`;

	return (
		<Link
			className='hover:text-default-600 transition'
			href={hrefGithub}
			target='_blank'
		>
			{dict['footer-edit']}
		</Link>
	);
};
