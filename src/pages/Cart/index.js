import React, { useContext } from "react";
import { CartList, Item } from "./styles";

import ShopContext from "../../context/shop-context";
import { FiEdit, FiTrash2 } from "react-icons/fi";

import { Link } from "react-router-dom";

export default function Cart() {
  const context = useContext(ShopContext);
  return (
    <>
      <h2>Carrinho</h2>
      <hr />
      <CartList>
        {context.cart.map((item) => (
          <Item key={item.id}>
            <div className="product">
              <img src={item.imgPath} alt={item.name} />
              <h4>{item.name}</h4>
            </div>
            <div className="quantity">
              <input
                type="number"
                value={item.quantity}
                onChange={(e) =>
                  context.changeProductQuantity({
                    id: item.id,
                    quantity: e.target.value,
                  })
                }
              ></input>
              <span>{item.unit}</span>
            </div>
            <div className="buttons">
              <button onClick={() => context.removeProductFromCart(item.id)}>
                <FiEdit size={20} />
              </button>
              <button
                className="darker"
                onClick={() => context.removeProductFromCart(item.id)}
              >
                <FiTrash2 size={20} />
              </button>
            </div>
          </Item>
        ))}
      </CartList>
      <Link to="/checkout">Checkout</Link>
    </>
  );
}
