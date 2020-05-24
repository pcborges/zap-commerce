import React from "react";
import { Container, Cards } from "./styles";

import Card from "../../../components/Card";

export default function Main() {
  const items = [
    {
      id: 1,
      name: "Banana",
      category: "Frutas",
      price: 4.49,
      unit: "kg",
      imgPath: "/images/banana.png",
    },
    {
      id: 2,
      name: "Morango",
      category: "Frutas",
      price: 9.84,
      unit: "kg",
      imgPath: "/images/strawberry.png",
    },
    {
      id: 3,
      name: "Maça",
      category: "Frutas",
      price: 3.84,
      unit: "kg",
      imgPath: "/images/apple.png",
    },
    {
      id: 4,
      name: "Laranja",
      category: "Frutas",
      price: 4.84,
      unit: "kg",
      imgPath: "/images/orange.png",
    },
  ];

  return (
    <Container>
      <Cards>
        {items.map((item) => {
          return <Card item={item} badge={true} key={item.id} />;
        })}
      </Cards>
    </Container>
  );
}
