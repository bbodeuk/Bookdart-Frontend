import styled from 'styled-components';
import palette from '../../theme/palette';

export const Wrapper = styled.div`
  position: absolute;
  inset: 0;
`;

export const Content = styled.div.attrs(
  ({ toggle, type }: { toggle: boolean; type: 'left' | 'right' }) => ({
    toggle,
    type,
  }),
)`
  position: fixed;
  width: 360px;
  height: 100vh;
  background-color: ${palette.backgroundBase};

  z-index: 1200;
  left: ${({ toggle, type }) => {
    if (type === 'left') {
      if (toggle) {
        return 0;
      }

      return '-360px';
    }
    return 'unset';
  }};
  right: ${({ toggle, type }) => {
    if (type === 'right') {
      if (toggle) {
        return 0;
      }

      return '-360px';
    }
    return 'unset';
  }};
  transition: 0.5s;
`;

export const BackDrop = styled.div.attrs(
  ({ toggle, type }: { toggle: boolean; type: 'left' | 'right' }) => ({
    toggle,
    type,
  }),
)`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  inset: 0px;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${({ toggle }) => (toggle ? 1 : 0)};
  transition: 0.5s;
`;
