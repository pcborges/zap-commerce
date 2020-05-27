import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Navigation } from "./styles";
import {
  RiStore2Line,
  RiSearch2Line,
  RiShoppingBagLine,
  RiAddCircleLine,
} from "react-icons/ri";

import ShopContext from "../../../context/shop-context";
export default function Footer() {
  const { cart } = useContext(ShopContext);
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
            <RiShoppingBagLine size={20} /> {cart.length}{" "}
            {cart.length > 1 ? "itens" : "item"}
          </Button>
        </Link>
      </Navigation>
    </Container>
  );
}
