import { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import useToastStore from '~/store/useToastStore';
import Toast from './Toast';
import { ToastContext } from './ToastContext';

export default function ToastProvider() {
  const toastRoot = document.getElementById('toast') as HTMLElement;
  const { open, setOpen } = useToastStore();
  const [message, setMessage] = useState<string>('');

  const send = (msg: string) => {
    console.log(`1 : ${msg}`);
    setMessage(msg);
  };

  const contextValue = useMemo(() => ({ send }), []);

  useEffect(() => {
    if (message !== '') {
      console.log(`2 : ${message}`);
      setOpen(true);
    }
  }, [message]);

  return (
    <ToastContext.Provider value={contextValue}>
      {createPortal(open ? <Toast>{message}</Toast> : null, toastRoot)}
    </ToastContext.Provider>
  );
}
