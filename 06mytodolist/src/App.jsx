import { useState } from 'react'
import './App.css'

function App() {
  let [input, setInput]=useState("")
  let[list, setList]=useState([])


  const handleChange=(e)=>{
    setInput( e.target.value)
  
  };

  const adddToItem=()=>{
    if(input.trim()!==""){
      setList([...list,input])
      setInput('');
    }
  }

  const deleteItem = (itemToDelete) => {
    const updatedList = list.filter((item) => item !== itemToDelete);
    setList(updatedList);
  };
  return (
    <>
     <h2>to do list</h2>
     <input type="text" 
     value={input}
     onChange={handleChange}
      />
     <button onClick={adddToItem}>Add to list</button>
     <ul>
        {list.map((item, index) => (
          <li key={index}>{item}
          <button onClick={()=>deleteItem(item)}>delete</button>
          </li>
          
        ))}
        
      </ul>
    
    </>
  ) 
  
  };
 
export default App
