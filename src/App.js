//import logo from './logo.svg';

import React from "react";
//import { useContext } from "react";
import AllProduct from "./pages/AllProducts";
import MainNavigation from "./layout/MainNavigations";
import ProductDetails from "./pages/ProductDetails";
import EditProduct from "./pages/EditProduct";
import AddProduct from "./pages/AddProduct";
//import ProductContext from "./store/context";

import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <MainNavigation />
      <Routes>
        <Route path="/" element={<AllProduct />} />
      </Routes>
      {/* <Routes>
        <Route path="/products" element={<AllProduct />} />
      </Routes> */}
      <Routes>
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Routes>
        <Route path="/product/edit/:id" element={<EditProduct />} />
      </Routes>
      <Routes>
        <Route path="/add" element={<AddProduct />} />
      </Routes>
    </div>
  );
}
export default App;
