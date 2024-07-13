import { getProjects } from '@/entity/project';
import { getDictionary, getLang } from '@/shared/config';
import { getPathname } from '@/shared/lib';
import Link from 'next/link';
import { FooterNavigation } from './footer-navigation';

export const Footer = async () => {
	const lang = await getLang();
	const pathname = await getPathname({ withoutLang: true });

	const dictionary = await getDictionary();
	const dict = dictionary.ui;

	const projects = await getProjects();

	return (
		<footer className='text-sm leading-6 mt-12'>
			<FooterNavigation dict={dict} projects={projects} />
			<div className='pt-10 pb-10 sm:pb-24 border-t border-default-200 dark:border-default-100 sm:flex text-center justify-between text-default-500'>
				<div className='mb-6 sm:mb-0 sm:flex'>
					<p>{dict['footer-copyright']}</p>
					<p className='sm:ml-4 sm:pl-4 sm:border-l sm:border-default-200 dark:border-default-100'>
						<Link className='hover:text-default-600' href='/'>
							{dict['footer-made']}
						</Link>
					</p>
				</div>
				<Link
					className='hover:text-default-600'
					href={`https://github.com/MarkMelior/simple-app/blob/master${pathname}/${lang}.mdx`}
					target='_blank'
				>
					{dict['footer-edit']}
				</Link>
			</div>
		</footer>
	);
};
