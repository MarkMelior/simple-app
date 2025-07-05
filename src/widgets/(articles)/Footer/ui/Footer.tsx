import { GithubEditLink } from '@/shared/lib/github';
import { FooterContent } from '@/shared/ui';

import { getArticlesList } from '@/entities/articles';

import { FooterNavigation } from './FooterNavigation';

import styles from './footer.module.scss';

export const Footer = async () => {
  const articleList = await getArticlesList();

  return (
    <footer className="mt-12 text-sm leading-6">
      <FooterNavigation articleList={articleList} />
      <div className={styles.content}>
        <FooterContent />
        <GithubEditLink />
      </div>
    </footer>
  );
};
