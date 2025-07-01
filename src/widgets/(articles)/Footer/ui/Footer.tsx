import { Emoji } from '@/shared/lib/emoji';
import { GithubEditLink } from '@/shared/lib/github';

import { getArticlesList } from '@/entities/articles';

import { FooterNavigation } from './FooterNavigation';

import styles from './footer.module.scss';

export const Footer = async () => {
  const articleList = await getArticlesList();

  return (
    <footer className="mt-12 text-sm leading-6">
      <FooterNavigation articleList={articleList} />
      <div className={styles.content}>
        <div className="sm:flex">
          <p>Копирайт © 2025 Mark Melior</p>
          <p className="dark:border-default-100 sm:ml-4 sm:border-l sm:border-default-200 sm:pl-4">
            Сделано с&nbsp;
            <Emoji emoji="❤️" />
          </p>
        </div>
        <GithubEditLink />
      </div>
    </footer>
  );
};
