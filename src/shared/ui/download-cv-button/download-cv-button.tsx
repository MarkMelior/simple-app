import { cn } from '@/shared/lib';
import { Button } from '@nextui-org/react';
import Link from 'next/link';
import { FaDownload } from 'react-icons/fa6';

export const DownloadCvButton = ({ className }: { className?: string }) => {
	return (
		<Button
			as={Link}
			href='/files/cv.pdf'
			target='_blank'
			download='Frontend разработчик - Завгородний Марк'
			fullWidth
			startContent={<FaDownload />}
			className={cn(
				'bg-white dark:bg-default-200 text-default-600 border border-default-200 dark:border-0 hover:text-default-700 text-md py-6 md:py-4',
				className,
			)}
			radius='sm'
		>
			Download CV
		</Button>
	);
};
