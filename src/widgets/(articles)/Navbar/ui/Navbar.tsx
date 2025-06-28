import Link from 'next/link';

import { APP_NAME } from '@/shared/constants';
import { Logo } from '@/shared/icons';
import { Button, EmojiAnim } from '@/shared/ui/client';

import { AboutHoverButton } from './AboutHoverButton';
import { AboutHoverMenu } from './AboutHoverMenu';
import { NavbarScroll } from './NavbarScroll';
import { ThemeSwitcher } from './ThemeSwitcher';

export const Navbar = () => (
  <>
    <NavbarScroll>
      <Logo changeOnClick={true} className="scale-80" />
      <Button
        as={Link}
        className="ml-1 flex h-min items-center gap-0 rounded-full bg-primary-600/10 px-3 py-1 text-xs font-medium leading-5 text-primary-600 hover:bg-primary-600/20"
        href="/"
      >
        <span>
          <EmojiAnim emoji="🚀" />
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
        <ThemeSwitcher />
        <AboutHoverButton />
      </div>
    </NavbarScroll>
    <AboutHoverMenu />
  </>
);
