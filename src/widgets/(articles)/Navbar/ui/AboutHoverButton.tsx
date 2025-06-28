'use client';

import { LuPointer } from 'react-icons/lu';

import { Button } from '@/shared/ui/client';

import { useArticleNavbar } from '../store';

export const AboutHoverButton = () => {
  const { setIsHoveredButton } = useArticleNavbar();

  return (
    <Button
      className="hidden text-default-500 hover:text-default-600 lg:flex"
      isIconOnly={true}
      onMouseEnter={() => setIsHoveredButton(true)}
      onMouseLeave={() => setIsHoveredButton(false)}
      variant="light"
    >
      <LuPointer size={20} strokeWidth={1.5} />
    </Button>
  );
};
