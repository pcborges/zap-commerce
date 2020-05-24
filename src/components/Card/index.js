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
  const { item, badge } = props;
  return (
    <Container>
      <Header>
        {badge && <span class="badge orange">{badge}</span>}
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
        <Button>
          <BsPlusCircle size={30} />
        </Button>
      </Content>
    </Container>
  );
}
