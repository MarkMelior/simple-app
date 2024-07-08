import { ClientProviders } from '@/app/providers/client-providers';
import '@/app/styles/index.scss';
import { PageLoader } from '@/shared/ui';
import { Footer, Light, Navbar, Sidebar } from '@/widgets';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Suspense } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Simple App: Mark Melior',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Suspense fallback={<PageLoader fullScreen />}>
					<ClientProviders>
						<AntdRegistry>
							<Light />
							<Navbar />
							<div className='overflow-hidden'>
								<div className='max-w-8xl mx-auto px-4 sm:px-6 md:px-8'>
									<Sidebar />
									<div className='lg:pl-[19.5rem]'>
										<div className='max-w-3xl mx-auto pt-10 xl:max-w-none xl:ml-0'>
											{children}
											<Footer />
										</div>
									</div>
								</div>
							</div>
						</AntdRegistry>
					</ClientProviders>
				</Suspense>
			</body>
		</html>
	);
}
