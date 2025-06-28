'use client';

import dynamic from 'next/dynamic';
import { type FC, memo, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';

import { cn } from '@/shared/lib/common';

import { type EmojiAnimType, emojiAnimData } from '../data/animate';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

interface EmojiAnimProps {
  className?: string
  emoji: EmojiAnimType
  size?: number
}

const animationCache = new Map<string, unknown>();

export const EmojiAnim: FC<EmojiAnimProps> = memo(({
  className,
  emoji,
  size = 16,
}) => {
  const { inView, ref } = useInView({ rootMargin: '200px', triggerOnce: true });

  const animationData = useMemo(() => {
    if (!animationCache.has(emoji)) animationCache.set(emoji, emojiAnimData[emoji]);

    return animationCache.get(emoji)!;
  }, [emoji]);

  const canAnimate = typeof window !== 'undefined' && inView;

  return (
    <span
      aria-label={emoji}
      className={cn('inline-flex items-center justify-center align-baseline relative', className)}
      ref={ref}
      style={{
        fontSize: size,
        height: size,
        lineHeight: `${size + 8}px`,
        verticalAlign: 'text-bottom',
        width: size,
      }}
    >
      {canAnimate ? (
        <>
          <Lottie
            animationData={animationData}
            autoplay={true}
            loop={true}
            rendererSettings={{ preserveAspectRatio: 'xMidYMid slice', progressiveLoad: true }}
            style={{ height: '100%', width: '100%' }}
          />

          {/* Невидимый дубликат, чтобы символ можно было выделить/скопировать */}
          <span
            aria-hidden="true"
            className="absolute inset-0 select-text text-transparent"
          >
            {emoji}
          </span>
        </>
      ) : (
        emoji
      )}
    </span>
  );
});

EmojiAnim.displayName = 'EmojiAnim';
