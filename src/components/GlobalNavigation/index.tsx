import logo from '~/assets/logo.png';
import { NavBar, Side, Center, Logo, LogoLink } from './styles';

export default function GlobalNavigation() {
  return (
    <NavBar>
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
