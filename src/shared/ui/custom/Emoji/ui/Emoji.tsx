import { type FC, memo } from 'react';

import { cn } from '@/shared/lib/common';

import { type EmojiType, emojiData } from '../data/static';

interface EmojiProps {
  className?: string
  emoji: EmojiType
  size?: number
}

const imageCache = new Map<string, string>();

export const Emoji: FC<EmojiProps> = memo(({
  className,
  emoji,
  size = 16,
}) => {
  const src = (() => {
    if (!imageCache.has(emoji)) {
      const entry = emojiData[emoji];

      imageCache.set(
        emoji,
        typeof entry === 'string' ? entry : entry?.src ?? '',
      );
    }

    return imageCache.get(emoji);
  })();

  return (
    <span
      aria-label={emoji}
      className={cn('inline-flex items-center justify-center align-baseline relative', className)}
      style={{
        fontSize: size,
        height: size,
        lineHeight: `${size + 8}px`,
        verticalAlign: 'text-bottom',
        width: size,
      }}
    >
      {src ? (
        <img
          alt={emoji}
          loading="lazy"
          src={src}
          style={{ height: '100%', width: '100%' }}
        />
      ) : (
        emoji
      )}
    </span>
  );
});

Emoji.displayName = 'Emoji';
