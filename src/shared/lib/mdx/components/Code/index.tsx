import { cn } from '@/shared/lib/common';
import { Code, CodeBlock } from '@/shared/ui';

import type { HTMLAttributes } from 'react';

interface ExtendedCodeProps extends HTMLAttributes<HTMLElement> {
  exampleLink?: string
  filename?: string
  hideHeader?: boolean
}

export const CodeMDX = async ({ children, className, exampleLink, ...props }: ExtendedCodeProps) => {
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
      className="mb-8 mt-4"
      exampleLink={exampleLink}
      // @ts-expect-error as StackVariants
      lang={match[1]}
      text={String(children)}
      {...props}
    />
  );
};
