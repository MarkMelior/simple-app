import { Button } from '@nextui-org/button';
import Link from 'next/link';
import { FaDownload } from 'react-icons/fa6';

export const DownloadCvButton = () => {
	return (
		<Button
			as={Link}
			href='/files/cv.pdf'
			target='_blank'
			download='Frontend разработчик - Завгородний Марк'
			fullWidth
			startContent={<FaDownload />}
			className='bg-white dark:bg-default-200 text-default-600 border border-default-200 dark:border-0 hover:text-default-700'
			radius='sm'
		>
			Download CV
		</Button>
	);
};
