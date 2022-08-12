import { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import useToastStore from '~/store/useToastStore';
import Toast from './Toast';
import { ToastContext } from './ToastContext';
import { ToastProps } from './type';

export default function ToastProvider({ children }: ToastProps) {
  const toastRoot = document.getElementById('toast') as HTMLElement;
  const { open, setOpen } = useToastStore();
  const [message, setMessage] = useState<string>('');

  const send = (msg: string) => {
    setMessage(msg);
  };

  const contextValue = useMemo(() => ({ send }), []);

  useEffect(() => {
    if (message !== '') {
      setOpen(true);
    }
  }, [message]);

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      {createPortal(open ? <Toast>{message}</Toast> : null, toastRoot)}
    </ToastContext.Provider>
  );
}
