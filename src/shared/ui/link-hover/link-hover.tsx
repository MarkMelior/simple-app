import Link from 'next/link';
import { FiLink } from 'react-icons/fi';
import { MdArrowOutward } from 'react-icons/md';
import cls from './link-hover.module.scss';

export const LinkHover = ({
	children,
	href,
	isTitle,
}: {
	children: React.ReactNode;
	href?: string;
	isTitle?: boolean;
}) => {
	if (isTitle) {
		return (
			<Link
				className='group relative border-none lg:-ml-2 lg:pl-2'
				href={href || ''}
			>
				<span className='absolute -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 group-focus:opacity-100 lg:flex transition-opacity duration-150'>
					<span className='mt-0.5 flex h-6 w-6 items-center justify-center rounded-md text-default-500 shadow-sm ring-1 bg-default-100 hover:bg-default-200 ring-default-900/10 hover:text-default-600 hover:shadow hover:ring-default-900/10 dark:shadow-none'>
						<FiLink size={16} />
					</span>
				</span>
				{children}
			</Link>
		);
	}

	return (
		<Link className={cls.link} href={href || ''} target='_blank'>
			{children}
			<MdArrowOutward size={12} />
		</Link>
	);
};
