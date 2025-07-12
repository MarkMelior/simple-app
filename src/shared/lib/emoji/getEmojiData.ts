import { emojiData } from './data';

import type { EmojiType } from './data';

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

export const getEmojiData = (emoji: EmojiType) => {
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
