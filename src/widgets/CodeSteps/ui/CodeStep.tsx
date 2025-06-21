import { cn } from '@/shared/lib/react';
import type { CodeBlockProps } from '@/shared/ui/client';
import { CodeBlock } from '@/shared/ui/client';

import type { JSX } from 'react';

export interface CodeStepProps {
  body: () => JSX.Element
  code: CodeBlockProps & { githubPath: string }
  title: string
}

export const CodeStep = async ({
  isLast,
  step,
}: {
  step: CodeStepProps
  isLast?: boolean
}) => (
  <li
    className={cn(
      'relative pl-10 xl:grid grid-cols-5 gap-16 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.625rem] before:font-bold before:rounded-md  before:ring-default-100/5 before:bg-default-200 before:text-default-800 before:shadow-none before:highlight-white/5',
      {
        'pb-8 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-default-800/10': !isLast,
      },
    )}
    style={{ counterIncrement: 'step 1' }}
  >
    <div className="mb-6 col-span-2 xl:mb-0">
      <h4 className="text-sm leading-6 font-semibold mb-2 text-default-800">
        {step.title}
      </h4>
      <div className="text-sm">{step.body()}</div>
    </div>
    <CodeBlock
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...step.code}
      className="relative z-10 col-span-3 my-0 -ml-10 xl:ml-0"
      github={{ path: step.code.githubPath }}
    />
  </li>
);
