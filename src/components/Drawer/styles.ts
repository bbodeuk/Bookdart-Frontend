import styled from 'styled-components';
import palette from '~/theme/palette';
import { DrawerPosition } from './types';

const WIDTH = 360;

export const Wrapper = styled.div`
  position: absolute;
  inset: 0;
`;

export const Content = styled.div.attrs(
  ({ toggle, type }: { toggle: boolean; type: DrawerPosition }) => ({
    toggle,
    type,
  }),
)`
  position: fixed;
  width: ${WIDTH}px;
  height: 100vh;
  background-color: ${palette.backgroundBase};

  z-index: 1200;

  transform: translateX(
    ${({ toggle, type }) => {
      if (type === 'right') {
        if (toggle) {
          return `calc(100vw - ${WIDTH}px)`;
        }
        return `100vw`;
      }
      if (toggle) {
        return `0px`;
      }
      return `-${WIDTH}px`;
    }}
  );
  transition: transform 0.5s;
`;

export const BackDrop = styled.div.attrs(
  ({ toggle, type }: { toggle: boolean; type: DrawerPosition }) => ({
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
  transition: opacity 0.5s;
`;
