'use client';

import { Dictionary } from '@/shared/config';
import { FontDefault } from '@/shared/const/fonts';
import { useCopy } from '@/shared/hooks';
import { cn } from '@/shared/lib';
import { Button, Tooltip } from '@nextui-org/react';
import { FC } from 'react';

interface CodeProps {
	text: string;
	dict: Dictionary['ui'];
}

export const Code: FC<CodeProps> = ({ text, dict }) => {
	const { handleCopy } = useCopy();

	return (
		<Tooltip content={dict['copy-code']} size='sm' delay={1000}>
			<Button
				as={'code'}
				onClick={() => handleCopy(text)}
				disableRipple
				className={cn(
					'bg-default-200/50 py-0.5 px-1 h-fit rounded-md -top-0.5 select-text min-w-fit border border-default-200',
					FontDefault.className,
				)}
			>
				{text}
			</Button>
		</Tooltip>
	);
};
