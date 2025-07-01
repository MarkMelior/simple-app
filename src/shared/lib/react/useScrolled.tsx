'use client';

import { useCallback, useEffect, useState } from 'react';

export function useScrolled(
  threshold: number = 30,
  target: Window | HTMLElement | null = typeof window !== 'undefined' ? window : null,
): boolean {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const offset = target instanceof Window ? target.scrollY : target?.scrollTop ?? 0;

    setIsScrolled(offset > threshold);
  }, [target, threshold]);

  useEffect(() => {
    if (!target) return;

    handleScroll();

    target.addEventListener('scroll', handleScroll, { passive: true });

    return () => target.removeEventListener('scroll', handleScroll);
  }, [target, handleScroll]);

  return isScrolled;
}
