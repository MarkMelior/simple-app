'use client';

import { LuFolderTree } from 'react-icons/lu';

import { useModals } from '@/shared/lib/common';
import { Button } from '@/shared/ui/client';

export const ViewCatalog = () => {
  const { toggle } = useModals('articles');

  return (
    <Button
      className="border border-default-900/10 bg-white py-6 text-default-600 hover:text-default-800 dark:border-default-600/10 dark:bg-default-100/90 md:py-4"
      fullWidth={true}
      onPress={() => toggle()}
      radius="md"
      startContent={<LuFolderTree size={16} />}
      target="_blank"
    >
      Посмотреть каталог
    </Button>
  );
};
