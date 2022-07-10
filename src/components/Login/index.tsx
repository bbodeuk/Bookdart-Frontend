import Input from '../Input';
import {
  Root,
  Container,
  Logo,
  Form,
  InputBox,
  SignUp,
  Typography,
} from './styles';

export default function Login() {
  return (
    <Root>
      <Container>
        <Form>
          <Logo />
          <InputBox>
            <Typography>로그인</Typography>
            <Input label="이메일" />
            <Input type="password" label="비밀번호" />
            <button type="submit">로그인</button>
          </InputBox>
          <SignUp />
        </Form>
      </Container>
    </Root>
  );
}
