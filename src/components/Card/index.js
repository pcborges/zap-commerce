import React from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Description,
  Button,
} from "./styles";

import { BsPlusCircle } from "react-icons/bs";

export default function Card(props) {
  const { item, badge, addToCart } = props;
  return (
    <Container>
      <Header>
        {badge && <span className="badge orange">{badge}</span>}
        <img src={item.imgPath} alt={item.name} />
      </Header>
      <Title>{item.name}</Title>
      <Content>
        <Description>
          <span className="price">
            {item.price.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}{" "}
            | {item.unit}
          </span>
        </Description>
        <Button type="button" onClick={addToCart}>
          <BsPlusCircle size={30} />
        </Button>
      </Content>
    </Container>
  );
}
