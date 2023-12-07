import { useState } from "react";

function App() {
  let colors = ["back, blue", "red"];
  const [color, setColor] = useState("olive");

  return (
    <div className="bg w-100 h-screen" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center shadow-lg bg-white px-4 py-2 rounded">
          <button className="outline-none px-4 , rounded, shadow, mx-2" style={{backgroundColor:"red"}} onClick={()=>setColor('red')}>Red</button>
          <button className="outline-none px-4 , rounded, shadow, mx-2" style={{backgroundColor:"green"}} onClick={()=>setColor('green')}>green</button>
          <button className="outline-none px-4 , rounded, shadow, mx-2" style={{backgroundColor:"blue"}} onClick={()=>setColor('blue')}>blue</button>
        
        </div>
        
        
        </div>
    </div>
  );
}

export default App;
