import styles from './cardRotate.module.scss';

import type { JSX } from 'react';

interface CardRotateProps {
  color: string
  icon: JSX.Element
  name: string
  text: string
}

export const CardRotate = ({ color, icon, name, text }: CardRotateProps) => (
  <div className={styles.container}>
    <div className={styles.card}>
      <div
        className={styles.front}
        style={{
          boxShadow: `0px -4px 0px -1px ${color}, 0px 0px 0px 1px rgba(255, 255, 255, 0.08)`,
        }}
      >
        <div className={styles.inner}>
          <div>
            <h1>{name}</h1>
            {/* <Image
                src='/images/icons/refresh.svg'
                alt='Иконка перезагрузки'
                className={`${styles.refresh} noselect`}
                width={20}
                height={20}
              /> */}
          </div>
          {icon}
        </div>
      </div>
      <div
        className={styles.back}
        style={{
          boxShadow: `0px -4px 0px -1px ${color}, 0px 0px 0px 1px rgba(255, 255, 255, 0.08)`,
        }}
      >
        <div className={styles.inner}>
          <h1 style={{ color }}>{name}</h1>
          <p>{text}</p>
        </div>
      </div>
    </div>
  </div>
);
