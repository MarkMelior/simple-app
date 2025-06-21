'use client';

import { useEffect, useState } from 'react';

import { cn } from '@/shared/lib/react';

import styles from './navbar.module.scss';

export const NavbarScroll = ({ children }: { children: React.ReactNode }) => {
  const [isScrolled, setIsScrolled] = useState(true);

  useEffect(() => {
    setIsScrolled(false);
  }, []);

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

  return (
    <div className={styles.wrapper}>
      <div className={styles.navbarWrapper}>
        <div className={cn(styles.navbar, { [styles.navbarOpen]: isScrolled })}>
          {children}
        </div>
      </div>
    </div>
  );
};
