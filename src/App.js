import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./views/home/Home";
import Product from "./views/product/Product";
import "./assets/styles/Global.scss";
import { Store } from "./redux/Store";

export default function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="product" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
