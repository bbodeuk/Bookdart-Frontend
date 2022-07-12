import styled from 'styled-components';
import palette from '~/theme/palette';

export const Root = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 64px;
  flex-direction: column;
  padding-bottom: 48px;
`;

export const Container = styled.div`
  height: 100%;
  display: flex;
  width: 424px;
  flex-direction: column;
  justify-content: center;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  align-items: center;
`;

export const Logo = styled.div`
  font-size: 44px;
  text-align: center;
  font-weight: 700;
  width: 100px;
  height: 100px;
  background: url('/src/assets/logo.png');
  background-size: cover;
`;

export const Typography = styled.div`
  font-size: 20px;
  text-align: center;
  font-weight: 700;
  color: ${palette.gray2};
`;

export const InputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid ${palette.gray5};
  padding: 32px;
  border-radius: 8px;
  gap: 9px;
`;
