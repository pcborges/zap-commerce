import React from "react";
import { Container, Navigation, Logo, MenuItens } from "./styles";
import logo_url from "../../../logo.svg";
import { GoSettings } from "react-icons/go";
import { RiMoreLine } from "react-icons/ri";

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
            <RiMoreLine size={20} />
          </button>
          <button className="featured">
            <GoSettings size={20} />
          </button>
        </MenuItens>
      </Navigation>
    </Container>
  );
}
