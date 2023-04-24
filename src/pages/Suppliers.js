import axios from "axios";
import React, { useEffect, useState } from "react";

const Suppliers = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://northwind.vercel.app/api/orders").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div>
      <div>Orders</div>
      <div>
        {data.map((item) => (
          <div>
            <h1>{item.customerId}</h1>
            <p>{item.shipName}</p>
            <p>{item.shipAddress.country}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suppliers;
