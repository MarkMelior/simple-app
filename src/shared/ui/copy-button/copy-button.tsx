import { useCopy } from '@/shared/hooks';
import { Button, Tooltip } from '@nextui-org/react';
import { FC } from 'react';
import { LuCheck, LuCopy } from 'react-icons/lu';

interface CopyButtonProps {
	text: string;
}

export const CopyButton: FC<CopyButtonProps> = ({ text }) => {
	const { handleCopy, copied } = useCopy();

	return (
		<Tooltip content='Copy code'>
			<Button
				aria-label='Copy to clipboard'
				isDisabled={copied}
				onClick={() => handleCopy(text)}
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
