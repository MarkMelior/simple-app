'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import type { FC, ReactNode } from 'react';

export type PortalId = 'headlines-portal';

interface PortalProps {
  children: ReactNode
  id: PortalId
}

export const Portal: FC<PortalProps> = ({ children, id }) => {
  const [mounted, setMounted] = useState(false);
  const portalRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    portalRef.current = document.getElementById(id);
    setMounted(true);

    return () => {
      portalRef.current = null;
      setMounted(false);
    };
  }, []);

  if (!mounted || !portalRef.current) {
    return null;
  }

  return createPortal(children, portalRef.current);
};
