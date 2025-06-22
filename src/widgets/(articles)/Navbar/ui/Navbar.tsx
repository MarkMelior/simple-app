import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';

import { Logo } from '@/shared/icons';
import { DownloadCvButton } from '@/shared/ui';
import { Button, SidebarNavigation } from '@/shared/ui/client';

import { Burger } from '@/features/Burger';

import { getProjectList } from '@/entities/articles';

import { NavbarScroll } from './NavbarScroll';
import { ThemeSwitcher } from './ThemeSwitcher';

export const Navbar = async () => {
  const items = await getProjectList();

  return (
    <NavbarScroll>
      <Logo changeOnClick={true} className="scale-80" />
      <Button
        as={Link}
        className="ml-1 flex h-min items-center gap-0 rounded-full bg-primary-400/10 px-3 py-1 text-xs font-medium leading-5 text-primary-400 hover:bg-primary-400/20"
        href="/"
      >
        <span>🚀 Melior Web</span>
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
        <Button
          as={Link}
          className="hidden text-default-500 hover:text-default-600 lg:flex"
          href="https://github.com/MarkMelior/melior-web"
          isIconOnly={true}
          target="_blank"
          variant="light"
        >
          <span className="sr-only">Melior Web on GitHub</span>
          <BsGithub size={20} />
        </Button>
        <Burger>
          <Button
            as={Link}
            className="mb-3 py-6 md:py-4"
            color="default"
            fullWidth={true}
            href="https://github.com/MarkMelior/melior-web"
            radius="md"
            startContent={<BsGithub size={20} />}
            target="_blank"
          >
            GitHub
          </Button>
          <DownloadCvButton className="mb-8" color="primary" />
          <SidebarNavigation items={items} />
        </Burger>
      </div>
    </NavbarScroll>
  );
};
