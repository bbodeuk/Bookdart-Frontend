import logo from '~/assets/logo.png';
import { NavBar, Side, Center, Logo, LogoLink } from './styles';
import { useToast } from '../Toast';

export default function GlobalNavigation() {
  const toast = useToast();
  const showToast = () => toast.send('hi!');

  return (
    <NavBar onClick={showToast}>
      <Side>
        <LogoLink to="/">
          <Logo alt="Logo" src={logo} />
          Bookdart
        </LogoLink>
      </Side>
      <Center />
      <Side />
    </NavBar>
  );
}
