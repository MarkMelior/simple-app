import { getProjects } from '@/entity/project';
import { getDictionary, getLang, Link } from '@/shared/config';
import { getPathname } from '@/shared/lib';
import { FooterNavigation } from './footer-navigation';
import cls from './footer.module.scss';

export const Footer = async () => {
	const lang = await getLang();
	const pathname = await getPathname({ withoutLang: true });

	const dictionary = await getDictionary();
	const dict = dictionary.ui;

	const projects = await getProjects();

	return (
		<footer className='text-sm leading-6 mt-12'>
			<FooterNavigation dict={dict} projects={projects} />
			<div className={cls.content}>
				<div className='mb-6 sm:mb-0 sm:flex'>
					<p>{dict['footer-copyright']}</p>
					<p className='sm:ml-4 sm:pl-4 sm:border-l sm:border-default-200 dark:border-default-100'>
						<Link className='hover:text-default-600 transition' href='/'>
							{dict['footer-made']}
						</Link>
					</p>
				</div>
				{pathname !== '/' && (
					<Link
						className='hover:text-default-600 transition'
						href={`https://github.com/MarkMelior/simple-app/blob/master${pathname}/${lang}.mdx`}
						target='_blank'
					>
						{dict['footer-edit']}
					</Link>
				)}
			</div>
		</footer>
	);
};
