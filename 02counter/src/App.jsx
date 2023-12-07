import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
 
  let [counter, setCounter]=useState(0)

  const addValue=()=>{
   let moreValue= counter<5 ? counter+1 : 5;
    setCounter( moreValue);
  }
  const decValue=()=>{
    const newValue = counter > 0 ? counter - 1 : 0;
    setCounter(newValue);
  }
  useEffect(()=>{
   console.log("counter increades")
   },[counter])
  
  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Counter value :{counter}</h2>
    <button onClick={addValue}>Add Value</button>
    <br />
    <button onClick={decValue}>decre value</button>
    </>
  )
}

export default App
