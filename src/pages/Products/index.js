import React from "react";
import { Cards } from "./styles";
import Card from "../../components/Card";
import SubHeader from "../../components/layout/SubHeader";

import ShopContext from "../../context/shop-context";

export default function Products() {
  return (
    <ShopContext.Consumer>
      {(context) => (
        <>
          <SubHeader />
          <Cards>
            {context.products.map((item, index) => (
              <Card
                item={item}
                badge={item.badge}
                key={index}
                addToCart={() => context.addProductToCart(item)}
              />
            ))}
          </Cards>
        </>
      )}
    </ShopContext.Consumer>
  );
}
