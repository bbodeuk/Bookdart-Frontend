import { ReactNode } from 'react';

export interface DrawerProps {
  type?: 'left' | 'right';
  children?: ReactNode;
  open: boolean;
  onClose: () => void;
}

export interface DrawerPosition {
  toggle: boolean;
  type: 'left' | 'right';
}
