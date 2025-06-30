import { emojiData } from './data';

const escapeRegExp = (s: string) =>
  s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const emojiPattern = Object.keys(emojiData)
  .sort((a, b) => b.length - a.length)
  .map(escapeRegExp)
  .join('|');

export const emojiRegex = new RegExp(`(${emojiPattern})`, 'gu');
