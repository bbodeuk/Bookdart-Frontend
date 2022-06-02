import styled from 'styled-components';
import palette from '../../theme/palette';

const NavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${palette.backgroundBase};
  height: 50px;
  box-shadow: ${palette.boxShadow1};
`;

export default NavBar;
