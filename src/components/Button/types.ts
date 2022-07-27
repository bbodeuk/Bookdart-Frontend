import React, { ReactElement } from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';

export interface ButtonProps {
  size?: string;
  variant?: string;
  disabled?: boolean;
  children?: ReactElement | ReactElement[];
  onAction?: (e: React.MouseEvent) => void;
}

export type ObjType = {
  [key: string]: FlattenSimpleInterpolation;
};
