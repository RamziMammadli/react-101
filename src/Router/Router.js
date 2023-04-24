import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Orders from "../pages/Orders";
import Suppliers from "../pages/Suppliers";
import PostOrder from "../pages/PostOrder";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/suppliers" element={<Suppliers />} />
        <Route path="/postorder" element={<PostOrder/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
