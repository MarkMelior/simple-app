'use client';

import { RxHamburgerMenu } from 'react-icons/rx';
import { Drawer } from 'vaul';

import { Button } from '@/shared/ui/client';

import type { FC, ReactNode } from 'react';

interface BurgerProps {
  children: ReactNode
}

export const Burger: FC<BurgerProps> = ({ children }) => (
  <Drawer.Root direction="bottom">
    <Drawer.Trigger asChild={true}>
      <Button
        className="text-default-500 hover:text-default-600 lg:hidden"
        isIconOnly={true}
        variant="light"
      >
        <RxHamburgerMenu size={20} />
      </Button>
    </Drawer.Trigger>
    <Drawer.Portal>
      <Drawer.Overlay className="fixed inset-0 z-40 bg-black/40" />
      <Drawer.Content
        className="fixed inset-x-0 bottom-0 z-40 mt-24 flex h-[90%] flex-col rounded-t-[10px] bg-default-100 outline-none"
      >
        <div className="flex h-5 w-full items-center justify-center bg-default-100">
          <div className="h-1 w-12 rounded-full bg-default-300" />
        </div>
        <div className="overflow-auto">
          <div className="mx-auto max-w-md px-4">{children}</div>
        </div>
      </Drawer.Content>
    </Drawer.Portal>
  </Drawer.Root>
);
