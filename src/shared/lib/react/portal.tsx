'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export enum PortalEnum {
  Headlines = 'headlines-portal',
}

interface PortalProps {
  children: React.ReactNode
  id: PortalEnum
}

export const Portal = ({ children, id }: PortalProps) => {
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
