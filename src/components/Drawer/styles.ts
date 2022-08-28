import styled from 'styled-components';
import palette from '~/theme/palette';
import { DrawerPosition } from './types';

export const DRAWER_WIDTH = 360;

export const Wrapper = styled.div``;

export const Content = styled.div.attrs(
  ({ toggle, type }: { toggle: boolean; type: DrawerPosition }) => ({
    toggle,
    type,
  }),
)`
  position: fixed;
  width: ${DRAWER_WIDTH}px;
  top: var(--gnb-height);
  height: calc(100vh - var(--gnb-height));
  background-color: ${palette.backgroundBase};

  z-index: 6200;

  transform: translateX(
    ${({ toggle, type }) => {
      if (type === 'right') {
        if (toggle) {
          return `calc(100vw - ${DRAWER_WIDTH}px)`;
        }
        return `100vw`;
      }
      if (toggle) {
        return `0px`;
      }
      return `-${DRAWER_WIDTH}px`;
    }}
  );
  transition: transform 0.5s;
  pointer-events: ${({ toggle }) => (toggle ? 'all' : 'none')};
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
  pointer-events: ${({ toggle }) => (toggle ? 'all' : 'none')};
  @media screen and (min-width: 1680px) {
    & {
      display: none;
    }
  }
`;
