import { ReactNode } from 'react';

export interface DrawerProps {
  type?: DrawerPosition;
  children?: ReactNode;
  open: boolean;
  onClose: () => void;
}

export type DrawerPosition = 'left' | 'right';
