import { useMessage } from '@/shared/hooks';
import { Button, Tooltip } from '@nextui-org/react';
import { FC, useState } from 'react';
import { LuCheck, LuCopy } from 'react-icons/lu';

interface CopyButtonProps {
	text: string;
}

export const CopyButton: FC<CopyButtonProps> = ({ text }) => {
	const { showMessage } = useMessage();
	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		try {
			navigator.clipboard.writeText(text);
			showMessage({
				content: 'Copied to clipboard!',
				type: 'success',
			});
		} catch (err) {
			showMessage({
				content: 'Failed to copy!',
				type: 'error',
			});
		}

		setCopied(true);

		setTimeout(() => {
			setCopied(false);
		}, 2500);
	};

	return (
		<Tooltip content='Copy code'>
			<Button
				aria-label='Copy to clipboard'
				isDisabled={copied}
				onClick={handleCopy}
				data-copied={copied}
				variant='light'
				isIconOnly
				radius='sm'
				size='sm'
				className='text-default-400 hover:text-default-200'
			>
				<LuCheck
					size={18}
					className='absolute text-default-400 group-hover:text-default-600 opacity-0 scale-50 group-data-[copied=true]:opacity-100 group-data-[copied=true]:scale-100 transition-transform-opacity fade-in'
				/>
				<LuCopy
					size={18}
					className='absolute text-default-400 group-hover:text-default-600 opacity-100 scale-100 group-data-[copied=true]:opacity-0 group-data-[copied=true]:scale-50 transition-transform-opacity fade-out'
				/>
			</Button>
		</Tooltip>
	);
};
