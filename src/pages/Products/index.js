import React, { useContext } from "react";
import { Cards } from "./styles";
import Card from "../../components/Card";
import SubHeader from "../../components/layout/SubHeader";

import ShopContext from "../../context/shop-context";

export default function Products() {
  const { products, addProductToCart } = useContext(ShopContext);
  return (
    <>
      <SubHeader />
      <Cards>
        {products.map((item, index) => (
          <Card
            item={item}
            badge={item.badge}
            key={index}
            addToCart={() => addProductToCart(item)}
          />
        ))}
      </Cards>
    </>
  );
}
