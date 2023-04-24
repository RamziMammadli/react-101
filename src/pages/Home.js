import React from "react";
import { useNavigate, Link } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();

  const goOrders = () => {
    navigate("/orders")
  }

  const goSuppliers = () => {
    navigate("/suppliers")
  }

  return (
    <div style={{ backgroundColor: "cyan", width: "100%", height: "1000px" }}>
      <div
        style={{
          backgroundColor: "white",
          height: "100px",
          padding: "50px",
          display: "flex",
          gap: 50,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 onClick={goOrders}>Orders</h1>
        <h1 onClick={goSuppliers}>Suppliers</h1>
        <Link to={"/postorder"}>POST ORDER!</Link>
      </div>
    </div>
  );
};

export default Home;
