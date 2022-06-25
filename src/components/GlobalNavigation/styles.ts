import styled from 'styled-components';
import palette from '~/theme/palette';

export const NavBar = styled.div`
  position: fixed;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  background-color: ${palette.backgroundBase};
  box-shadow: ${palette.boxShadow1};
`;

export const Left = styled.div`
  flex: 1 1 0;
`;
export const Middle = styled.div``;
export const Right = styled.div`
  flex: 1 1 0;
`;
