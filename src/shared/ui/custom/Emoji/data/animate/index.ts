import hi from './hi.json';
import rocket from './rocket.json';

export const emojiAnimData = {
  '👋': hi,
  '🚀': rocket,
} satisfies Record<string, object>;

export type EmojiAnimType = keyof typeof emojiAnimData;
