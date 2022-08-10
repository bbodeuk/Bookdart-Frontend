import { useCallback } from 'react';
import { createPortal } from 'react-dom';
import useToastStore from '~/store/useToastStore';
import { StyledToast, ToastBody, ToastCloseButton } from './styles';
import { ToastProps } from './type';
import Icon from '../Icon';

export default function Toast({ children }: ToastProps) {
  const toastRoot = document.getElementById('toast') as HTMLElement;
  const { open, setOpen } = useToastStore();

  setTimeout(() => {
    setOpen(false);
  }, 5000);

  const ToastComponent = useCallback(
    () => (
      <StyledToast className="slidein">
        <ToastCloseButton type="button" aria-label="창 닫기">
          <Icon name="close" />
        </ToastCloseButton>
        <ToastBody>{children} Hello</ToastBody>
      </StyledToast>
    ),
    [],
  );
  return createPortal(open ? <ToastComponent /> : null, toastRoot);
}
