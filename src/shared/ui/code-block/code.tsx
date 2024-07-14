'use client';

import { Dictionary } from '@/shared/config';
import { useCopy } from '@/shared/hooks';
import { Button, Tooltip } from '@nextui-org/react';
import { FC } from 'react';
import { StackVariants } from '../stack-buttons/model/data';

interface CodeProps {
	text: string;
	language?: StackVariants;
	dict: Dictionary['ui'];
}

export const Code: FC<CodeProps> = ({
	text,
	dict,
	language = 'TypeScript',
}) => {
	const { handleCopy } = useCopy();
	// const [mounted, setMounted] = useState(false);
	// const { theme } = useTheme();

	// useEffect(() => {
	// 	setMounted(true);
	// }, []);

	return (
		<Tooltip content={dict['copy-code']} size='sm' delay={1000}>
			<Button
				as={'code'}
				className='bg-default-200/50 py-0.5 px-1 h-fit rounded-md -top-0.5 select-text min-w-fit'
				onClick={() => handleCopy(text)}
				disableRipple
			>
				{/* <SyntaxHighlighter
					language={language ?? 'TypeScript'}
					style={
						mounted
							? theme === Theme.DARK
								? atomOneDark
								: atomOneLight
							: atomOneDark
					}
					PreTag={React.Fragment}
					CodeTag={React.Fragment}
				>
					{`\`${text}\``}
				</SyntaxHighlighter> */}
				{`${text}`}
			</Button>
		</Tooltip>
	);
};
