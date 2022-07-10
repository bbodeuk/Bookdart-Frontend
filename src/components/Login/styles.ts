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
  justify-content: space-between;
`;

export const Form = styled.div``;

export const Logo = styled.div``;

export const Typography = styled.div`
  text-align: center;
  font-weight: 700;
  color: ${palette.gray2};
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${palette.gray5};
  padding: 32px;
  border-radius: 8px;
`;

export const SignUp = styled.div``;
