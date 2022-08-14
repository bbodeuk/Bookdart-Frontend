import React, { ButtonHTMLAttributes, ReactElement } from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: string;
  variant?: string;
  disabled?: boolean;
  children?: ReactElement | ReactElement[];
  onAction?: (e: React.MouseEvent) => void;
}

export type ObjType = {
  [key: string]: FlattenSimpleInterpolation;
};
