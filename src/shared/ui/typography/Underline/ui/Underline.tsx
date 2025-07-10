import styles from './underline.module.scss';

import type { FC, ReactNode } from 'react';

interface UnderlineProps {
  children: ReactNode
}

export const Underline: FC<UnderlineProps> = ({ children }) => (
  <u className={styles.underline}>
    {children}
  </u>
);
