import { Root, Container, Logo, Form, InputBox, Typography } from './styles';
import Input from '../Input';

export default function Login() {
  return (
    <Root>
      <Container>
        <Form>
          <Logo />
          <InputBox>
            <Typography>Login</Typography>
            <Input label="Email" />
            <Input type="password" label="Password" />
          </InputBox>
        </Form>
      </Container>
    </Root>
  );
}
