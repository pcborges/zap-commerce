import React from "react";
import { Container, Navigation, Logo, MenuItens } from "./styles";
import logo_url from "../../../logo.svg";

export default function Header() {
  return (
    <Container>
      <Navigation>
        <Logo href="#">
          <img src={logo_url} alt="Logo" />
          <span>ZapCommerce</span>
        </Logo>
        <MenuItens>
          <button>
            <clr-icon shape="ellipsis-horizontal" size="24"></clr-icon>
          </button>
        </MenuItens>
        <clr-icon shape="cog" size="24"></clr-icon>
      </Navigation>
    </Container>
  );
}
