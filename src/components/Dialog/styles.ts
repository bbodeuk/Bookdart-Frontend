import styled, { css } from 'styled-components';
import palette from '~/theme/palette';
import { DialogButtonType } from './types';

export const DialogBackdrop = styled.button`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
`;

export const StyledDialog = styled.section`
  position: fixed;
  top: 50%;
  left: 50%;
  width: clamp(0px, 90vw, 400px);
  padding: 16px;
  background-color: #fff;
  transform: translate3d(-50%, -50%, 0);
  box-sizing: border-box;
  border-radius: 8px;
  line-height: 1.5;
`;

export const DialogTitle = styled.h2`
  margin-bottom: 1rem;
`;

export const DialogButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

export const DialogButton = styled.button.attrs(
  ({ buttonType }: { buttonType: DialogButtonType }) => ({
    buttonType,
  }),
)`
  padding: 5px 10px;
  background-color: ${({ buttonType }) =>
    buttonType === 'confirm' ? palette.primary : palette.backgroundBase};
  border: 1px solid
    ${({ buttonType }) =>
      buttonType === 'confirm' ? palette.primary : palette.gray5};
  border-radius: 4px;
  cursor: pointer;
  ${({ buttonType }) =>
    buttonType === 'cancel' &&
    css`
      color: ${palette.primary};
    `}
`;
