import cool from './cool.json';
import eye from './eye.json';
import heart from './heart.json';
import hi from './hi.json';
import monitor from './monitor.json';
import rocket from './rocket.json';
import sber from './sber.json';
import smile from './smile.webp';
import stop from './stop.webp';

export const emojiData = {
  '❇️': sber,
  '❤️': heart,
  '👀': eye,
  '👋': hi,
  '💻': monitor,
  '😃': smile,
  '😎': cool,
  '😔': stop,
  '🚀': rocket,
} satisfies Record<string, object>;

export type EmojiType = keyof typeof emojiData;
