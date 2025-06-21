import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';

import { Logo } from '@/shared/icons/Logo';
import { DownloadCvButton } from '@/shared/ui';
import { Button, SidebarNavigation } from '@/shared/ui/client';

import { getProjectList } from '@/entities/articles';

import { Burger } from '@/features';

import { NavbarScroll } from './NavbarScroll';
import { ThemeSwitcher } from './ThemeSwitcher';

export const Navbar = async () => {
  const items = await getProjectList();

  return (
    <NavbarScroll>
      <Logo changeOnClick={true} className="transform scale-80" />
      <Button
        as={Link}
        className="flex gap-0 ml-1 text-xs leading-5 font-medium text-primary-400 bg-primary-400/10 rounded-full py-1 px-3 items-center hover:bg-primary-400/20 h-min"
        href="/"
      >
        <span>
          🚀
          Melior Web
        </span>
        {/* TODO */}
        {/* <svg
          width='2'
          height='2'
          fill='currentColor'
          aria-hidden='true'
          className='mx-2 text-primary inline md:hidden'
        >
          <circle cx='1' cy='1' r='1' />
        </svg>
        <span className='inline md:hidden'>Небольшие и современные пет-проекты</span> */}
      </Button>
      <div className="gap-2 flex items-center ml-auto">
        <ThemeSwitcher />
        <Button
          as={Link}
          className="hidden lg:flex text-default-500 hover:text-default-600"
          href="https://github.com/MarkMelior/simple-app"
          isIconOnly={true}
          target="_blank"
          variant="light"
        >
          <span className="sr-only">Simple App on GitHub</span>
          <BsGithub size={20} />
        </Button>
        <Burger>
          <Button
            as={Link}
            className="mb-3 py-6 md:py-4"
            color="default"
            fullWidth={true}
            href="https://github.com/MarkMelior/simple-app"
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
