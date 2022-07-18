import styled from 'styled-components';
import palette from '~/theme/palette';
import { DrawerSize } from './types';

const getProperWidthBySize = (size: DrawerSize) => {
  switch (size) {
    case 'large': {
      return '95vw';
    }
    case 'medium': {
      return '90vw';
    }
    case 'small': {
      return '85vw';
    }
    default: {
      throw new Error('invalid size');
    }
  }
};

const getMaxWidthBySize = (size: DrawerSize) => {
  switch (size) {
    case 'large': {
      return '1184px';
    }
    case 'medium': {
      return '1044px';
    }
    case 'small': {
      return '924px';
    }
    default: {
      throw new Error('invalid size');
    }
  }
};

export const StyledModal = styled.div.attrs(
  ({ revealed, size }: { revealed: boolean; size: DrawerSize }) => ({
    revealed,
    size,
  }),
)`
  position: fixed;
  top: 50%;
  left: 50%;
  width: ${({ size }) =>
    `clamp(0px, ${getProperWidthBySize(size)}, ${getMaxWidthBySize(size)})`};
  padding: 32px;
  background-color: ${palette.backgroundBase};
  opacity: ${({ revealed }) => (revealed ? '1' : '0')};
  pointer-events: ${({ revealed }) => (revealed ? 'all' : 'none')};
  transform: translate3d(-50%, -50%, 0);
  transition: opacity 0.25s ease-in-out;
  z-index: 1100;
`;

export const ModalBackdrop = styled.div.attrs(
  ({ revealed, dimmed }: { revealed: boolean; dimmed: boolean }) => ({
    revealed,
    dimmed,
  }),
)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: ${({ dimmed }) =>
    dimmed ? 'rgba(0, 0, 0, 0.5)' : 'transparent'};
  opacity: ${({ revealed }) => (revealed ? '1' : '0')};
  pointer-events: ${({ revealed }) => (revealed ? 'all' : 'none')};
  transition: opacity 0.25s ease-in-out;
  z-index: 1000;
`;

export const CloseModalButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  width: 24px;
  height: 24px;
  font-size: 18px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
