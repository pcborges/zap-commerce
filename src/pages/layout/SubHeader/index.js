import React from "react";
import { Container, Categories } from "./styles";

export default function SubHeader() {
  return (
    <Container>
      <Categories>
        <ul className="category-list">
          <li className="active">
            <a href="#">Todas</a>
          </li>
          <li>
            <a href="#">Frutas</a>
          </li>
          <li>
            <a href="#">Hortaliças/Folhagens</a>
          </li>
          <li>
            <a href="#">Verduras</a>
          </li>
          <li>
            <a href="#">Legumes</a>
          </li>
        </ul>
      </Categories>
    </Container>
  );
}
