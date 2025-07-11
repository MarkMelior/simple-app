'use client';

import { useEffect, useState } from 'react';
import { GoArrowUp } from 'react-icons/go';

import { cn } from '@/shared/lib/common';
import { Button } from '@/shared/ui/client';

import styles from './scrollUp.module.scss';

export const ScrollUp = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    if (!isScrolled) {
      return;
    }

    window.scrollTo({
      behavior: 'smooth',
      top: 0,
    });
  };

  return (
    <Button
      className={cn(
        styles.wrapper,
        'bg-default-50 dark:bg-default-100 hover:bg-primary-500 fixed right-4 bottom-12 lg:bottom-8 lg:right-8 text-default-500 dark:hover:text-default-900 z-50 hover:text-default-100',
        {
          'opacity-0 pointer-events-none': !isScrolled,
        },
      )}
      isIconOnly={true}
      onPress={scrollToTop}
      radius="lg"
      size="lg"
    >
      <GoArrowUp size={22} />
    </Button>
  );
};
