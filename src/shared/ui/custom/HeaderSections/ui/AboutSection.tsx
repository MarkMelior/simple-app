import Link from 'next/link';
import { BiLogoTypescript } from 'react-icons/bi';
import { FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import { MdArrowOutward } from 'react-icons/md';
import { TbCube3dSphere } from 'react-icons/tb';

import { LinksMediaEnum } from '@/shared/constants';
import { cn } from '@/shared/lib/common';
import { Blockquote, Flex, Text } from '@/shared/ui';
import { Button, EmojiAnim } from '@/shared/ui/client';

import styles from './aboutSection.module.scss';

import type { FC } from 'react';

const aboutLinks = [
  {
    description: 'Какой стек использую',
    href: '/about/stack',
    icon: <BiLogoTypescript className="text-primary" size={17} />,
    title: 'Технологии',
  },
  {
    description: 'Какие курсы я прошел',
    href: '/about/courses',
    icon: <LuGraduationCap className="text-primary" size={16} />,
    title: 'Пройденные курсы',
  },
  {
    description: 'Мои старые работы',
    external: true,
    href: LinksMediaEnum.ArtStation,
    icon: <TbCube3dSphere className="text-primary" size={18} />,
    title: '3D Графика',
  },
];

const aboutSocials = [
  {
    href: LinksMediaEnum.GitHub,
    icon: <FaGithub size={18} />,
  },
];

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

interface AboutSectionProps {
  isVisible: boolean
}

export const AboutSection: FC<AboutSectionProps> = ({ isVisible }) => (
  <div
    className={cn(styles.wrapper, { [styles.visible]: isVisible })}
    style={{ display: isVisible ? 'flex' : 'none' }}
  >
    <Flex full={true} vertical={true}>
      <Text
        color="text-default-500"
        size="text-xs"
        uppercase={true}
        weight="font-semibold"
      >
        Привет, я Mark Melior
        <EmojiAnim className="ml-1" emoji="👋" size={20} />
      </Text>
      <Flex
        className={styles.links}
        full={true}
        gap="gap-1"
        vertical={true}
      >
        {aboutLinks.map(({ description, external, href, icon, title }) => (
          <Button
            as={Link}
            className={styles.link}
            href={href}
            key={title}
            radius="sm"
            size="lg"
            startContent={icon}
            target={external ? '_blank' : '_self'}
            variant="light"
          >
            {external ? (
              <MdArrowOutward
                className={styles.linkExternal}
                size={12}
              />
            ) : null}
            <Flex align="items-start" vertical={true}>
              <Text
                className={styles.linkTitle}
                color="text-default-900"
                size="text-sm"
                weight="font-semibold"
              >
                {title}
              </Text>
              <Text
                className={styles.linkDescription}
                color="text-default-500"
                size="text-xs"
              >
                {description}
              </Text>
            </Flex>
          </Button>
        ))}
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
      {aboutServices.map(({ className, description, href, icon, title }) => (
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
            <Text
              color="text-default-900"
              size="text-lg"
              weight="font-semibold"
            >
              {title}
            </Text>
            <Text className={styles.serviceDescription} size="text-sm">{description}</Text>
          </Flex>
        </Link>
      ))}
      {/* TODO: сделать список цитат и они будут стрираться и заново появляться + РАЗНЫЕ ИКОНКИ */}
      <Blockquote
        className={styles.blockquote}
        color="default"
        variant="quote"
      >
        Сила в маленьких шагах
      </Blockquote>
    </div>
  </div>
);
