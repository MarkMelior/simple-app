'use client';

import { RxHamburgerMenu } from 'react-icons/rx';

import { Button } from '@/shared/ui/client';

import { useArticleNavbar } from '../store';

import type { FC } from 'react';

interface AboutHoverButtonProps {
  className?: string
}

export const AboutHoverButton: FC<AboutHoverButtonProps> = ({ className }) => {
  const { setIsHoveredButton } = useArticleNavbar();

  return (
    <Button
      className={className}
      color="primary"
      isIconOnly={true}
      onMouseEnter={() => setIsHoveredButton(true)}
      onMouseLeave={() => setIsHoveredButton(false)}
      variant="light"
    >
      <RxHamburgerMenu size={20} />
    </Button>
  );
};
