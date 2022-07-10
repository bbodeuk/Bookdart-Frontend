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
`;

export const Logo = styled.div`
  font-size: 44px;
  text-align: center;
  font-weight: 700;
  color: ${palette.primaryLight};
`;

export const Typography = styled.div`
  font-size: 20px;
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
  gap: 9px;
`;

export const SignUp = styled.div`
  font-size: 17px;
  text-align: center;
  font-weight: 600;
  color: ${palette.gray2};
`;
