import Image from 'next/image';

import { PublicImages } from '@/shared/constants';

import styles from './images.module.scss';

export const Images = () => (
  <div className={styles.wrapper}>
    <Image
      alt="Sci-Fi Sniper Rifle (Hard Surface)"
      className={styles.image}
      height={1080}
      src={PublicImages.misc.Riffle}
      width={1080}
    />
    <Image
      alt="Organic Hard Surface"
      className={styles.image}
      height={1080}
      src={PublicImages.misc.Organic}
      width={1080}
    />
    <Image
      alt="3D RTX 3070 Ti Vision Motion-Design"
      className={styles.image}
      height={1080}
      src={PublicImages.misc.Videocard}
      width={1080}
    />
    <Image
      alt="3D Mech Kaino c-12"
      className={styles.image}
      height={1080}
      src={PublicImages.misc.Mech}
      width={1080}
    />
    <Image
      alt="Hard Surface Scope"
      className={styles.image}
      height={1080}
      src={PublicImages.misc.Scope}
      width={1080}
    />
    <Image
      alt="All my works in one place"
      className={styles.image}
      height={1080}
      src={PublicImages.misc.AllWorks}
      width={1080}
    />
  </div>
);
