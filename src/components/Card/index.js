import React from "react";
import { Container, Header, Title, Content, Description } from "./styles";

export default function Card(props) {
  const { item, badge } = props;
  return (
    <Container>
      <Header>
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
      </Content>
    </Container>
  );
}
