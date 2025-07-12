import Link from 'next/link';

import { APP_NAME, AppRouteEnum } from '@/shared/constants';
import { Logo } from '@/shared/icons';
import { Emoji } from '@/shared/lib/emoji';
import { Button } from '@/shared/ui/client';

import { AboutHoverButton } from './AboutHoverButton';
import { AboutHoverMenu } from './AboutHoverMenu';
import { Drawer } from './Drawer';
import { NavbarScroll } from './NavbarScroll';
import { ThemeSwitcher } from './ThemeSwitcher';

import type { FC } from 'react';

interface NavbarProps {
  maxWidth?: string
}

export const Navbar: FC<NavbarProps> = ({ maxWidth = 'max-w-8xl' }) => (
  <>
    <NavbarScroll className={maxWidth}>
      <Logo changeOnClick={true} className="scale-80" />
      <Button
        as={Link}
        className="ml-1 flex h-min items-center gap-0 rounded-full bg-primary-600/10 px-3 py-1 text-xs font-medium leading-5 text-primary-600 hover:bg-primary-600/20"
        href={AppRouteEnum.MAIN}
      >
        <span>
          <Emoji emoji="🚀" />
          {' '}
          {APP_NAME}
        </span>
        <svg
          aria-hidden="true"
          className="mx-1.5 inline text-primary"
          fill="currentColor"
          height="3"
          width="3"
        >
          <circle cx="1.5" cy="1.5" r="1.5" />
        </svg>
        <span className="inline">На главную</span>
      </Button>
      <div className="ml-auto flex items-center gap-2">
        <Drawer className="lg:hidden" />
        <ThemeSwitcher className="hidden lg:flex" />
        <AboutHoverButton className="hidden lg:flex" />
      </div>
    </NavbarScroll>
    <AboutHoverMenu className={maxWidth} />
  </>
);
