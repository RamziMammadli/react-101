import React, { useState } from "react";
import axios from "axios";

function App() {
  const [companyName, setCompanyName] = useState("");
  const [contactName, setContactName] = useState("");

  const handleSubmit = () => {
    axios
      .post("https://northwind.vercel.app/api/orders", {
        companyName: companyName,
        contactName: contactName,
      })
      .then((res) => {
        console.log(res.data);
      });
    setCompanyName("");
    setContactName("");
  };

  

  return (
    <div>
      Company Name:
      <input
        type="text"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
      />
      Contact Name : <br />
      <input
        type="text"
        value={contactName}
        onChange={(e) => setContactName(e.target.value)}
      />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default App;
