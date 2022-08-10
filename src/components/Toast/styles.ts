import styled from 'styled-components';
import palette from '~/theme/palette';

const WIDTH = 310;
const HEIGHT = 80;

export const StyledToast = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  min-width: ${WIDTH}px;
  min-height: ${HEIGHT}px;
  background-color: ${palette.backgroundBase};
  box-shadow: ${palette.boxShadow1};
  z-index: 9999;

  transition: top 2s ease 0s;

  &.slidein {
    top: var(--gnb-height) + 10;
  }

  &.slideOut {
    top: 0;
  }
`;

export const ToastBody = styled.div`
  margin: 13.5px 0;
  padding: 6px;
`;

export const ToastCloseButton = styled.button`
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
