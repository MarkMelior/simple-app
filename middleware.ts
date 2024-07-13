import { i18n } from '@/shared/config';
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;

	const requestHeaders = new Headers(request.headers);
	requestHeaders.set('x-url', request.url);

	// `/_next/` and `/api/` are ignored by the watcher, but we need to ignore files in `public` manually
	if (
		[
			'/images/light.avif',
			'/images/noise.png',
			'/images/light-dark.avif',
			'/favicon.ico',
		].includes(pathname)
	) {
		return;
	}

	if (
		pathname.startsWith(`/${i18n.defaultLocale}/`) ||
		pathname === `/${i18n.defaultLocale}`
	) {
		// The incoming request is for /en/whatever, so we'll reDIRECT to /whatever
		return NextResponse.redirect(
			new URL(
				pathname.replace(
					`/${i18n.defaultLocale}`,
					pathname === `/${i18n.defaultLocale}` ? '/' : '',
				),
				request.url,
			),
			{
				headers: requestHeaders,
			},
		);
	}

	const pathnameIsMissingLocale = i18n.locales.every(
		(locale) =>
			!pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
	);

	if (pathnameIsMissingLocale) {
		// Now for EITHER /en or /nl (for example) we're going to tell Next.js that the request is for /en/whatever
		// or /nl/whatever, and then reWRITE the request to that it is handled properly.
		return NextResponse.rewrite(
			new URL(
				`/${i18n.defaultLocale}${pathname}${request.nextUrl.search}`,
				request.nextUrl.href,
			),
			{
				request: {
					headers: requestHeaders,
				},
			},
		);
	}

	return NextResponse.next({
		request: {
			headers: requestHeaders,
		},
	});
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
