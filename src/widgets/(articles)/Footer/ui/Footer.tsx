import { GithubEditLink } from '@/shared/lib/github';

import { getArticleList } from '@/entities/articles';

import { FooterNavigation } from './FooterNavigation';

import styles from './footer.module.scss';

export const Footer = async () => {
  const articleList = await getArticleList();

  return (
    <footer className="mt-12 text-sm leading-6">
      <FooterNavigation articleList={articleList} />
      <div className={styles.content}>
        <div className="sm:flex">
          <p>Копирайт © 2025 Mark Melior</p>
          <p className="dark:border-default-100 sm:ml-4 sm:border-l sm:border-default-200 sm:pl-4">
            Сделано с ❤️
          </p>
        </div>
        <GithubEditLink />
      </div>
    </footer>
  );
};
