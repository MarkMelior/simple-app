import { Dictionary, Link } from '@/shared/config';
import { cn } from '@/shared/lib';
import { Button, ButtonProps } from '@nextui-org/react';
import { FC } from 'react';
import { FaDownload } from 'react-icons/fa6';

interface DownloadCvButtonProps {
	className?: string;
	dict: Dictionary['ui'];
	color?: ButtonProps['color'];
}

export const DownloadCvButton: FC<DownloadCvButtonProps> = ({
	className,
	color,
	dict,
}) => {
	return (
		<Button
			as={Link}
			href='/files/cv.pdf'
			target='_blank'
			download='Frontend разработчик - Завгородний Марк'
			fullWidth
			color={color}
			startContent={<FaDownload />}
			className={cn(
				'py-6 md:py-4',
				{
					['bg-white dark:bg-default-200 text-default-600 border border-default-200 dark:border-0 hover:text-default-700 text-md']:
						!color,
				},
				className,
			)}
			radius='sm'
		>
			{dict['download-cv']}
		</Button>
	);
};
