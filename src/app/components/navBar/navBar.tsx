import Link from "next/link";
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
        <Link href="/">
          {" "}
          <Logo>HOME</Logo>
        </Link>

        {/* <NavLink href="#">Sobre Nós</NavLink> */}
      </NavLeft>
      <NavRight>{/* <LoginButton>Login</LoginButton> */}</NavRight>
    </Nav>
  );
}
