import React, { useContext } from "react";

import ShopContext from "../../context/shop-context";

export default function Cart() {
  const context = useContext(ShopContext);
  return (
    <>
      {context.cart.map((item) => (
        <li key={item.id}>
          {item.name} - Quantidade: {item.quantity} &nbsp;
          <button onClick={() => context.removeProductFromCart(item.id)}>
            Remover Produto
          </button>
        </li>
      ))}
    </>
  );
}
