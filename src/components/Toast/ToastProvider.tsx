import { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import useToastStore from '~/store/useToastStore';
import Toast from './Toast';
import { ToastContext } from './ToastContext';
import { ToastOptions, ToastProps } from './type';

export default function ToastProvider({ children }: ToastProps) {
  const toastRoot = document.getElementById('toast') as HTMLElement;
  const { open, setOpen } = useToastStore();
  const [message, setMessage] = useState<string>('');
  const [options, setOptions] = useState<ToastOptions>({
    type: 'info',
  });

  const send = (msg: string, opitions: ToastOptions) => {
    setMessage(msg);
    setOptions(opitions);
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
      {createPortal(
        open ? <Toast options={options}>{message}</Toast> : null,
        toastRoot,
      )}
    </ToastContext.Provider>
  );
}
