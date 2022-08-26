import { ReactNode } from 'react';

type ToastType = 'info' | 'succeess' | 'warning' | 'error';

export interface ToastOptions {
  type: ToastType;
}
export interface ToastProps {
  options?: ToastOptions;
  children: ReactNode;
}
export interface ToastStyledProps {
  options: ToastOptions;
  close: boolean;
}
