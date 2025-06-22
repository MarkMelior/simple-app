import Link from 'next/link';
import { FaDownload } from 'react-icons/fa6';

import { cn } from '@/shared/lib/common';
import { Button } from '@/shared/ui/client';
import type { ButtonProps } from '@/shared/ui/client';

import type { FC } from 'react';

interface DownloadCvButtonProps {
  className?: string
  color?: ButtonProps['color']
}

export const DownloadCvButton: FC<DownloadCvButtonProps> = ({
  className,
  color,
}) => (
  <Button
    as={Link}
    className={cn(
      'py-6 md:py-4',
      {
        ['bg-white dark:bg-default-100/90 text-default-600 dark:border-default-600/10 hover:text-default-800 border border-default-900/10']: !color,
      },
      className,
    )}
    color={color}
    download="Frontend разработчик :: Завгородний Марк"
    fullWidth={true}
    href="/files/cv.pdf"
    radius="md"
    startContent={<FaDownload />}
    target="_blank"
  >
    Скачать резюме
  </Button>
);
