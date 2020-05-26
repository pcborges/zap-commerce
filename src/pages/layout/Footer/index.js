import React, { useState } from "react";
import { Button, Container, Navigation } from "./styles";
import {
  RiStore2Line,
  RiSearch2Line,
  RiShoppingBagLine,
  RiAddCircleLine,
} from "react-icons/ri";

export default function Footer() {
  const [items, setItems] = useState(1);
  return (
    <Container>
      <Navigation>
        <li className="active">
          <RiStore2Line size={26} />
        </li>
        <li>
          <RiSearch2Line size={26} />
        </li>
        <li>
          <RiAddCircleLine size={26} />
        </li>
        <li>
          <Button>
            <RiShoppingBagLine size={20} /> {items} itens
          </Button>
        </li>
      </Navigation>
    </Container>
  );
}
