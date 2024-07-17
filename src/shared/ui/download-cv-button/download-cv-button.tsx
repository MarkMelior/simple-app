import { Dictionary, Link } from '@/shared/config/i18n';
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
					['bg-white dark:bg-default-100/90 text-default-600 dark:border-transparent hover:text-default-700 text-md border border-default-900/10 backdrop-filter backdrop-blur-lg']:
						!color,
				},
				className,
			)}
			radius='md'
		>
			{dict['download-cv']}
		</Button>
	);
};
