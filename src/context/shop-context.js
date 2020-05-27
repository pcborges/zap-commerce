import React from "react";
import { productList } from "../services/api";
const data = productList();

export default React.createContext({
  products: [data],
  cart: [],
  addProductToCart: (product) => {},
  removeProductFromCart: (productId) => {},
});
