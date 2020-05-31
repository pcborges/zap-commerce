import React, { useReducer } from "react";

import ShopContext from "./shop-context";
import {
  shopReducer,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  CHANGE_PRODUCT,
} from "./reducers";
import { productList } from "../services/api";

export default function GlobalState(props) {
  const products = productList();

  const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });

  const addProductToCart = (product) => {
    dispatch({ type: ADD_PRODUCT, product });
  };
  const removeProductFromCart = (productId) => {
    dispatch({ type: REMOVE_PRODUCT, productId });
  };
  const changeProductQuantity = (product) => {
    dispatch({ type: CHANGE_PRODUCT, product });
  };

  return (
    <ShopContext.Provider
      value={{
        products,
        cart: cartState.cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
        changeProductQuantity: changeProductQuantity,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
}
