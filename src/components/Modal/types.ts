import { Dispatch, SetStateAction } from 'react';

export type DrawerSize = 'large' | 'medium' | 'small';

export interface ModalProps {
  // eslint-disable-next-line no-undef
  children: JSX.Element | JSX.Element[];
  revealed: boolean;
  size?: DrawerSize;
  dimmed?: boolean;
  open?: () => void;
  /** Dispatcher for revealed state */
  setRevealed: Dispatch<SetStateAction<boolean>>;
}
