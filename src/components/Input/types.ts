import { HTMLInputTypeAttribute } from 'react';

export type Colors = 'primary' | 'success' | 'warning' | 'error';

export interface InputProps {
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  required?: boolean;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
  errorText?: string;
  label?: string;
  size?: number;
  color?: Colors;
}
