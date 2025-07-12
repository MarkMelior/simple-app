import Link from 'next/link';
import { FaArtstation, FaGithub } from 'react-icons/fa';

import { LinksMediaEnum } from '@/shared/constants';
import { cn } from '@/shared/lib/common';
import { Emoji } from '@/shared/lib/emoji';
import { Flex, Text } from '@/shared/ui';
import { Button, DynamicQuote } from '@/shared/ui/client';

import { AboutLinks } from './AboutLinks';
import { AboutServices } from './AboutServices';
import { SupportButton } from './SupportButton';

import styles from './aboutSection.module.scss';

import type { FC } from 'react';

const aboutSocials = [
  {
    href: LinksMediaEnum.GitHubCurrentRepo,
    icon: <FaGithub size={18} />,
  },
  {
    href: LinksMediaEnum.ArtStation,
    icon: <FaArtstation size={18} />,
  },
];

interface AboutSectionProps {
  className?: string
  isSupportMe?: boolean
  isVisible: boolean
}

export const AboutSection: FC<AboutSectionProps> = ({ className, isSupportMe, isVisible }) => (
  <div
    className={cn(styles.wrapper, { [styles.visible]: isVisible }, className)}
    style={{ display: isVisible ? 'flex' : 'none' }}
  >
    <Flex full={true} vertical={true}>
      <Text
        color="text-default-500"
        size="text-xs"
        uppercase={true}
        weight="font-semibold"
      >
        Немного про меня
        <Emoji className="ml-1" emoji="😃" size={18} />
      </Text>
      <Flex
        className={styles.links}
        full={true}
        gap="gap-1"
        vertical={true}
      >
        <AboutLinks />
      </Flex>
      <div className={styles.socials}>
        {aboutSocials.map(({ href, icon }) => (
          <Button
            as={Link}
            className="text-default-700 opacity-30"
            href={href}
            isIconOnly={true}
            key={href}
            size="sm"
            target="_blank"
            variant="light"
          >
            {icon}
          </Button>
        ))}
      </div>
    </Flex>
    <div className={styles.services}>
      <AboutServices />
      <DynamicQuote />
      {isSupportMe ? <SupportButton /> : null}
    </div>
  </div>
);
