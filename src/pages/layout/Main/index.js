import React, { useEffect, useState } from "react";
import { Container, Cards } from "./styles";
import { productList } from "../../../services/api";

import Card from "../../../components/Card";

export default function Main() {
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
      <Cards>
        {products.map((item) => {
          return <Card item={item} badge={item.badge} key={item.id} />;
        })}
      </Cards>
    </Container>
  );
}
