import Link from 'next/link';
import { MdArrowOutward } from 'react-icons/md';

import { PublicImages } from '@/shared/constants';
import { cn } from '@/shared/lib/common';
import { Image } from '@/shared/ui/client';

import styles from './images.module.scss';

const works = [
  {
    alt: 'Sci-Fi Sniper Rifle (Hard Surface)',
    link: 'https://www.artstation.com/artwork/n0LDPe',
    src: PublicImages.works.Riffle,
  },
  {
    alt: 'Organic Hard Surface',
    link: 'https://www.artstation.com/artwork/aoBB08',
    src: PublicImages.works.Organic,
  },
  {
    alt: '3D RTX 3070 Ti Vision Motion-Design',
    link: 'https://www.artstation.com/artwork/1xkWR8',
    src: PublicImages.works.Videocard,
  },
  {
    alt: '3D Mech Kaino c-12',
    link: 'https://www.artstation.com/artwork/vJ3xgY',
    src: PublicImages.works.Mech,
  },
  {
    alt: 'Hard Surface Scope',
    link: 'https://www.artstation.com/artwork/xDoov2',
    src: PublicImages.works.Scope,
  },
  {
    alt: 'All my works in one place',
    src: PublicImages.works.AllWorks,
  },
];

export const Images = () => (
  <div className={styles.wrapper}>
    {works.map(({ alt, link, src }) => (
      link ? (
        <Link
          className={cn(styles.image, 'relative')}
          href={link}
          key={src}
          target="_blank"
        >
          <MdArrowOutward className={styles.arrow} />
          <Image alt={alt} src={src} />
        </Link>
      ) : (
        <Image
          alt={alt}
          className={styles.image}
          key={src}
          src={src}
        />
      )
    ))}
  </div>
);
