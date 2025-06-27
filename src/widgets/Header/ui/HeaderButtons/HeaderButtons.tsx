import { Button } from '@/shared/ui/client';

import styles from './headerButtons.module.scss';

export const HeaderButtons = () => (
  <div className={styles.wrapper}>
    <Button variant="faded">
      Кнопка
    </Button>
  </div>
);
