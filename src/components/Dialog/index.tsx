import { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import useDialog from '~/hooks/useDialog';
import useDialogStore from '~/store/useDialogStore';
import {
  DialogBackdrop,
  DialogButton,
  DialogButtons,
  DialogTitle,
  StyledDialog,
} from './styles';

export default function Dialog() {
  const dialogRoot = document.getElementById('dialog') as HTMLElement;
  const { revealed, text, type } = useDialogStore();
  const { onConfirm, onCancel } = useDialog();

  const DialogComponent = useCallback(
    () => (
      <>
        <DialogBackdrop type="button" onClick={onCancel} />
        <StyledDialog>
          <DialogTitle>{text}</DialogTitle>
          <DialogButtons>
            <DialogButton
              type="button"
              buttonType="confirm"
              onClick={onConfirm}
            >
              OK
            </DialogButton>
            {type === 'confirm' && (
              <DialogButton
                type="button"
                buttonType="cancel"
                onClick={onCancel}
              >
                cancel
              </DialogButton>
            )}
          </DialogButtons>
        </StyledDialog>
      </>
    ),
    [text, type, onConfirm, onCancel],
  );

  useEffect(() => {
    if (!revealed) {
      return;
    }

    const handleKeydown = ({ code }: KeyboardEvent) => {
      switch (code) {
        case 'Escape': {
          onCancel();
          break;
        }
        default:
      }
    };

    window.addEventListener('keydown', handleKeydown);

    // eslint-disable-next-line consistent-return
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [revealed, onCancel]);

  return createPortal(revealed ? <DialogComponent /> : null, dialogRoot);
}
