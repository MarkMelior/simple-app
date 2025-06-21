import { DownloadCvButton } from '@/shared/ui';
import { SidebarNavigation } from '@/shared/ui/client';

import { getProjectList } from '@/entities/articles';

export const Sidebar = async () => {
  const items = await getProjectList();

  return (
    <nav className="lg:text-sm lg:leading-6 h-full overflow-y-auto pr-6">
      <div className="sticky top-0 -ml-0.5 pointer-events-none">
        <div className="h-10 bg-default-100 dark:bg-default-50" />
        <div className="relative pointer-events-auto">
          <DownloadCvButton />
        </div>
        <div className="h-8 bg-gradient-to-b from-default-100 dark:from-default-50" />
      </div>
      <SidebarNavigation items={items} />
    </nav>
  );
};
