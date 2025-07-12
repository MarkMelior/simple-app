import check from './check.webp';
import coding from './coding.json';
import coffee from './coffee.json';
import cool from './cool.json';
import crystal from './crystal.json';
import eye from './eye.json';
import heartFire from './heart-fire.json';
import heart from './heart.json';
import hearts from './hearts.json';
import hi from './hi.json';
import monitor from './monitor.json';
import rocket from './rocket.json';
import sber from './sber.json';
import smile from './smile.webp';
import star from './star.json';
import stop from './stop.webp';

export const emojiData = {
  '⌨️': coding,
  '☕️': coffee,
  '✅': check,
  '❇️': sber,
  '❤️': heart,
  '❤️‍🔥': heartFire,
  '⭐️': star,
  '👀': eye,
  '👋': hi,
  '💎': crystal,
  '💕': hearts,
  '💻': monitor,
  '😃': smile,
  '😎': cool,
  '😔': stop,
  '🚀': rocket,
} satisfies Record<string, object>;

export type EmojiType = keyof typeof emojiData;
