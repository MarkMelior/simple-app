import { ClientProviders } from '@/app/providers/client-providers';
import '@/app/styles/index.scss';
import { i18n, Locale } from '@/shared/config';
import { FontDefault } from '@/shared/const/fonts';
import { Light, PageLoader } from '@/shared/ui';
import { Footer, Navbar, Sidebar } from '@/widgets';
import type { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
	title: 'Simple App | Mark Melior',
	description: `Small and modern pet-projects. Hi, I'am Mark Melior - Frontend developer.`,
};

export async function generateStaticParams() {
	return i18n.locales.map((locale) => ({ lang: locale }));
}

type Props = {
	children: React.ReactNode;
	params: { lang: Locale };
};

export default async function RootLayout({
	children,
	params,
}: Readonly<Props>) {
	return (
		<html lang={params.lang}>
			<body className={FontDefault.className}>
				<ClientProviders>
					<Suspense
						fallback={
							<>
								<Light />
								<PageLoader fullScreen />
							</>
						}
					>
						<Light />
						<Navbar />
						<div className='overflow-hidden'>
							<div className='max-w-8xl mx-auto px-4 sm:px-6 md:px-8 relative z-20'>
								<Sidebar />
								<div className='lg:pl-[19.5rem]'>
									<div className='max-w-3xl mx-auto pt-10 xl:max-w-none xl:ml-0 min-h-[var(--height-screen)] flex flex-col justify-between'>
										<div>{children}</div>
										<Footer />
									</div>
								</div>
							</div>
						</div>
					</Suspense>
				</ClientProviders>
			</body>
		</html>
	);
}
