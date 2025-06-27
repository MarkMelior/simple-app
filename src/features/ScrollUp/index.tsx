'use client';

import { useEffect, useState } from 'react';
import { GoArrowUp } from 'react-icons/go';

import { cn } from '@/shared/lib/common';
import { Button } from '@/shared/ui/client';

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
        'bg-default-100 hover:bg-primary-500 fixed bottom-8 right-8 text-default-500 hover:text-default-900 z-50',
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
