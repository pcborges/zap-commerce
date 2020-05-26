import React from "react";
import { Container, Categories } from "./styles";

export default function SubHeader() {
  return (
    <Container>
      <Categories>
        <ul className="category-list">
          <li className="active">
            <a href="/teste">Todas</a>
          </li>
          <li>
            <a href="/teste">Frutas</a>
          </li>
          <li>
            <a href="/teste">Hortaliças/Folhagens</a>
          </li>
          <li>
            <a href="/teste">Verduras</a>
          </li>
          <li>
            <a href="/teste">Legumes</a>
          </li>
        </ul>
      </Categories>
    </Container>
  );
}
