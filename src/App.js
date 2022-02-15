import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";

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
      <Navbar />
      <Sidebar />
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
        <Route exact path="*">
          <Error />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
