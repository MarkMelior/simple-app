'use client';

import Image from 'next/image';
import { useMemo } from 'react';
import { useInView } from 'react-intersection-observer';

import type { PublicImagePath } from '@/shared/constants';
import { PublicImages } from '@/shared/constants';
import { useTyping } from '@/shared/lib/text';
import { Blockquote } from '@/shared/ui';

import styles from './dynamicQuote.module.scss';

const { AmethystShard, Cake, Diamond, IronSword, LeatherTunic, NetherStar } = PublicImages.minecraft;

const QUOTES: { text: string, image: PublicImagePath }[] = [
  { image: NetherStar, text: 'Сила в маленьких шагах.' },
  { image: Cake, text: 'Идеи ничего не стоят без реализации.' },
  { image: AmethystShard, text: 'Стремись к звёздам, чтобы приземлиться на Луну.' },
  { image: IronSword, text: '5% людей создают 90% ценности, остальные - 10.' },
  { image: LeatherTunic, text: 'Несправедливость была, есть и будет всегда.' },
  { image: Diamond, text: 'Удача заключается в количестве попыток.' },
];

export const DynamicQuote = () => {
  const { inView, ref } = useInView({ threshold: 0 });

  const shuffledQuotes = useMemo(() => QUOTES.sort(() => Math.random() - 0.5), []);

  const { key, text } = useTyping(shuffledQuotes.map(({ text }) => text), { active: inView });

  const { image } = shuffledQuotes[key];

  return (
    <Blockquote
      className={styles.blockquote}
      color="default"
      icon={(
        <Image
          alt={image}
          className={styles.icon}
          height={160}
          key={image}
          src={image}
          width={160}
        />
      )}
      ref={ref}
      variant="quote"
    >
      <span className={styles.textWrapper}>
        {text}
        <span className={styles.cursor} />
      </span>
    </Blockquote>
  );
};
