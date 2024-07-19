import { cn } from '@/shared/lib';
import { CodeBlock, Heading, LinkHover, StackVariants } from '@/shared/ui';
import { Code } from '@nextui-org/react';
import type { MDXComponents } from 'mdx/types';
import { ComponentPropsWithoutRef } from 'react';
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
						'bg-default-200/50 py-0 px-1 h-fit rounded-md -top-0.5 select-text min-w-fit border border-default-200 text-default-700 !leading-5',
						// 'text-[0.85rem]',
						// FontCode.className,
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
	a: ({ href, children, ...props }: ComponentPropsWithoutRef<'a'>) => {
		return (
			<LinkHover href={href} {...props}>
				{children}
			</LinkHover>
		);
	},
	h2: ({ children, ...props }: ComponentPropsWithoutRef<'h2'>) => (
		<Heading
			Tag='h2'
			className='text-xl font-bold -mt-[calc(var(--height-navbar) - 2rem)] mb-6'
			{...props}
		>
			{children}
		</Heading>
	),
	h3: ({ children, ...props }: ComponentPropsWithoutRef<'h3'>) => (
		<Heading
			Tag='h3'
			className='text-lg font-semibold -mt-[calc(var(--height-navbar) - 1.5rem)] mb-4'
			{...props}
		>
			{children}
		</Heading>
	),
	h4: ({ children, ...props }: ComponentPropsWithoutRef<'h4'>) => (
		<Heading
			Tag='h4'
			className='font-medium -mt-[calc(var(--height-navbar) - 1.5rem)] mb-4'
			{...props}
		>
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
