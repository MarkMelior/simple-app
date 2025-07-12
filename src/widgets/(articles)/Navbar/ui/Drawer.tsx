'use client';

import { RxHamburgerMenu } from 'react-icons/rx';

import { Button } from '@/shared/ui/client';

import { Burger, useBurger } from '@/features/Burger';

import type { FC } from 'react';

interface DrawerProps {
  className?: string
}

export const Drawer: FC<DrawerProps> = ({ className }) => {
  const { setIsOpen } = useBurger();

  return (
    <>
      <Button
        className={className}
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
