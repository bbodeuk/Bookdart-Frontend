import styled from 'styled-components';
import palette from '../../theme/palette';

export const NavBar = styled.div`
  position: fixed;
  width: 100%;
  height: 50px;
  display: flex;
  direction: row;
  background-color: ${palette.backgroundBase};
  box-shadow: ${palette.boxShadow1};
`;

export const Left = styled.div`
  background-color: red;
  width: 100%;
  height: 100%;
`;
export const Middle = styled.div`
  background-color: blue;
  width: 100%;
  height: 100%;
`;
export const Right = styled.div`
  background-color: green;
  width: 100%;
  height: 100%;
`;
