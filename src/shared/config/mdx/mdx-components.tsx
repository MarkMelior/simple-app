import { Link } from '@/shared/config/i18n';
import { FontCode } from '@/shared/const/fonts';
import { cleanText, cn, toKebabCase } from '@/shared/lib';
import { CodeBlock, StackVariants } from '@/shared/ui';
import { Code } from '@nextui-org/react';
import type { MDXComponents } from 'mdx/types';
import { ComponentPropsWithoutRef } from 'react';
import { FiLink } from 'react-icons/fi';
import { MdArrowOutward } from 'react-icons/md';
import { getDictionary } from '../i18n/dictionaries';

interface ExtendedCodeProps extends React.HTMLAttributes<HTMLElement> {
	filename?: string;
	githubPath?: string;
	hideHeader?: boolean;
}

export const MDXComponentsData: MDXComponents = {
	code: async (props: ExtendedCodeProps) => {
		const { children, className, ...rest } = props;
		const match = /language-(\w+)/.exec(className || '');
		const dict = await getDictionary();

		if (!match) {
			return (
				<Code
					className={cn(
						'bg-default-200/50 py-0 px-1 h-fit rounded-md -top-0.5 select-text min-w-fit border border-default-200 text-default-700 !leading-5 text-[0.85rem]',
						FontCode.className,
					)}
				>
					{children}
				</Code>
			);
		}

		return (
			<CodeBlock
				text={String(children)}
				language={match[1] as StackVariants}
				fileName={props?.filename}
				hideHeader={props?.hideHeader}
				dict={dict.ui}
				github={{
					path: props?.githubPath,
				}}
				{...rest}
			/>
		);
	},
	p: ({ children, className }: ComponentPropsWithoutRef<'p'>) => {
		return (
			<p className={cn('text-default-600 my-5 leading-7', className)}>
				{children}
			</p>
		);
	},
	a: ({ href, children }: ComponentPropsWithoutRef<'a'>) => {
		return (
			<Link
				className='text-primary-500 hover:text-primary-400 transition-colors inline-flex leading-4'
				href={href || ''}
				target='_blank'
			>
				{children}
				<MdArrowOutward size={12} />
			</Link>
		);
	},
	h2: ({ children, ...props }: ComponentPropsWithoutRef<'h2'>) => (
		<Heading Tag='h2' className='text-xl font-bold mt-8 mb-6' {...props}>
			{children}
		</Heading>
	),
	h3: ({ children, ...props }: ComponentPropsWithoutRef<'h3'>) => (
		<Heading Tag='h3' className='text-lg font-semibold mt-6 mb-4' {...props}>
			{children}
		</Heading>
	),
	h4: ({ children, ...props }: ComponentPropsWithoutRef<'h4'>) => (
		<Heading Tag='h4' className='font-medium mt-6 mb-4' {...props}>
			{children}
		</Heading>
	),
	hr: () => <hr className='my-12 border-default-100' />,
	ul: ({ children, className }: ComponentPropsWithoutRef<'ul'>) => {
		return (
			<ul
				className={cn(
					'text-default-600 my-5 leading-7 list-disc marker:text-default-200 list-inside',
					className,
				)}
			>
				{children}
			</ul>
		);
	},
	ol: ({ children, className }: ComponentPropsWithoutRef<'ol'>) => {
		return (
			<ol
				className={cn(
					'text-default-600 my-5 leading-7 list-decimal marker:text-default-500 list-inside',
					className,
				)}
			>
				{children}
			</ol>
		);
	},
};

function Heading({
	children,
	className,
	Tag,
}: {
	children: React.ReactNode;
	className?: string;
	Tag: keyof JSX.IntrinsicElements;
}) {
	const text = String(children);
	const id = toKebabCase(cleanText(text));

	return (
		<Tag
			className={cn(
				'whitespace-pre-wrap relative text-default-900',
				// 'pt-[var(--height-navbar)] -mt-[var(--height-navbar)]', // todo отступ для якорной ссылки
				className,
			)}
			id={id}
		>
			<Link
				className='group relative border-none lg:-ml-2 lg:pl-2'
				href={`#${id}`}
			>
				<span className='absolute -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 group-focus:opacity-100 lg:flex transition-opacity duration-150'>
					<span className='mt-0.5 flex h-6 w-6 items-center justify-center rounded-md text-default-500 shadow-sm ring-1 bg-default-100 hover:bg-default-200 ring-default-900/10 hover:text-default-600 hover:shadow hover:ring-default-900/10 dark:shadow-none'>
						<FiLink size={16} />
					</span>
				</span>
				{children}
			</Link>
		</Tag>
	);
}
