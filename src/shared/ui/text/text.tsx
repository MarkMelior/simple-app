import { Link } from '@/shared/config/i18n';
import { cn, toKebabCase, toLatin } from '@/shared/lib';
import { ComponentPropsWithoutRef } from 'react';
import { FiLink } from 'react-icons/fi';

export const Text = {
	p: ({ children, className }: ComponentPropsWithoutRef<'p'>) => {
		return (
			<p className={cn('text-default-600 my-5 leading-7', className)}>
				{children}
			</p>
		);
	},
	h2: ({ children }: ComponentPropsWithoutRef<'h2'>) => {
		const text = String(children);
		const id = toKebabCase(toLatin(text));

		return (
			<>
				<hr className='my-12 border-default-100' />
				<h2
					className='flex whitespace-pre-wrap text-xl font-bold mb-6 relative pt-24 -mt-24'
					id={id}
				>
					<Link
						className='group relative border-none lg:-ml-2 lg:pl-2'
						href={`#${id}`}
					>
						<span className='absolute -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 group-focus:opacity-100 lg:flex'>
							<span className='mt-0.5 flex h-6 w-6 items-center justify-center rounded-md text-default-500 shadow-sm ring-1 bg-default-100 hover:bg-default-200 ring-default-900/10 hover:text-default-600 hover:shadow hover:ring-default-900/10 dark:shadow-none'>
								<FiLink size={16} />
							</span>
						</span>
						{children}
					</Link>
				</h2>
			</>
		);
	},
	hr: () => <hr className='my-12 border-default-100' />,
	ul: ({ children, className }: ComponentPropsWithoutRef<'ul'>) => {
		return (
			<ul
				className={cn(
					'text-default-600 my-5 leading-6 list-disc marker:text-default-200 list-inside',
					className,
				)}
			>
				{children}
			</ul>
		);
	},
};
