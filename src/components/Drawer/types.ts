import { ReactNode } from 'react';

export type DrawerPosition = 'left' | 'right';
export interface DrawerProps {
  type?: DrawerPosition;
  children?: ReactNode;
  open: boolean;
  onClose: () => void;
}
