import React, { useEffect, useState } from "react";
import { Container, Cards } from "./styles";
import { productList } from "../../../services/api";

import Card from "../../Card";

export default function Main({ children }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    function loadProducts() {
      const data = productList();
      setProducts(data);
    }

    loadProducts();
  }, []);
  return (
    <Container>
      {children}
      <Cards>
        {products.map((item) => {
          return <Card item={item} badge={item.badge} key={item.id} />;
        })}
      </Cards>
    </Container>
  );
}
