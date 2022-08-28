import { ReactElement } from 'react';

export type DrawerPosition = 'left' | 'right';
export interface DrawerProps {
  type?: DrawerPosition;
  children?: ReactElement | ReactElement[];
  revealed: boolean;
  onClose: () => void;
  handler?: (state: boolean) => void;
}
