'use client';

import { RxHamburgerMenu } from 'react-icons/rx';

import { Button } from '@/shared/ui/client';

import { Burger, useBurger } from '@/features/Burger';

import styles from './drawer.module.scss';

export const Drawer = () => {
  const { setIsOpen } = useBurger();

  return (
    <>
      <Button
        className={styles.button}
        color="primary"
        isIconOnly={true}
        onPress={() => setIsOpen(true)}
        variant="light"
      >
        <RxHamburgerMenu size={20} />
      </Button>
      <Burger page="articles" />
    </>
  );
};
