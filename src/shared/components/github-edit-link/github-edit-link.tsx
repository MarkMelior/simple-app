'use client';

import { Dictionary, i18n, Link, Locale } from '@/shared/config/i18n';
import { cn } from '@/shared/lib';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

interface GithubEditLinkProps {
	dict?: Dictionary['ui'];
	lang: Locale;
	className?: string;
}

export const GithubEditLink: FC<GithubEditLinkProps> = ({
	dict,
	lang,
	className,
}) => {
	const pathname = usePathname();

	if (
		pathname === '/' ||
		i18n.locales.includes(pathname.split('/')[1] as Locale) ||
		!dict
	)
		return null;

	const hrefGithub = `https://github.com/MarkMelior/simple-app/blob/master${pathname}/${lang}.mdx`;

	// const hrefHomePage = `https://github.com/MarkMelior/simple-app/blob/master/app/[lang]/page.tsx`;

	return (
		<Link
			target='_blank'
			href={hrefGithub}
			className={cn('hover:text-default-600 transition', className)}
		>
			{dict['footer-edit']}
		</Link>
	);
};
