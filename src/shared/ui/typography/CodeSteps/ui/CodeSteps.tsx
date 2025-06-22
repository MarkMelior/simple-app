import { CodeStep } from './CodeStep';

import type { ICodeStep } from './CodeStep';
import type { FC } from 'react';

interface CodeStepsProps {
  steps: ICodeStep[]
}

export const CodeSteps: FC<CodeStepsProps> = ({ steps }) => (
  <ol
    className="relative mb-12 mt-5 space-y-2"
    style={{ counterReset: 'step 0' }}
  >
    {steps.map((step, index) => (
      <CodeStep isLast={index === steps.length - 1} key={index} step={step} />
    ))}
  </ol>
);
