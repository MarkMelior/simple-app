type Luminance =
  | '50'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | '950';

type Direction = 't' | 'b' | 'l' | 'r' | 'bl' | 'br' | 'tl' | 'tr';
type Size4Xl = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
type Size9Xl = Size4Xl | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';

/**
 * Hero UI
 */
export type SemanticColors =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'default';

type HeroColor =
  | `${SemanticColors}-${Exclude<Luminance, '950'>}`
  | SemanticColors
  | 'content1'
  | 'content2'
  | 'content3'
  | 'content4'
  | 'background'
  | 'foreground'
  | 'divider'
  | 'focus';

export type HeroTextColor = `text-${HeroColor}`;
export type HeroBackgroundColor = `bg-${HeroColor}`;

/**
 * Tailwind
 */
type Colors =
  | 'primary'
  | 'base'
  | 'slate'
  | 'gray'
  | 'zinc'
  | 'neutral'
  | 'stone'
  | 'red'
  | 'orange'
  | 'amber'
  | 'yellow'
  | 'lime'
  | 'green'
  | 'emerald'
  | 'teal'
  | 'cyan'
  | 'sky'
  | 'blue'
  | 'indigo'
  | 'violet'
  | 'purple'
  | 'fuchsia'
  | 'pink'
  | 'rose';
type TwColor = `${Colors}-${Luminance}`;

export type TwTextColor = `text-${TwColor}`;
export type TwBackgroundColor = `bg-${TwColor}`;

export type TwRounded = `rounded-${Direction}-${Size4Xl}` | `rounded-${Size4Xl}`;

export type TwGap = `gap-${TwSize}`;
export type TwAlignItems = 'items-center' | 'items-start' | 'items-end' | 'items-stretch';
export type TwJustify = 'justify-center' | 'justify-start' | 'justify-end' | 'justify-between';

export type TwSize =
  | '0' | '0.5' | '1' | '1.5' | '2' | '2.5' | '3'
  | '3.5' | '4' | '5' | '6' | '7' | '8' | '9'
  | '10' | '11' | '12' | '14' | '16' | '20' | '24'
  | '28' | '32' | '36' | '40' | '44' | '48' | '52'
  | '56' | '60' | '64' | '72' | '80' | '96';

export type TwWeight =
  | 'font-extralight'
  | 'font-light'
  | 'font-normal'
  | 'font-medium'
  | 'font-semibold'
  | 'font-bold';

export type TwTextSize = `text-${Exclude<Size9Xl, 'md'>}` | 'text-base';
