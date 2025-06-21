import type { JSX } from 'react';

interface SidebarLinksProps {
  color: string
  icon: JSX.Element
  link: string
  name: string
}

export const SidebarLinks: SidebarLinksProps[] = [
  {
    color: 'blue',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24">
        <path
          className="fill-blue-400 group-hover:fill-blue-500 dark:group-hover:fill-blue-300 dark:fill-slate-600 transition"
          clipRule="evenodd"
          d="M11 5a6 6 0 0 0-4.687 9.746c.215.27.315.62.231.954l-.514 2.058a1 1 0 0 0 1.485 1.1l2.848-1.71c.174-.104.374-.15.576-.148H13a6 6 0 0 0 0-12h-2Z"
          fillRule="evenodd"
        />
        <circle
          className="fill-white dark:group-hover:fill-white dark:fill-slate-400"
          cx="12"
          cy="11"
          r="1"
        />
        <circle
          className="fill-blue-200 dark:group-hover:fill-white dark:fill-slate-400"
          cx="9"
          cy="11"
          r="1"
        />
        <circle
          className="fill-blue-200 dark:fill-slate-400 dark:group-hover:fill-white"
          cx="15"
          cy="11"
          r="1"
        />
      </svg>
    ),
    link: 'https://t.me/MarkMelior',
    name: 'Telegram',
  },
  {
    color: 'red',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24">
        <path
          className="fill-red-400 group-hover:fill-red-500 dark:group-hover:fill-red-300 dark:fill-slate-600 transition"
          clipRule="evenodd"
          d="M19 12a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
          fillRule="evenodd"
        />
        <path
          className="fill-red-50 group-hover:fill-red-100 dark:group-hover:fill-white dark:fill-slate-400"
          d="M11.082 9.107a.685.685 0 0 0-.72-.01.757.757 0 0 0-.362.653v4.5c0 .27.138.52.362.653.224.133.5.13.72-.01l3.571-2.25A.758.758 0 0 0 15 12a.758.758 0 0 0-.347-.643l-3.571-2.25Z"
        />
      </svg>
    ),
    link: 'https://www.youtube.com/@MarkMelior',
    name: 'YouTube',
  },
  {
    color: 'blue',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24">
        <path
          className="fill-blue-400 group-hover:fill-blue-500 dark:group-hover:fill-blue-300 dark:fill-slate-400 transition"
          clipRule="evenodd"
          d="M8 6C6.89543 6 6 6.89543 6 8V16C6 17.1046 6.89543 18 8 18H10.5C11.0523 18 11.5 17.5523 11.5 17V12C11.5 10.6193 12.6193 9.5 14 9.5H18V8C18 6.89543 17.1046 6 16 6H8ZM7.25 8C7.25 7.58579 7.58579 7.25 8 7.25H8.01C8.42421 7.25 8.76 7.58579 8.76 8C8.76 8.41421 8.42421 8.75 8.01 8.75H8C7.58579 8.75 7.25 8.41421 7.25 8ZM10 7.25C9.58579 7.25 9.25 7.58579 9.25 8C9.25 8.41421 9.58579 8.75 10 8.75H10.01C10.4242 8.75 10.76 8.41421 10.76 8C10.76 7.58579 10.4242 7.25 10.01 7.25H10Z"
          fill="#E879F9"
          fillRule="evenodd"
        />
        <path
          className="fill-blue-300 group-hover:fill-blue-400 dark:fill-slate-500"
          d="M13 12C13 11.4477 13.4477 11 14 11H17C17.5523 11 18 11.4477 18 12V17C18 17.5523 17.5523 18 17 18H14C13.4477 18 13 17.5523 13 17V12Z"
          fill="#F0ABFC"
        />
      </svg>
    ),
    link: 'https://www.behance.net/MarkMelior',
    name: 'Behance',
  },
];
