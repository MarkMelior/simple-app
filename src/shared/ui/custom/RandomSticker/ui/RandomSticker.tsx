'use client';

import { type FC, useMemo } from 'react';

import { PublicImages } from '@/shared/constants';
import { cn } from '@/shared/lib/common';
import type { TwRounded } from '@/shared/types';

import styles from './randomSticker.module.scss';

interface RandomStickerProps {
  className?: string
  rounded?: TwRounded
  size?: number
}

export const RandomSticker: FC<RandomStickerProps> = ({ className, rounded = 'rounded-md', size = 180 }) => {
  const stickerList = useMemo(
    () => Object.values(PublicImages.sticker) as string[],
    [],
  );

  const src = useMemo(
    () => stickerList[Math.floor(Math.random() * stickerList.length)],
    [stickerList],
  );

  return src.endsWith('.webm') ? (
    <video
      autoPlay={true}
      className={cn(styles.sticker, rounded, className)}
      height={size}
      loop={true}
      muted={true}
      playsInline={true}
      src={src}
      width={size}
    />
  ) : (
    <img
      alt="Рандомный стикер"
      className={cn(styles.sticker, rounded, className)}
      height={size}
      src={src}
      width={size}
    />
  );
};
