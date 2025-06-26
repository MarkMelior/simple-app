import {
  Blockquote,
  Code,
  Heading,
  LinkHover,
} from '@/shared/ui';
import { CodeBlock } from '@/shared/ui/client';

import { cn } from '../common';

import type { MDXComponents } from 'mdx/types';
import type { ComponentPropsWithoutRef, HTMLAttributes } from 'react';

interface ExtendedCodeProps extends HTMLAttributes<HTMLElement> {
  exampleLink?: string
  filename?: string
  hideHeader?: boolean
}

export const MDXComponentsData: MDXComponents = {
  a: ({ children, href, ...props }: ComponentPropsWithoutRef<'a'>) => (
    <LinkHover href={href} {...props}>
      {children}
    </LinkHover>
  ),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  blockquote: ({ children, className, color, ...props }: ComponentPropsWithoutRef<'blockquote'>) => (
    <Blockquote className={cn('mb-12 mt-5 py-0', className)} {...props}>
      {children}
    </Blockquote>
  ),
  code: async ({ children, className, exampleLink, ...props }: ExtendedCodeProps) => {
    const match = /language-(\w+)/.exec(className || '');

    if (!match) {
      return (
        <Code
          className={cn(
            'bg-default-200/50 text-[0.8rem] py-[0.075rem] px-1 h-fit rounded-md select-text min-w-fit border border-default-200 text-default-700 !leading-5 break-all whitespace-normal top-[-0.0825rem] relative',
          )}
        >
          {children}
        </Code>
      );
    }

    return (
      <CodeBlock
        className="mb-10 mt-4"
        exampleLink={exampleLink}
        // @ts-expect-error as StackVariants
        lang={match[1]}
        text={String(children)}
        {...props}
      />
    );
  },
  h2: ({ children, ...props }: ComponentPropsWithoutRef<'h2'>) => (
    <Heading
      className="mt-[-calc(h-articlesNavbar - 2rem)] mb-6 text-xl font-bold"
      Tag="h2"
      {...props}
    >
      {children}
    </Heading>
  ),
  h3: ({ children, ...props }: ComponentPropsWithoutRef<'h3'>) => (
    <Heading
      className="mt-[-calc(h-articlesNavbar - 1.5rem)] mb-4 text-lg font-semibold"
      Tag="h3"
      {...props}
    >
      {children}
    </Heading>
  ),
  h4: ({ children, ...props }: ComponentPropsWithoutRef<'h4'>) => (
    <Heading
      className="mt-[-calc(h-articlesNavbar - 1.5rem)] mb-4 font-medium"
      Tag="h4"
      {...props}
    >
      {children}
    </Heading>
  ),
  hr: () => <hr className="my-12 border-default-100" />,
  img: ({ alt, className, src, ...props }: ComponentPropsWithoutRef<'img'>) => (

    <img
      alt={alt}
      className={cn(
        'rounded-md select-none pointer-events-none w-full object-cover mt-4 mb-10',
        className,
      )}
      src={src}
      {...props}
    />
  ),
  ol: ({ children, className }: ComponentPropsWithoutRef<'ol'>) => (
    <ol
      className={cn(
        'text-default-600 my-5 leading-7 list-decimal marker:text-default-500 list-inside',
        className,
      )}
    >
      {children}
    </ol>
  ),
  p: ({ children, className }: ComponentPropsWithoutRef<'p'>) => (
    <p className={cn('text-default-600 my-5 leading-7', className)}>
      {children}
    </p>
  ),
  strong: ({ children, ...props }: ComponentPropsWithoutRef<'strong'>) => (
    <strong className="text-default-800" {...props}>
      {children}
    </strong>
  ),
  ul: ({ children, className }: ComponentPropsWithoutRef<'ul'>) => (
    <ul
      className={cn(
        'text-default-600 my-5 leading-7 list-disc marker:text-default-200 list-inside',
        className,
      )}
    >
      {children}
    </ul>
  ),
};
