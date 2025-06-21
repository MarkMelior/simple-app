import { GithubEditLink } from '@/shared/lib/github';

import { getProjectList } from '@/entities/articles';

import { FooterNavigation } from './FooterNavigation';

import styles from './footer.module.scss';

export const Footer = async () => {
  const projects = await getProjectList();

  return (
    <footer className="text-sm leading-6 mt-12">
      <FooterNavigation projects={projects} />
      <div className={styles.content}>
        <div className="sm:flex">
          <p>Копирайт © 2024 Mark Melior.</p>
          <p className="sm:ml-4 sm:pl-4 sm:border-l sm:border-default-200 dark:border-default-100">
            Сделано с ❤️
          </p>
        </div>
        <GithubEditLink />
      </div>
    </footer>
  );
};
