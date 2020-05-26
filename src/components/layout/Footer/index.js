import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Navigation } from "./styles";
import {
  RiStore2Line,
  RiSearch2Line,
  RiShoppingBagLine,
  RiAddCircleLine,
} from "react-icons/ri";

export default function Footer() {
  return (
    <Container>
      <Navigation>
        <Link to="/" className="active">
          <RiStore2Line size={26} />
        </Link>
        <Link to="/">
          <RiSearch2Line size={26} />
        </Link>
        <Link to="/produtos">
          <RiAddCircleLine size={26} />
        </Link>
        <Link to="/">
          <Button>
            <RiShoppingBagLine size={20} /> 2 itens
          </Button>
        </Link>
      </Navigation>
    </Container>
  );
}
