import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '~/theme/palette';

export const NavBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: var(--gnb-height);
  padding: 0 10px;
  flex-direction: row;
  background-color: ${palette.backgroundBase};
  box-shadow: ${palette.boxShadow1};
`;

export const LogoLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  font-weight: bold;
`;

export const Logo = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
`;

export const Side = styled.div`
  display: flex;
  flex: 1 1 0;
  align-items: center;
`;

export const Center = styled.div``;
