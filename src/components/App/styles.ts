import styled, { css } from 'styled-components';

export const Container = styled.main``;

const drawerButtonCss = css`
  position: fixed;
  top: 50%;
  width: 2rem;
  height: 2rem;
  background-color: white;
  cursor: pointer;
  border-radius: 50%;
  z-index: 2000;

  & > svg {
    width: 2rem;
    height: 2rem;
  }
`;

export const LeftDrawerButton = styled.button`
  left: 0;
  ${drawerButtonCss}
`;

export const RightDrawerButton = styled.button`
  right: 0;
  ${drawerButtonCss}
`;
