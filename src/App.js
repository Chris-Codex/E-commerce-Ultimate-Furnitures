import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  Home,
  About,
  Cart,
  Checkout,
  Error,
  PrivateRoute,
  SingleProducts,
  Product,
} from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/product">
          <Product />
        </Route>
        <Route exact="/product/:id" children={<SingleProducts />} />
        <Route exact path="/checkout">
          <Checkout />
        </Route>
        <Route exact path="/error">
          <Error />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
