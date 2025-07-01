import { LuFolderTree } from 'react-icons/lu';

import { Button, SidebarNavigation } from '@/shared/ui/client';

import { getArticlesList } from '@/entities/articles';

export const Sidebar = async () => {
  const items = await getArticlesList();

  return (
    <div className="sticky top-0 z-10 mt-[-theme('spacing.heightArticlesNavbar')] hidden h-screen max-h-screen grid-rows-2 gap-3 lg:grid">
      <nav className="h-full overflow-y-auto pr-6 lg:text-sm lg:leading-6">
        <div className="pointer-events-none sticky">
          <div className="h-10" />
          <div className="pointer-events-auto relative">
            <Button
              className="border border-default-900/10 bg-white py-6 text-default-600 hover:text-default-800 dark:border-default-600/10 dark:bg-default-100/90 md:py-4"
              fullWidth={true}
              radius="md"
              startContent={<LuFolderTree size={16} />}
              target="_blank"
            >
              Посмотреть каталог
            </Button>
          </div>
        </div>
        <SidebarNavigation items={items} />
      </nav>
      <div id="headlines-portal" />
    </div>
  );
};
