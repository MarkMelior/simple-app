import smile from './smile.webp';

export const emojiData = {
  '😃': smile,
} satisfies Record<string, object>;

export type EmojiType = keyof typeof emojiData;
