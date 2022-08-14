import styled from 'styled-components';
import { DRAWER_WIDTH } from '../Drawer/styles';

const CONTAINER_PADDING = 20;

const Container = styled.div.attrs(
  ({
    leftDrawerRevealed,
    rightDrawerRevealed,
  }: {
    leftDrawerRevealed: boolean;
    rightDrawerRevealed: boolean;
  }) => ({
    leftDrawerRevealed,
    rightDrawerRevealed,
  }),
)`
  /* FIXME: Remove magic numbers */
  & {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  @media screen and (min-width: 680px) {
    & {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 20px;
    }
  }

  @media screen and (min-width: 980px) {
    & {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media screen and (min-width: 1200px) {
    padding-left: ${({ leftDrawerRevealed }) =>
      leftDrawerRevealed
        ? `${DRAWER_WIDTH + CONTAINER_PADDING}px`
        : `${CONTAINER_PADDING}px`};
    padding-right: ${({ rightDrawerRevealed }) =>
      rightDrawerRevealed
        ? `${DRAWER_WIDTH + CONTAINER_PADDING}px`
        : `${CONTAINER_PADDING}px`};
  }
`;

export default Container;
