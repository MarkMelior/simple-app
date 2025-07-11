import Link from 'next/link';
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import { MdArrowOutward } from 'react-icons/md';

import { LinksMediaEnum } from '@/shared/constants';
import { cn } from '@/shared/lib/common';
import { Flex, Text } from '@/shared/ui/custom';

import styles from './aboutServices.module.scss';

const aboutServices = [
  {
    className: styles.youtube,
    description: 'делюсь знаниями',
    href: LinksMediaEnum.YouTubeSub,
    icon: <FaYoutube size={22} />,
    title: 'YouTube',
  },
  {
    className: styles.instagram,
    description: 'моя жизнь в фото',
    href: LinksMediaEnum.Instagram,
    icon: <FaInstagram size={22} />,
    title: 'Instagram',
  },
];

export const AboutServices = () => (
  aboutServices.map(({ className, description, href, icon, title }) => (
    <Link
      className={cn(styles.service, className)}
      href={href}
      key={title}
      target="_blank"
    >
      <Flex align="items-start" justify="justify-between">
        {icon}
        <MdArrowOutward className={styles.serviceArrow} size={18} />
      </Flex>
      <Flex className="mt-auto" vertical={true}>
        <Text size="text-lg" weight="font-semibold">
          {title}
        </Text>
        <Text className={styles.serviceDescription} size="text-sm">{description}</Text>
      </Flex>
    </Link>
  ))
);
