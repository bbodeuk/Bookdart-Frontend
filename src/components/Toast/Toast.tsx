import { useState } from 'react';
import useToastStore from '~/store/useToastStore';
import {
  StyledToast,
  ToastBody,
  ToastCloseButton,
  ToastProgressBar,
} from './styles';
import { ToastProps } from './type';
import Icon from '../Icon';

export default function Toast({ options, children }: ToastProps) {
  const { setOpen } = useToastStore();
  const [close, setClose] = useState<boolean>(false);

  const handleClick = () => {
    if (!close) {
      setClose(true);
    }
  };

  return (
    <StyledToast
      options={options}
      close={close}
      onAnimationEnd={() => setOpen(false)}
    >
      <ToastCloseButton
        type="button"
        aria-label="창 닫기"
        onClick={handleClick}
      >
        <Icon name="close" />
      </ToastCloseButton>
      <ToastBody>{children}</ToastBody>
      <ToastProgressBar />
    </StyledToast>
  );
}
