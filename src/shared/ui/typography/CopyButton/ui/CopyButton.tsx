'use client';

import { LuCheck, LuCopy } from 'react-icons/lu';

import { useCopy } from '@/shared/lib/text';
import { Button, Tooltip } from '@/shared/ui/client';

import type { FC } from 'react';

interface CopyButtonProps {
  text: string
}

export const CopyButton: FC<CopyButtonProps> = ({ text }) => {
  const { copied, handleCopy } = useCopy();

  return (
    <Tooltip content="Скопировать код" placement="top">
      <Button
        className="text-default-400 hover:text-default-200"
        data-copied={copied}
        isDisabled={copied}
        isIconOnly={true}
        onPress={() => handleCopy(text)}
        radius="sm"
        size="sm"
        variant="light"
      >
        <LuCheck
          className="absolute text-success-400 group-hover:text-success-600 opacity-0 scale-50 group-data-[copied=true]:opacity-100 group-data-[copied=true]:scale-100 transition-all fade-in"
          size={18}
        />
        <LuCopy
          className="absolute text-default-400 group-hover:text-default-600 opacity-100 scale-100 group-data-[copied=true]:opacity-0 group-data-[copied=true]:scale-50 transition-all fade-out"
          size={18}
        />
      </Button>
    </Tooltip>
  );
};
