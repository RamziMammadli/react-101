import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";



const App = () => {


  const [count, setCount] = useState()
  const [name, setName] = useState("Sitare")
  const [surname, setSurame] = useState("Hummet")
  const [status, setStatus] = useState(false)


  const artir = () => {
    setCount(count + 1);
  };

  const azalt = () => {
    setCount(count - 1);
  };

///////////////////// Sitare
///////////////////// Hummet

  return (
    <div>
      <h1>Salam, {name} {surname}</h1>
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={artir}>Artir</button>
      <button onClick={azalt}>Azalt</button>    
    </div>
  );
};

export default App;

// import { useState, useEffect } from "react";
// import axios from "axios";

// function App() {

//   const [baza, setbaza] = useState([]);   // melumatlari- datani STATE-de saxlayiriq

//   useEffect(() => {
//     axios.get(`https://northwind.vercel.app/api/suppliers`).then((response) => {
//       setbaza(response.data); // response.data ile gelen melumatlari setbaza ile bazaya gonderirik, bazada tuturuq
//     });
//     }, []);

//   return (
//     <div className="App">
//       {baza.map((item) => ( // bazani map methodla yazdiririq. item bir obyekti temsil edir deye , her obyektin datasini item.name yaxud item.title kimi yaziriq ve yazdiririq
//         <div className="user">
//           {item.companyName}
//           {item.contactName}
//         </div>
//       ))}
//     </div>
//   );
//   }

// export default App;


    // axios.get(`https://northwind.vercel.app/api/orders/10271`)
    // .then(response => {
    //   response.data.filter(item => item.)
    // })
   
