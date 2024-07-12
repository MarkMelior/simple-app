'use server';

import { headers } from 'next/headers';
import NextLink, { LinkProps } from 'next/link';

// TODO
export const Link = ({
	children,
	...props
}: LinkProps & { children: React.ReactNode }) => {
	const { href, ...rest } = props;

	const headersList = headers();
	const lang = headersList.get('x-lang') || '';

	return (
		<NextLink {...rest} hrefLang={lang} href={`/${lang}${href}`}>
			{children}
		</NextLink>
	);
};
