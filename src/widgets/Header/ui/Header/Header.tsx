import { getArticlesList } from '@/entities/articles';

import { HeaderAlert } from '../HeaderAlert/HeaderAlert';
import { HeaderButtons } from '../HeaderButtons/HeaderButtons';
import { HeaderLinks } from '../HeaderLinks/HeaderLinks';
import { HeaderLogo } from '../HeaderLogo/HeaderLogo';
import { HeaderMenu } from '../HeaderMenu/HeaderMenu';

import styles from './header.module.scss';

/**
 * 1) Статьи
 * - Лучшие практики разработки
 *
 * 2) Обо мне
 * - Какие технологии использую
 * - Пройденные курсы
 * - Мой пк
 * - Ссылки (на главном всплытии виджет)
 * - Мои работы
 *
 * 3) Премиум пользователи (сделать посты для людей из бусти)
 *
 * 4) Мини приложения
 * - Заметки
 * - Казино
 * - Нейросети
 *
 * 5) UI core
 *
 * 6) Все ссылки
 */

export const Header = async () => {
  const articlesList = await getArticlesList();

  return (
    <header className={styles.header}>
      <HeaderLogo />
      <HeaderAlert
        color="secondary"
        // link={{ href: '#', text: 'Какие новости? 👀' }}
        title={`[${process.env.NEXT_PUBLIC_APP_VERSION}] Сайт в разработке...`}
      >
        <HeaderLinks color="secondary" />
      </HeaderAlert>
      <HeaderButtons />
      <HeaderMenu articlesList={articlesList} />
    </header>
  );
};
