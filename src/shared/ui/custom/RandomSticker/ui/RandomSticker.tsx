'use client';

import Image from 'next/image';
import { type FC, useEffect, useMemo, useState } from 'react';

import { PublicImages } from '@/shared/constants';
import { cn } from '@/shared/lib/common';
import type { TwRounded } from '@/shared/types';
import { Skeleton } from '@/shared/ui/client';

import styles from './randomSticker.module.scss';

interface RandomStickerProps {
  className?: string
  rounded?: TwRounded
  size?: number
}

export const RandomSticker: FC<RandomStickerProps> = ({ className, rounded = 'rounded-md', size = 180 }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stickerList = useMemo(
    () => Object.values(PublicImages.sticker),
    [],
  );

  const src = useMemo(
    () => stickerList[Math.floor(Math.random() * stickerList.length)],
    [stickerList],
  );

  if (!mounted) return <Skeleton className={rounded} style={{ height: size, width: size }} />;

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
      src={src}
      width={size}
    />
  );
};
