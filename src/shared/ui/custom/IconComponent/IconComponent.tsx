import * as icons from '@/shared/icons';
import type { IconNames } from '@/shared/icons/types';
import type { IIcon } from '@/shared/ui';

import type { FC } from 'react';

interface IconComponentProps extends IIcon {
  icon: IconNames | undefined
}

export const IconComponent: FC<IconComponentProps> = ({ icon, ...props }) => {
  const Icon = icon ? icons[icon] : null;

  return Icon ? <Icon {...props} /> : null;
};
