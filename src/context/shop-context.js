import React from "react";
import { productList } from "../services/api";

export default React.createContext({
  products: productList(),
  cart: [],
  addProductToCart: (product) => {},
  removeProductFromCart: (productId) => {},
});
