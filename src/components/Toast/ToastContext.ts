import { createContext } from 'react';

interface IContextProps {
  // eslint-disable-next-line no-unused-vars
  send: (msg: string) => void;
}

export const ToastContext = createContext<IContextProps>({
  // eslint-disable-next-line no-unused-vars
  send: (msg) => undefined,
});

export default ToastContext;
