import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);

  const [name, setName] = useState('');

  const [ data, setData ] = useState([])

  const Artir = () => {
    setCount(count + 1);
  };

  const Azalt = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    axios.get("https://northwind.vercel.app/api/orders/").then((response) => {
      setData(response.data)
    });
  }, []);


  return (
    <div className="App">
      {data.map(item => (<div style={{backgroundColor: "lightblue"}}>
        <p>{item.shipName}</p>
        <p>{item.customerId}</p>
        <p>{item.customerId}</p>
        <p>{item.customerId}</p>
      </div>))}
    </div>
  );
}

export default App;
