import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { UserContext } from "./contexts/UserContext";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";

function App() {
  const [data, setData] = useState("abbas");
 let email= "abbasykhn@gmail.com"

  return (
    <UserContext.Provider value={{ data, setData,email }}>
      <ComponentA />
      <ComponentB/>
    </UserContext.Provider>
  );
}

export default App;
