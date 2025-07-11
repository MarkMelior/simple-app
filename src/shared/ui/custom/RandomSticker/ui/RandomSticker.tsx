'use client';

import { type FC, useMemo } from 'react';

import { PublicImages } from '@/shared/constants';
import { cn } from '@/shared/lib/common';
import type { TwRounded } from '@/shared/types';
import { Image } from '@/shared/ui/client';

import styles from './randomSticker.module.scss';

interface RandomStickerProps {
  className?: string
  rounded?: TwRounded
  size?: number
}

export const RandomSticker: FC<RandomStickerProps> = ({ className, rounded = 'rounded-md', size = 180 }) => {
  const stickerList = useMemo(
    () => Object.values(PublicImages.sticker),
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
    <Image
      alt="Рандомный стикер"
      className={cn(styles.sticker, rounded, className)}
      height={size}
      radius="md"
      src={src}
      width={size}
    />
  );
};
