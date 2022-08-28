import { createContext } from 'react';
import { ToastOptions } from './type';

interface IContextProps {
  // eslint-disable-next-line no-unused-vars
  send: (msg: string, opitions: ToastOptions) => void;
}

export const ToastContext = createContext<IContextProps>({
  // eslint-disable-next-line no-unused-vars
  send: (msg, opitions) => undefined,
});

export default ToastContext;
