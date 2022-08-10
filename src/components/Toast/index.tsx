import { createContext, useCallback, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import useToastStore from '~/store/useToastStore';
import { StyledToast, ToastBody, ToastCloseButton } from './styles';
import { ToastProps } from './type';
import Icon from '../Icon';

export default function Toast({ children }: ToastProps) {
  const toastRoot = document.getElementById('toast') as HTMLElement;
  const { open, setOpen } = useToastStore();
  const [close, setClose] = useState<boolean>(false);

  const contextValue = useMemo(() => ({ close }), []);

  const handleClick = () => {
    if (!close) {
      setClose(true);
    }
  };

  const ToastComponent = useCallback(
    () => (
      <StyledToast close={close} onAnimationEnd={() => setOpen(false)}>
        <ToastCloseButton
          type="button"
          aria-label="창 닫기"
          onClick={handleClick}
        >
          <Icon name="close" />
        </ToastCloseButton>
        <ToastBody>{children} Hello</ToastBody>
      </StyledToast>
    ),
    [close],
  );

  const ToastContext = createContext(null);

  return createPortal(
    open ? (
      <ToastContext.Provider value={contextValue}>
        <ToastComponent />
      </ToastContext.Provider>
    ) : null,
    toastRoot,
  );
}
