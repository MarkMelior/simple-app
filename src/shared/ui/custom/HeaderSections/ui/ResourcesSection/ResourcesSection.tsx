import { cn } from '@/shared/lib/common';

import styles from './resourcesSection.module.scss';

import type { FC } from 'react';

const usefulLinks = [
  {
    description: 'компании, выбравшие WEEEK',
    href: '/ru/cases',
    icon: 'crown',
    title: 'истории успеха',
  },
  {
    description: 'понятная и бодрая документация',
    href: '/ru/help',
    icon: 'question',
    title: 'помощь',
  },
  {
    description: 'будущие фичи',
    href: '/ru/roadmap',
    icon: 'map',
    title: 'дорожная карта',
  },
  {
    description: 'термины по управлению проектами',
    href: '/ru/glossary',
    icon: 'book-stroke',
    title: 'глоссарий',
  },
  {
    description: null,
    extraClass: styles.mobileOnly,
    href: '/ru/cases',
    icon: 'circlesInCircle',
    title: 'примеры использования',
  },
];

const examplesLinks = [
  {
    description: 'Как организовать работу небольшого агентства, чтоб...',
    href: '#',
    title: 'Процессы диджитал-агентства',
  },
  {
    description: 'Рассказываем, как выстроить работу по разработке с...',
    href: '#',
    title: 'Разработка сайтов',
  },
  {
    description: 'Как в WEEEK выстроить редакционные процессы и нала...',
    href: '#',
    title: 'Контент-план',
  },
  {
    description: 'Как собрать и реализовать маркетинговый план в WEE...',
    href: '#',
    title: 'Маркетинговый план',
  },
];

// Данные сервисов
const resourcesServices = [
  {
    description: 'полезности и рассказы о приятном',
    href: '/ru/blog',
    imgSrc: '/static/header/paper.svg',
    title: 'блог',
  },
  {
    description: 'гайды и видео-разборы сервиса',
    external: true,
    href: 'https://www.youtube.com/@WEEEK',
    imgSrc: '/static/header/originalYoutube.svg',
    title: 'канал на ютубе',
  },
  {
    description: 'слушай в Spotify, Яндекс.Музыке, VK Подкастах и вообще везде',
    href: '/ru/podcasts',
    imgSrc: '/static/header/later.png?v4',
    title: 'подкаст «Потом доделаю»',
  },
];

interface ResourcesSectionProps {
  isVisible: boolean
}

export const ResourcesSection: FC<ResourcesSectionProps> = ({ isVisible }) => (
  <div
    className={cn(
      styles.resources,
      styles.section,
      { [styles.visible]: isVisible },
    )}
    id="resources"
    style={{ display: isVisible ? 'block' : 'none' }}
  >
    <div className={styles.resourcesWrapper}>
      <div className={styles.resourcesUseful}>
        <div className={styles.resourcesTitle}>полезные ссылки</div>

        <div className={styles.resourcesUsefulLinks}>
          {usefulLinks.map(({ description, extraClass, href, icon, title }) => (
            <a
              className={cn(styles.resourcesUsefulLink, extraClass)}
              href={href}
              key={title}
            >
              {icon}
              <div className={styles.resourcesUsefulLinkWrapper}>
                <div className={styles.resourcesUsefulLinkTitle}>{title}</div>
                {description && (
                  <div className={styles.resourcesUsefulLinkDescription}>{description}</div>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className={styles.resourcesExamples}>
        <div className={styles.resourcesTitle}>примеры использования</div>

        <div className={styles.resourcesExamplesLinks}>
          {examplesLinks.map(({ description, href, title }) => (
            <a className={styles.resourcesExamplesLink} href={href} key={title}>
              <div className={styles.resourcesExamplesLinkWrapper}>
                <div className={styles.resourcesExamplesLinkTitle}>{title}</div>
                <div className={styles.resourcesExamplesLinkDescription}>{description}</div>
              </div>
            </a>
          ))}

          <a
            className={styles.resourcesExamplesMore}
            href="/ru/help/for-teams/management?utm_source=weeeksite&amp;utm_medium=menu&amp;utm_campaign=ready_made_solutions"
          >
            <div className={styles.resourcesExamplesMoreIconWrapper}>
              <svg className={styles.resourcesExamplesMoreIcon}>
                {/* <use xlinkHref="/static/symbol/sprite.svg?v5#dotsHorizontal" /> */}
              </svg>
            </div>
            <div className={styles.resourcesExamplesMoreTitle}>другие примеры</div>
          </a>
        </div>
      </div>
    </div>

    <div className={styles.resourcesServices}>
      {resourcesServices.map(({ description, external, href, imgSrc, title }) => (
        <a
          className={styles.resourcesServicesService}
          href={href}
          key={title}
          {...(external ? { rel: 'nofollow noopener noreferrer', target: '_blank' } : {})}
        >
          <div className={styles.resourcesServicesServiceWrapper}>
            <img alt="" className={styles.resourcesServicesServiceIcon} src={imgSrc} />

            <svg className={styles.resourcesServicesServiceArrow}>
              {/* <use xlinkHref="/static/symbol/sprite.svg?v5#arrow-external" /> */}
            </svg>
          </div>

          <div className={styles.resourcesServicesServiceTitle}>{title}</div>

          <div className={styles.resourcesServicesServiceDescription}>{description}</div>
        </a>
      ))}
    </div>
  </div>
);
