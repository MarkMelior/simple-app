import { Spacer as HeroSpacer } from '@heroui/react';

import type { SpacerProps as HeroSpacerProps } from '@heroui/react';
import type { FC } from 'react';

export type SpacerProps = Pick<HeroSpacerProps, | 'x' | 'y'>;

export const Spacer: FC<SpacerProps> = ({ x, y }) => (
  <HeroSpacer x={x} y={y} />
);
