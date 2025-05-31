import {
  Nav,
  NavLeft,
  Logo,
  NavLink,
  NavRight,
  SearchInput,
  LoginButton,
} from "./styles";

export default function Navbar() {
  return (
    <Nav>
      <NavLeft>
        <Logo>HOME</Logo>
        <NavLink href="#">Sobre Nós</NavLink>
      </NavLeft>
      <NavRight>
        <SearchInput type="text" placeholder="🔍" />
        <LoginButton>Login</LoginButton>
      </NavRight>
    </Nav>
  );
}
