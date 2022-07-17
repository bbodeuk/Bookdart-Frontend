import Icon from '~/components/Icon';
import { StyledModal, ModalBackdrop, CloseModalButton } from './styles';
import { ModalProps } from './types';

export default function Modal({
  size = 'large',
  revealed,
  dimmed = true,
  setRevealed,
  children,
}: ModalProps) {
  return (
    <>
      <ModalBackdrop
        revealed={revealed}
        dimmed={dimmed}
        onClick={() => {
          setRevealed(false);
        }}
      />
      <StyledModal revealed={revealed} size={size}>
        <CloseModalButton
          type="button"
          aria-label="창 닫기"
          onClick={() => {
            setRevealed(false);
          }}
        >
          <Icon name="close" />
        </CloseModalButton>
        {children}
      </StyledModal>
    </>
  );
}
