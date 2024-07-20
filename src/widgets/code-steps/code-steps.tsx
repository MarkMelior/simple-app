import { CodeStep, CodeStepProps } from './code-step';

export const CodeSteps = ({ steps }: { steps: CodeStepProps[] }) => (
	<ol
		className='relative space-y-2 mt-5 mb-12'
		style={{ counterReset: 'step 0' }}
	>
		{steps.map((step, index) => (
			<CodeStep key={index} step={step} isLast={index === steps.length - 1} />
		))}
	</ol>
);
