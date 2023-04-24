import axios from "axios";
import React, { useState} from "react";
import { useNavigate } from "react-router-dom";

const PostOrder = () => {
  const [customerId, setCustomerId] = useState('');
  const [shipName, setShipName] = useState('');

  const navigate = useNavigate();

  const handleSubmit = () => {
    axios
      .post("https://northwind.vercel.app/api/orders", {
        customerId: customerId,
        shipName: shipName,
      })
      .then((response) => {
        console.log(response.data);
      });
    navigate("/orders");
  };

  return (
    <div>
      <div>PostOrder</div>
      <div>
        <input
          type="text"
          value={customerId}
          onChange={(e) => setCustomerId(e.target.value)}
        />

        <input type="text" value={shipName} onChange={(e) => setShipName(e.target.value)} />

        <button type="submit" onClick={handleSubmit}>
          Send Data
        </button>
      </div>
    </div>
  );
};

export default PostOrder;
