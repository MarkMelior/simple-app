'use client';

import { useEffect, useState } from 'react';

import styles from './clientLoader.module.scss';

export const ClientLoader = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    return null;
  }

  return (
    <div className={styles.loader} data-testid="client-loader" />
  );
};
