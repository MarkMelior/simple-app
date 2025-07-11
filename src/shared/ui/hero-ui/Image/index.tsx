'use client';

import { Image as HeroImage } from '@heroui/react';

import type { ImageProps as HeroImageProps } from '@heroui/react';
import type { FC } from 'react';

type ImageProps = Pick<HeroImageProps,
  | 'width'
  | 'height'
  | 'alt'
  | 'title'
  | 'className'
  | 'radius'
  | 'src'
  | 'style'
>;

export const Image: FC<ImageProps> = ({
  alt,
  className,
  height,
  radius = 'none',
  src,
  style,
  title,
  width,
}) => (
  <HeroImage
    alt={alt}
    className={className}
    height={height}
    radius={radius}
    src={src}
    style={style}
    title={title}
    width={width}
  />
);
