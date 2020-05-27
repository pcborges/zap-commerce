import React, { useState, useEffect } from "react";
import { Cards } from "./styles";
import { productList } from "../../services/api";
import Card from "../../components/Card";
import SubHeader from "../../components/layout/SubHeader";

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    function loadProducts() {
      const data = productList();
      setProducts(data);
    }

    loadProducts();
  }, []);
  return (
    <>
      <SubHeader />
      <Cards>
        {products.map((item, index) => {
          return <Card item={item} badge={item.badge} key={index} />;
        })}
      </Cards>
    </>
  );
}
