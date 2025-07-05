'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const scrollStates = new Map<string, { offset: number, listeners: Set<() => void> }>();

// Генерация уникального ключа для target
function getTargetKey(target: Window | HTMLElement | null): string {
  if (!target) return 'null';
  if (target instanceof Window) return 'window';
  if (!target.dataset.scrollId) {
    target.dataset.scrollId = Math.random().toString(36).substr(2, 9);
  }

  return target.dataset.scrollId;
}

// Получение текущего offset для target
function getScrollOffset(target: Window | HTMLElement | null): number {
  if (!target) return 0;

  return target instanceof Window ? target.scrollY : target.scrollTop;
}

// Глобальный обработчик скролла
function createScrollHandler(targetKey: string, target: Window | HTMLElement | null) {
  return () => {
    const offset = getScrollOffset(target);
    const state = scrollStates.get(targetKey);

    if (state) {
      state.offset = offset;
      state.listeners.forEach((listener) => listener());
    }
  };
}

export enum ScrollThresholdEnum {
  ARTICLES_NAVBAR = 30,
  MAIN_HEADER = 60
}

export function useScrolled(
  threshold: number = ScrollThresholdEnum.ARTICLES_NAVBAR,
  target: Window | HTMLElement | null = typeof window !== 'undefined' ? window : null,
): boolean {
  const [isScrolled, setIsScrolled] = useState(false);
  const targetKey = getTargetKey(target);
  const handlerRef = useRef<(() => void) | null>(null);

  const updateScrollState = useCallback(() => {
    const state = scrollStates.get(targetKey);

    if (state) {
      setIsScrolled(state.offset > threshold);
    }
  }, [targetKey, threshold]);

  useEffect(() => {
    if (!target) return;

    let state = scrollStates.get(targetKey);

    if (!state) {
      state = {
        listeners: new Set(),
        offset: getScrollOffset(target),
      };
      scrollStates.set(targetKey, state);

      handlerRef.current = createScrollHandler(targetKey, target);
      target.addEventListener('scroll', handlerRef.current, { passive: true });
    }

    state.listeners.add(updateScrollState);

    updateScrollState();

    return () => {
      const currentState = scrollStates.get(targetKey);

      if (currentState) {
        currentState.listeners.delete(updateScrollState);

        if (currentState.listeners.size === 0) {
          if (handlerRef.current && target) {
            target.removeEventListener('scroll', handlerRef.current);
          }
          scrollStates.delete(targetKey);
        }
      }
    };
  }, [target, targetKey, updateScrollState]);

  return isScrolled;
}
