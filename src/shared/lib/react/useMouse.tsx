'use client';

import { useEffect, useRef, useState } from 'react';

import type { MutableRefObject } from 'react';

interface MouseState {
  elementPositionX: number
  elementPositionY: number
  elementX: number
  elementY: number
  x: number
  y: number
}

export const useMouse = (): [
  MouseState,
  MutableRefObject<HTMLDivElement | null>,
] => {
  const [state, setState] = useState<MouseState>({
    elementPositionX: 0,
    elementPositionY: 0,
    elementX: 0,
    elementY: 0,
    x: 0,
    y: 0,
  });

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      const { clientX, clientY } = event;
      const element = ref.current;

      if (element) {
        const rect = element.getBoundingClientRect();
        const elementX = clientX - rect.left;
        const elementY = clientY - rect.top;
        const elementPositionX = rect.left + window.scrollX;
        const elementPositionY = rect.top + window.scrollY;

        setState({
          elementPositionX,
          elementPositionY,
          elementX,
          elementY,
          x: clientX,
          y: clientY,
        });
      }
    }

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return [state, ref];
};
