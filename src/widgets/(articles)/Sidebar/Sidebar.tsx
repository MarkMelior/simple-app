import { getArticlesList } from '@/entities/articles';

import { SidebarNavigation } from './SidebarNavigation';
import { ViewCatalog } from './ViewCatalog';

export const Sidebar = async () => {
  const items = await getArticlesList();

  return (
    <div className="sticky top-0 z-sidebar mt-[-theme('spacing.heightArticlesNavbar')] hidden h-screen max-h-screen grid-rows-2 gap-3 lg:grid">
      <nav className="h-full overflow-y-auto pr-6 lg:text-sm lg:leading-6">
        <div className="pointer-events-none sticky">
          <div className="h-10" />
          <div className="pointer-events-auto relative">
            <ViewCatalog />
          </div>
        </div>
        <SidebarNavigation items={items} />
      </nav>
      <div id="headlines-portal" />
    </div>
  );
};
