import hi from './hi.json';
import monitor from './monitor.json';
import rocket from './rocket.json';

export const emojiAnimData = {
  '👋': hi,
  '💻': monitor,
  '🚀': rocket,
} satisfies Record<string, object>;

export type EmojiAnimType = keyof typeof emojiAnimData;
