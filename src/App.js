import { useState, useEffect } from "react";
import axios from "axios";

function App() {

  const [baza, setbaza] = useState([]);   // melumatlari- datani STATE-de saxlayiriq

  useEffect(() => {
    axios.get(`https://northwind.vercel.app/api/suppliers`).then((response) => {
      setbaza(response.data); // response.data ile gelen melumatlari setbaza ile bazaya gonderirik, bazada tuturuq
    });
    }, []);

  return (
    <div className="App">
      {baza.map((item) => ( // bazani map methodla yazdiririq. item bir obyekti temsil edir deye , her obyektin datasini item.name yaxud item.title kimi yaziriq ve yazdiririq
        <div className="user">
          {item.companyName}
          {item.contactName}
        </div>
      ))}
    </div>
  );
  }

export default App;
