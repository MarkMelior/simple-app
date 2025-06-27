'use client';

import { useEffect, useRef, useState } from 'react';

import type { MutableRefObject } from 'react';

interface MouseState {
  x: number
  y: number
}

export const useMouse = (): [
  MouseState,
  MutableRefObject<HTMLDivElement | null>,
] => {
  const [state, setState] = useState<MouseState>({ x: 0, y: 0 });

  const ref = useRef<HTMLDivElement | null>(null);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const handleMouseMove = (event: MouseEvent) => {
      if (frame.current !== null) return;

      frame.current = requestAnimationFrame(() => {
        const rect = element.getBoundingClientRect();

        setState({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        });
        frame.current = null;
      });
    };

    element.addEventListener('mousemove', handleMouseMove);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      if (frame.current !== null) {
        cancelAnimationFrame(frame.current);
      }
    };
  }, []);

  return [state, ref];
};
