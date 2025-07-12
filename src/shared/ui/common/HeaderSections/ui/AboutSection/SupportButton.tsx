'use client';

import { useModals } from '@/shared/lib/common';
import { Emoji } from '@/shared/lib/emoji';
import { Button } from '@/shared/ui/client';

export const SupportButton = () => {
  const { toggle } = useModals('support');

  return (
    <Button
      className="col-span-2 w-full"
      onPress={() => toggle()}
      variant="flat"
    >
      <Emoji emoji="💕" />
      &nbsp;Поддержать
    </Button>
  );
};
