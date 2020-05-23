import React from "react";
import { Container, Navigation, Logo, MenuItens } from "./styles";
import logo_url from "../../../logo.svg";
import { GoSettings } from "react-icons/go";

export default function Header() {
  return (
    <Container>
      <Navigation>
        <Logo href="#">
          <img src={logo_url} alt="Logo" />
          <span>ZapCommerce</span>
        </Logo>
        <MenuItens>
          <GoSettings size={20} />
        </MenuItens>
      </Navigation>
    </Container>
  );
}
