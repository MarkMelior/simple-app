import {
  Blockquote,
  Code,
  Heading,
  LinkHover,
} from '@/shared/ui';
import { CodeBlock } from '@/shared/ui/client';

import { cn } from '../react';

import type { MDXComponents } from 'mdx/types';
import type { ComponentPropsWithoutRef } from 'react';

interface ExtendedCodeProps extends React.HTMLAttributes<HTMLElement> {
  filename?: string
  githubPath?: string
  hideHeader?: boolean
}

export const MDXComponentsData: MDXComponents = {
  a: ({ children, href, ...props }: ComponentPropsWithoutRef<'a'>) => (
    <LinkHover href={href} {...props}>
      {children}
    </LinkHover>
  ),
  blockquote: Blockquote,
  code: async (props: ExtendedCodeProps) => {
    const { children, className, ...rest } = props;
    const match = /language-(\w+)/.exec(className || '');

    if (!match) {
      return (
        <Code
          className={cn(
            'bg-default-200/50 py-0 px-1 h-fit rounded-md -top-0.5 select-text min-w-fit'
            + 'border border-default-200 text-default-700 !leading-5 break-all whitespace-normal',
          )}
        >
          {children}
        </Code>
      );
    }

    return (
      <CodeBlock
        className="mt-4 mb-10"
        github={{ path: props?.githubPath }}
        lang={match[1]} // ! FIX
        text={String(children)}
        {...rest}
      />
    );
  },
  h2: ({ children, ...props }: ComponentPropsWithoutRef<'h2'>) => (
    <Heading
      className="text-xl font-bold -mt-[calc(var(--height-navbar) - 2rem)] mb-6"
      Tag="h2"
      {...props}
    >
      {children}
    </Heading>
  ),
  h3: ({ children, ...props }: ComponentPropsWithoutRef<'h3'>) => (
    <Heading
      className="text-lg font-semibold -mt-[calc(var(--height-navbar) - 1.5rem)] mb-4"
      Tag="h3"
      {...props}
    >
      {children}
    </Heading>
  ),
  h4: ({ children, ...props }: ComponentPropsWithoutRef<'h4'>) => (
    <Heading
      className="font-medium -mt-[calc(var(--height-navbar) - 1.5rem)] mb-4"
      Tag="h4"
      {...props}
    >
      {children}
    </Heading>
  ),
  hr: () => <hr className="my-12 border-default-100" />,
  img: ({ alt, src, ...props }: ComponentPropsWithoutRef<'img'>) => (

    <img
      alt={alt}
      src={src}
      {...props}
      className={cn(
        'rounded-md select-none pointer-events-none w-full object-cover mt-4 mb-10',
        props.className,
      )}
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
