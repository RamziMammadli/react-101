import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Orders from "../pages/Orders";
import Category from "../pages/Category";
import Supplier from "../pages/Supplier";
import Products from "../pages/Products";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/categories" element={<Category/>}/>
        <Route path="/suppliers" element={<Supplier/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
