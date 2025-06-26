import Image from 'next/image';
import Link from 'next/link';

import { APP_NAME, AppRouteEnum } from '@/shared/constants';
import { Tooltip } from '@/shared/ui/client';

import styles from './headerLogo.module.scss';

export const HeaderLogo = () => (
  <div className={styles.wrapper}>
    <Tooltip content={APP_NAME} placement="right">
      <Link className={styles.logo} href={AppRouteEnum.MAIN} title={APP_NAME}>
        <Image
          alt={APP_NAME}
          height={64}
          src="/images/ice-cube.png"
          title={APP_NAME}
          width={64}
        />
      </Link>
    </Tooltip>
  </div>
);
