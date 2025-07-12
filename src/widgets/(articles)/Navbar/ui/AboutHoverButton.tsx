'use client';

import { RxHamburgerMenu } from 'react-icons/rx';

import { Button } from '@/shared/ui/client';

import { useArticleNavbar } from '../store';

export const AboutHoverButton = () => {
  const { setIsHoveredButton } = useArticleNavbar();

  return (
    <Button
      className="hidden lg:flex"
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
