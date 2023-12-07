import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);
  let myArr =[1,3,5]

  return (
    <>
      <h1 className="bg-green-400 text-black p-5 m-3 rounded-xl">
        talwind test
      </h1>
      <Card userName='abbas'  btnText="click" />
      <Card userName='abbas' />
    </>
  );
}

export default App;
