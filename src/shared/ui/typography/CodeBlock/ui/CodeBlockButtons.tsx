'use client';

import { Link } from '@heroui/react';
import { LuEye } from 'react-icons/lu';

import { cn } from '@/shared/lib/common';
import { Button, CopyButton, Tooltip } from '@/shared/ui/client';

interface CodeBlockButtonsProps {
  exampleLink?: string
  hoverButton?: boolean
  text: string
}

export const CodeBlockButtons = ({
  exampleLink,
  hoverButton,
  text,
}: CodeBlockButtonsProps) => (
  <div
    className={cn('flex gap-1 items-center', {
      'absolute right-2 top-2 opacity-0 group-hover/buttons:opacity-100 transition-opacity': hoverButton,
    })}
  >
    {exampleLink ? (
      <Tooltip content="Посмотреть код на GitHub" placement="top">
        <Button
          as={Link}
          href={exampleLink}
          isIconOnly={true}
          radius="sm"
          size="sm"
          target="_blank"
          variant="light"
        >
          <LuEye
            className="text-default-400 transition-colors group-hover:text-default-600"
            size={20}
          />
        </Button>
      </Tooltip>
    ) : null}
    <CopyButton text={text} />
  </div>
);
