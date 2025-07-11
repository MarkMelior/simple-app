'use client';

import { RxHamburgerMenu } from 'react-icons/rx';

import { Button } from '@/shared/ui/client';

import { Burger, useBurger } from '@/features/Burger';

import { useHeader } from '../../store';

import styles from './drawer.module.scss';

export const Drawer = () => {
  const { isAlertClosed, setIsAlertClosed } = useHeader();
  const { setIsOpen } = useBurger();

  return (
    <>
      <Button
        className={styles.button}
        color="primary"
        isIconOnly={true}
        onPress={() => setIsOpen(true)}
        variant="shadow"
      >
        <RxHamburgerMenu size={20} />
      </Button>
      <Burger isAlertClosed={isAlertClosed} setIsAlertClosed={setIsAlertClosed} />
    </>
  );
};
