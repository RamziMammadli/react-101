import { useState, useEffect } from "react";
import axios from "axios";

function App() {

  const [baza, setbaza] = useState([]);

  useEffect(() => {
    axios.get(`https://northwind.vercel.app/api/suppliers`).then((response) => {
      setbaza(response.data);
    });
    }, []);

  return (
    <div className="App">
      {baza.map((item) => (
        <div className="user">
          {item.companyName}
          {item.contactName}
        </div>
      ))}
    </div>
  );
  }

export default App;
