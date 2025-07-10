import { Heading } from '@/shared/ui';

import { BlockquoteMDX } from './Blockquote';
import { CodeMDX } from './Code';
import { LinkMDX } from './Link';
import { TableMDX } from './Table';
import { cn } from '../../common';
import { Emoji } from '../../emoji';

import type { MDXComponents } from 'mdx/types';
import type { ComponentPropsWithoutRef } from 'react';

export const MDXComponentsData: MDXComponents = {
  a: LinkMDX,
  blockquote: BlockquoteMDX,
  BlockquoteMDX, // TODO: Посмотреть как можно убрать. Без этого - remarkBlockquoteVariant не хочет работать как нужно
  code: CodeMDX,
  Emoji,
  h2: ({ children, ...props }: ComponentPropsWithoutRef<'h2'>) => (
    <Heading
      className="-mt-8 mb-6 text-2xl font-bold"
      Tag="h2"
      {...props}
    >
      {children}
    </Heading>
  ),
  h3: ({ children, ...props }: ComponentPropsWithoutRef<'h3'>) => (
    <Heading
      className="-mt-14 mb-4 text-lg font-semibold"
      Tag="h3"
      {...props}
    >
      {children}
    </Heading>
  ),
  h4: ({ children, ...props }: ComponentPropsWithoutRef<'h4'>) => (
    <Heading
      className="-mt-14 mb-4 font-medium"
      Tag="h4"
      {...props}
    >
      {children}
    </Heading>
  ),
  hr: () => <hr className="mx-8 my-7 border-default-200/80" />,
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
    <div className={cn('text-default-600 my-3 leading-7', className)}>
      {children}
    </div>
  ),
  strong: ({ children, ...props }: ComponentPropsWithoutRef<'strong'>) => (
    <strong className="text-default-800" {...props}>
      {children}
    </strong>
  ),
  table: TableMDX,
  ul: ({ children, className }: ComponentPropsWithoutRef<'ul'>) => (
    <ul
      className={cn(
        'text-default-600 my-5 leading-7 list-disc marker:text-default-400 ml-4 list-inside',
        className,
      )}
    >
      {children}
    </ul>
  ),
};
