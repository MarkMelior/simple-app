import React from 'react';

import { Icon } from '@/shared/ui';
import type { IIcon } from '@/shared/ui';

export const FlaskIcon = ({
  className,
  fill = 'currentColor',
  height = 24,
  strokeWidth = 2,
  width = 24,
}: IIcon) => (
  <Icon
    className={className}
    height={height}
    viewBox="0 0 24 24"
    width={width}
  >
    <svg
      fill={fill}
      height="24"
      viewBox="0 0 24 24"
      width="24"
      x="0"
      xmlns="http://www.w3.org/2000/svg"
      y="0"
    >
      <g fill="none">
        <path
          d="M15 9v9a3 3 0 0 1-6 0V9"
          stroke={fill}
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
        <path
          d="M7 9h10"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
        <path d="M13 18v-2.945a.055.055 0 0 0-.055-.055h-1.89a.055.055 0 0 0-.055.055V18a1 1 0 1 0 2 0" fill={fill} />
        <circle
          cx="15"
          cy="4"
          fill={fill}
          r="1"
          stroke={fill}
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
        <circle
          cx="8.5"
          cy="5.5"
          fill={fill}
          r="1"
          stroke={fill}
          strokeLinejoin="round"
        />
      </g>
    </svg>
  </Icon>
);
