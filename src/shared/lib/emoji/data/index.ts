import heart from './heart.json';
import hi from './hi.json';
import monitor from './monitor.json';
import rocket from './rocket.json';
import smile from './smile.webp';

export const emojiData = {
  '❤️': heart,
  '👋': hi,
  '💻': monitor,
  '😃': smile,
  '🚀': rocket,
} satisfies Record<string, object>;

export type EmojiType = keyof typeof emojiData;
