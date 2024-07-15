import { getProjects } from '@/entity/project';
import { getDictionary, getLang, Link } from '@/shared/config';
import { GlowingLine } from '@/shared/ui';
import { FooterGithubLink } from './footer-github-link';
import { FooterNavigation } from './footer-navigation';
import cls from './footer.module.scss';

export const Footer = async () => {
	const lang = await getLang();

	const dictionary = await getDictionary();
	const dict = dictionary.ui;

	const projects = await getProjects();

	return (
		<footer className='text-sm leading-6 mt-12'>
			<FooterNavigation dict={dict} projects={projects} />
			{/* <GlowingBox
				classNames={{
					common: 'rounded-xl',
					border:
						'pt-[1px] mt-10 mb-10 sm:mb-20 bg-default-300/15 hover:bg-default-300/30 sm:flex text-center justify-between text-default-500',
					background: cls.content,
				}}
			> */}
			<div className={cls.content}>
				<GlowingLine />
				<div className='mb-6 sm:mb-0 sm:flex py-6 px-8'>
					<p>{dict['footer-copyright']}</p>
					<p className='sm:ml-4 sm:pl-4 sm:border-l sm:border-default-200 dark:border-default-100'>
						<Link className='hover:text-default-600 transition' href='/'>
							{dict['footer-made']}
						</Link>
					</p>
				</div>
				<FooterGithubLink dict={dict} lang={lang} />
			</div>
			{/* </GlowingBox> */}
		</footer>
	);
};
