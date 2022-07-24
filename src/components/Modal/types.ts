import { Dispatch, ReactElement, SetStateAction } from 'react';

export type DrawerSize = 'large' | 'medium' | 'small';

export interface ModalProps {
  children: ReactElement | ReactElement[];
  revealed: boolean;
  size?: DrawerSize;
  dimmed?: boolean;
  open?: () => void;
  /** Dispatcher for revealed state */
  setRevealed: Dispatch<SetStateAction<boolean>>;
}
