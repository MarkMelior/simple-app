import styles from './bluredLight.module.scss';

/**
 * @deprecated Использует очень много ресурсов из-за filter
 */
export const BluredLight = () => (
  <div>
    <span className={styles.ellipse1} />
    <span className={styles.ellipse2} />
    <span className={styles.ellipse3} />
  </div>
);
