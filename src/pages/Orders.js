import axios from "axios";
import React, { useState, useEffect } from "react";

const Orders = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://northwind.vercel.app/api/categories")
      .then((response) => {
        setData(response.data);
      });
  }, []);

  return (
    <div>
      <div>Orders</div>
      <div>{data.map(item => (<div>
        <h1>{item.name}</h1>
        <p>{item.description}</p>
      </div>))}</div>
    </div>
  );
};

export default Orders;
