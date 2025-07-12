import { cn } from '@/shared/lib/common';
import type { SemanticColors } from '@/shared/types';
import { Code, CodeBlock } from '@/shared/ui';

import styles from './code.module.scss';

import type { HTMLAttributes } from 'react';

interface ExtendedCodeProps extends HTMLAttributes<HTMLElement> {
  color?: SemanticColors | 'gray'
  exampleLink?: string
  filename?: string
  hideHeader?: boolean
}

export const CodeMDX = async ({ children, className, color = 'default', exampleLink, ...props }: ExtendedCodeProps) => {
  const match = /language-(\w+)/.exec(className || '');

  if (!match) {
    return (
      <Code
        className={cn(
          'relative top-[-0.0825rem] h-fit min-w-fit select-text whitespace-normal break-all rounded-md border border-default-200 bg-default-200/50 px-1 py-[0.075rem] text-[0.8rem] !leading-5',
          { [styles[color!]]: color },
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
