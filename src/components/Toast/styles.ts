import styled, { css, keyframes } from 'styled-components';
import palette from '~/theme/palette';
import { ToastStyledProps } from './type';

const WIDTH = 310;
const HEIGHT = 80;

const slideIn = keyframes`
  0% {
    transform: translate(-50%, calc(-1 * (var(--gnb-height) + 20px + ${HEIGHT}px)));
  }
  10% {
    transform: translate(-50%,35%);
  }
`;

const slideOut = keyframes`
  0% {
    transform: translate(-50%,35%);
  }
  100% {
    transform: translate(-50%, calc(-1 * (var(--gnb-height) + 20px + ${HEIGHT}px)));
  }
`;

const progress = keyframes`
  0% {
    width: 100%;
  }
  100% {
    width: 0%;
  }
`;

const slideInAndOutAnimation = css`
  animation: ${slideIn} 3s 2 alternate;
`;
const slideOutAnimation = css`
  animation: ${slideOut} 0.5s cubic-bezier(0.42, 0, 0.58, 1);
`;

export const StyledToast = styled.div.attrs(
  ({ options, close }: ToastStyledProps) => ({
    options,
    close,
  }),
)`
  position: fixed;
  left: 50%;
  transform: translate(-50%, 35%);
  min-width: ${WIDTH}px;
  min-height: ${HEIGHT}px;
  background-color: ${palette.backgroundBase};
  box-shadow: ${palette.boxShadow1};
  z-index: 9999;
  ${({ close }) => (close ? slideOutAnimation : slideInAndOutAnimation)};
`;

export const ToastProgressBar = styled.div`
  height: 10px;
  width: 100%;
  background-color: ${palette.warning};
  animation: ${progress} 3s ease-in-out;
`;

export const ToastBody = styled.div`
  margin: 16px 0 13.5px 0;
  padding: 12px;
`;

export const ToastCloseButton = styled.button`
  position: absolute;
  top: 3px;
  right: 3px;
  display: flex;
  width: 24px;
  height: 24px;
  font-size: 18px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
