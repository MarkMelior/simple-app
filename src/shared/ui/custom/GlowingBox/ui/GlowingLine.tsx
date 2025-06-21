'use client';

import { useEffect, useState } from 'react';

import { cn, useMouse } from '@/shared/lib/react';

import styles from './glowingLine.module.scss';

import type { FC } from 'react';

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
    '--mouse-x': `${mousePosition.elementX}px`,
    '--mouse-y': `${mousePosition.elementY}px`,
    '--spotlight-line-size': '300px',
  } as React.CSSProperties;

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
