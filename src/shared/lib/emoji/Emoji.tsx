'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { type FC, memo, useMemo } from 'react';

import { cn } from '@/shared/lib/common';

import { type EmojiType } from './data';
import { usePerformance } from '../performance';
import { getEmojiData } from './getEmojiData';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

interface EmojiProps {
  className?: string
  emoji: EmojiType
  size?: number | string
}

const EmojiComponent: FC<EmojiProps> = ({ className, emoji, size = '1.1em' }) => {
  const { src, type } = useMemo(() => getEmojiData(emoji), [emoji]);

  if (!src) return emoji;

  return (
    <span
      aria-label={emoji}
      className={cn('inline-flex align-text-bottom relative', className)}
      style={{
        fontSize: size,
        height: size,
        minHeight: size,
        minWidth: size,
        width: size,
      }}
    >
      {type === 'animation' ? (
        <>
          <Lottie
            animationData={src}
            autoplay={true}
            loop={true}
            rendererSettings={{
              preserveAspectRatio: 'xMidYMid slice',
              progressiveLoad: true,
            }}
            style={{ height: '100%', width: '100%' }}
          />
          <span
            aria-hidden={true}
            className="absolute inset-0 select-text text-transparent"
          >
            {emoji}
          </span>
        </>
      ) : (
        <Image
          alt={emoji}
          height={100}
          src={src}
          style={{ height: '100%', width: '100%' }}
          width={100}
        />
      )}
    </span>
  );
};

export const Emoji: FC<EmojiProps> = memo((props) => {
  const { isDisabledAnimEmoji } = usePerformance();

  if (isDisabledAnimEmoji) {
    return props.emoji;
  }

  return <EmojiComponent {...props} />;
});

Emoji.displayName = 'Emoji';
