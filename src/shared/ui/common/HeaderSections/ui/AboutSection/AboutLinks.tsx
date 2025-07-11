import Link from 'next/link';
import { BiLogoTypescript } from 'react-icons/bi';
import { LuGraduationCap } from 'react-icons/lu';
import { MdArrowOutward } from 'react-icons/md';
import { TbCube3dSphere } from 'react-icons/tb';

import { LinksMediaEnum } from '@/shared/constants';
import { Flex, Text } from '@/shared/ui';
import { Button } from '@/shared/ui/client';

import styles from './aboutLinks.module.scss';

import type { FC } from 'react';

const aboutLinks = [
  {
    description: 'Какой стек использую',
    href: '/#технологии-которые-я-использую',
    icon: <BiLogoTypescript className="text-primary" size={17} />,
    title: 'Технологии',
  },
  {
    description: 'Какие курсы я прошел',
    href: '/#пройденные-курсы',
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

interface AboutLinksProps {
  onClick?: () => void
}

export const AboutLinks: FC<AboutLinksProps> = ({ onClick }) => (
  aboutLinks.map(({ description, external, href, icon, title }) => (
    <Button
      as={Link}
      className={styles.link}
      href={href}
      key={title}
      onPress={onClick}
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
        <Text color="text-default-500" size="text-xs">
          {description}
        </Text>
      </Flex>
    </Button>
  ),
  ));
