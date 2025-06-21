import { CodeStep } from './CodeStep';

import type { CodeStepProps } from './CodeStep';

export const CodeSteps = ({ steps }: { steps: CodeStepProps[] }) => (
  <ol
    className="relative space-y-2 mt-5 mb-12"
    style={{ counterReset: 'step 0' }}
  >
    {steps.map((step, index) => (
      <CodeStep isLast={index === steps.length - 1} key={index} step={step} />
    ))}
  </ol>
);
