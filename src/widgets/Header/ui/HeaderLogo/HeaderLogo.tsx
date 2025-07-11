import Link from 'next/link';

import { APP_NAME, AppRouteEnum, PublicImages } from '@/shared/constants';
import { Image, Tooltip } from '@/shared/ui/client';

import styles from './headerLogo.module.scss';

export const HeaderLogo = () => (
  <div className={styles.wrapper}>
    <Tooltip content="<- Кубик льда" placement="right">
      <Link className={styles.logo} href={AppRouteEnum.MAIN} title={APP_NAME}>
        <Image
          alt={APP_NAME}
          radius="md"
          src={PublicImages.interface.IceCube}
          title={APP_NAME}
        />
      </Link>
    </Tooltip>
  </div>
);
