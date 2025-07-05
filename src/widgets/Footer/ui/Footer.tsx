import Link from 'next/link';
import { FaInstagram, FaYoutube } from 'react-icons/fa';

import { LinksMediaEnum } from '@/shared/constants';
import { Flex, Text } from '@/shared/ui';
import { Button } from '@/shared/ui/client';

import styles from './footer.module.scss';

export const Footer = () => (
  <Flex
    align="items-center"
    as="footer"
    className={styles.footer}
    gap="gap-1"
    justify="justify-center"
  >
    <Text color="text-default-200" size="text-xs">Подпишись →</Text>
    <Button
      as={Link}
      color="warning"
      href={LinksMediaEnum.Instagram}
      size="sm"
      startContent={<FaInstagram size={22} />}
      target="_blank"
      variant="light"
    >
      Instagram
    </Button>
    <Button
      as={Link}
      color="danger"
      href={LinksMediaEnum.YouTubeSub}
      size="sm"
      startContent={<FaYoutube size={22} />}
      target="_blank"
      variant="light"
    >
      YouTube
    </Button>
    <Text color="text-default-200" size="text-xs">← И сюда</Text>
  </Flex>
);
