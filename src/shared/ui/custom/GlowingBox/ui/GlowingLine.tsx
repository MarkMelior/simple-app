'use client';

import { useEffect, useState } from 'react';

import { cn } from '@/shared/lib/common';
import { useMouse } from '@/shared/lib/react';

import styles from './glowingLine.module.scss';

import type { CSSProperties, FC } from 'react';

interface GlowingBoxProps {
  className?: string
}

export const GlowingLine: FC<GlowingBoxProps> = ({ className }) => {
  const [mousePosition, ref] = useMouse();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const style = {
    '--mouse-x': `${mousePosition.x}px`,
    '--mouse-y': `${mousePosition.y}px`,
    '--spotlight-line-size': '300px',
  } as CSSProperties;

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={cn(styles.glowingLine, 'absolute w-full h-[1px]', className)}
      ref={ref}
      style={style}
    />
  );
};
