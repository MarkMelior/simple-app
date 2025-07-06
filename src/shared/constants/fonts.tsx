import { Inter, JetBrains_Mono, Rouge_Script, Tiny5 } from 'next/font/google';

const FontDefault = Inter({ subsets: ['latin'] });
const FontCode = JetBrains_Mono({ subsets: ['latin'] });
const FontTiny5 = Tiny5({ subsets: ['latin'], weight: '400' });
const FontRouge = Rouge_Script({ subsets: ['latin'], weight: '400' });

export const Fonts = {
  code: FontCode.className,
  default: FontDefault.className,
  rouge: FontRouge.className,
  tiny5: FontTiny5.className,
} as const;

export type FontType = keyof typeof Fonts;
