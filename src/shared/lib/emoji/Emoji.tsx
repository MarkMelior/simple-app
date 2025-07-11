'use client';

import dynamic from 'next/dynamic';
import { type FC, memo, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';

import { cn } from '@/shared/lib/common';
import { Image, Skeleton } from '@/shared/ui/client';

import { type EmojiType, emojiData } from './data';
import { isClient } from '../next';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const animationCache = new Map<string, unknown>();
const imageCache = new Map<string, string>();

const isLottieJson = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object'
  && value !== null
  && 'v' in value
  && 'layers' in value;

const isImageModule = (value: unknown): value is { src: string } =>
  typeof value === 'object'
  && value !== null
  && 'src' in value
  && typeof value.src === 'string';

interface EmojiProps {
  className?: string
  emoji: EmojiType
  size?: number | string
}

const getEmojiData = (emoji: EmojiType) => {
  const entry = emojiData[emoji];

  if (!entry) return { src: null, type: null };

  if (isLottieJson(entry)) {
    if (!animationCache.has(emoji)) animationCache.set(emoji, entry);

    return { src: animationCache.get(emoji)!, type: 'animation' as const };
  }

  if (isImageModule(entry)) {
    if (!imageCache.has(emoji)) imageCache.set(emoji, entry.src);

    return { src: imageCache.get(emoji)!, type: 'image' as const };
  }

  return { src: null, type: null };
};

export const Emoji: FC<EmojiProps> = memo(({ className, emoji, size = '1.1em' }) => {
  const { inView, ref } = useInView({ rootMargin: '200px', triggerOnce: true });

  const { src, type } = useMemo(() => getEmojiData(emoji), [emoji]);

  if (!src) return emoji;

  return (
    <span
      aria-label={emoji}
      className={cn('inline-flex align-text-bottom relative', className)}
      ref={ref}
      style={{
        fontSize: size,
        height: size,
        minHeight: size,
        minWidth: size,
        width: size,
      }}
    >
      {(type === 'animation' || type === 'image') ? (
        isClient() && inView ? (
          type === 'animation' ? (
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
              src={src}
              style={{ height: '100%', width: '100%' }}
            />
          )
        ) : (
          <Skeleton className="size-[1em] rounded-md" />
        )
      ) : null}
    </span>
  );
});

Emoji.displayName = 'Emoji';
