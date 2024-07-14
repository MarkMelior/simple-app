'use client';

import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { FC } from 'react';
import { UrlObject } from 'url';
import { i18n } from './i18n.config';
import { useLang } from './use-lang';

interface LinkProps extends NextLinkProps {
	children: React.ReactNode;
}

const isExternalLink = (href: string | UrlObject): boolean => {
	return (
		typeof href === 'string' &&
		(href.startsWith('http://') || href.startsWith('https://'))
	);
};

const getLocalizedHref = (
	href: string | UrlObject,
	lang: string,
	defaultLocale: string,
): string | UrlObject => {
	if (isExternalLink(href) || typeof href !== 'string') {
		return href;
	}
	return lang === defaultLocale ? href : `/${lang}${href}`;
};

export const Link: FC<
	Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
		LinkProps & {
			children?: React.ReactNode;
		} & React.RefAttributes<HTMLAnchorElement>
> = ({ children, href, ...props }) => {
	const lang = useLang();

	const localizedHref = getLocalizedHref(href, lang, i18n.defaultLocale);

	return (
		<NextLink {...props} href={localizedHref}>
			{children}
		</NextLink>
	);
};
