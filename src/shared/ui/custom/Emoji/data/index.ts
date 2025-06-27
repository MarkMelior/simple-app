import hi from './hi.json';

export const emojiData = {
  '👋': hi,
} satisfies Record<string, object>;

export type EmojiType = keyof typeof emojiData;
