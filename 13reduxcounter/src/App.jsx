import { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increament, decreament } from "./feautures/counterSlice";
import AddList from "./components/AddList";
import DisplayList from "./components/DisplayList";

function App() {
  const dispatch = useDispatch();
  const selector = useSelector((state)=>state.input);
 
  let counterValue = selector
  const handleIncrement = () => dispatch(increament());
  const handleDecrement = () => dispatch(decreament());

  return (
    <>
     <AddList/>
     <DisplayList/>
    </>
  );
}

export default App;
