'use client';

import { RxExit } from 'react-icons/rx';

import { Button } from '@/shared/ui/client';

import { logout } from '../../services/logout';

export const LogoutButton = () => (
  <Button
    color="danger"
    onPress={async () => await logout()}
    size="sm"
    startContent={<RxExit size={18} />}
    variant="flat"
  >
    Выйти
  </Button>
);
