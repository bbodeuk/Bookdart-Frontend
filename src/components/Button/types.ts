import { ReactNode } from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';

export interface ButtonProps {
  size?: string;
  variant?: string;
  disabled?: boolean;
  children: ReactNode | string;
  onAction: () => void;
}

export type ObjType = {
  [key: string]: FlattenSimpleInterpolation;
};
