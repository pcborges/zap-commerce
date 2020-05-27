import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/produtos" exact component={Products} />
      <Route path="/carrinho" component={Cart} />
    </Switch>
  );
}
