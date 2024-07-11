import { cn, toKebabCase, toLatin } from '@/shared/lib';
import Link from 'next/link';
import { FC } from 'react';

interface TextProps {
	children: React.ReactNode;
	className?: string;
	variant?: 'h2' | 'h3';
}

export const Text: FC<TextProps> = ({ children, variant, className }) => {
	if (variant === 'h2') {
		if (typeof children !== 'string') {
			throw new Error('Text for "h2" must be a string');
		}

		const id = toKebabCase(toLatin(children));

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
								<svg width='12' height='12' fill='none' aria-hidden='true'>
									<path
										d='M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10'
										stroke='currentColor'
										strokeWidth='1.5'
										strokeLinecap='round'
									/>
								</svg>
							</span>
						</span>
						{children}
					</Link>
				</h2>
			</>
		);
	}

	return (
		<p className={cn('text-default-600 my-5 leading-7', className)}>
			{children}
		</p>
	);
};
