import React, { ReactNode } from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';

export interface ButtonProps {
  size?: string;
  variant?: string;
  disabled?: boolean;
  children?: ReactNode | string;
  onAction?: (e: React.MouseEvent) => void;
}

export type ObjType = {
  [key: string]: FlattenSimpleInterpolation;
};
