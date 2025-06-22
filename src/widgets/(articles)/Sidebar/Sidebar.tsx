import { DownloadCvButton } from '@/shared/ui';
import { SidebarNavigation } from '@/shared/ui/client';

import { getProjectList } from '@/entities/articles';

export const Sidebar = async () => {
  const items = await getProjectList();

  return (
    <div className="sticky top-0 z-10 mt-[-var(--articles-height-navbar)] hidden h-screen max-h-screen grid-rows-2 gap-3 lg:grid">
      <nav className="h-full overflow-y-auto pr-6 lg:text-sm lg:leading-6">
        <div className="pointer-events-none sticky">
          <div className="h-10" />
          <div className="pointer-events-auto relative">
            <DownloadCvButton />
          </div>
          <div className="h-8" />
        </div>
        <SidebarNavigation items={items} />
      </nav>
      <div id="headlines-portal" />
    </div>
  );
};
