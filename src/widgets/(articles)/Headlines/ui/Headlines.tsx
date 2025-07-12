'use client';

import Link from 'next/link';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import { cn } from '@/shared/lib/common';
import { Emoji } from '@/shared/lib/emoji';
import type { MdxHeadline } from '@/shared/lib/mdx';
import { Portal } from '@/shared/lib/react';
import { Flex } from '@/shared/ui';

import styles from './headlines.module.scss';

import type { FC } from 'react';

const settings = {
  maxHeight: 100,
  minHeight: 20,
  thresholdTop: 88, // Пиксели от верха окна
};

interface HeadlinesProps {
  headlines: MdxHeadline[]
}

export const Headlines: FC<HeadlinesProps> = ({ headlines }) => {
  const boxRef = useRef<HTMLDivElement | null>(null);

  const [height, setHeight] = useState(70);
  const [limit, setLimit] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-headline-id]');
      let lastVisibleId: string | null = activeLink;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (
          rect.top <= settings.thresholdTop
          && rect.bottom >= settings.thresholdTop
        ) {
          lastVisibleId = section.getAttribute('data-headline-id');
        }
      });

      if (lastVisibleId) {
        setActiveLink(lastVisibleId);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeLink]);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.preventDefault();

      if (!boxRef.current || !boxRef.current.parentElement) {
        return;
      }

      const parentHeight = boxRef.current.parentElement.offsetHeight;
      const startY = e.clientY;
      const startHeight = boxRef.current.offsetHeight;

      const doDrag = (dragEvent: MouseEvent) => {
        const newHeightPx = startHeight - (dragEvent.clientY - startY);
        const newHeightPercentage = (newHeightPx / parentHeight) * 100;

        if (newHeightPercentage < settings.minHeight) {
          setHeight(settings.minHeight);
          setLimit(true);
        } else if (newHeightPercentage > settings.maxHeight) {
          setHeight(settings.maxHeight);
          setLimit(true);
        } else {
          setHeight(newHeightPercentage);
          setLimit(false);
        }
      };

      const stopDrag = () => {
        document.documentElement.removeEventListener('mousemove', doDrag);
        document.documentElement.removeEventListener('mouseup', stopDrag);

        setLimit(false);
      };

      document.documentElement.addEventListener('mousemove', doDrag);
      document.documentElement.addEventListener('mouseup', stopDrag);

      return () => {
        document.documentElement.removeEventListener('mousemove', doDrag);
        document.documentElement.removeEventListener('mouseup', stopDrag);
      };
    },
    [],
  );

  return (
    <Portal id="headlines-portal">
      <div className="flex h-full flex-col pr-6">
        <div
          className={styles.content}
          ref={boxRef}
          style={{ height: `${height}%` }}
        >
          <div
            className="group flex cursor-ns-resize items-center"
            onMouseDown={handleMouseDown}
          >
            <hr
              className={cn(
                'my-6 border-default-200/50 group-hover:border-primary-500 w-full transition-colors',
                { 'border-danger-500': limit },
              )}
            />
          </div>

          <Flex align="items-center" className="mb-4 block text-[0.9375rem] font-semibold text-default-900" gap="gap-1.5">
            <Emoji emoji="💻" />
            Навигация по странице
          </Flex>

          <ul className="flex grow flex-col gap-1 overflow-y-auto text-sm">
            {headlines.map(({ href, nested, title }) => (
              <React.Fragment key={href}>
                <li
                  className={cn('text-default-500', {
                    'text-default-600': activeLink === href.slice(1),
                  })}
                >
                  <Link
                    className="transition-colors hover:text-default-700"
                    href={href}
                  >
                    {title}
                  </Link>
                </li>
                {nested && (
                  <li>
                    <ul className="flex list-inside list-disc flex-col gap-1 marker:text-default-200">
                      {nested.map(({ href, title }) => (
                        <li
                          className={cn('text-default-500', {
                            'text-default-600': activeLink === href.slice(1),
                          })}
                          key={href}
                        >
                          <Link
                            className="transition-colors hover:text-default-700"
                            href={href}
                          >
                            {title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
    </Portal>
  );
};
