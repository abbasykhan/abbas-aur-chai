import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addtoList } from "../feautures/addSlice";

function AddList() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const btnHandler= ()=>{
    dispatch(addtoList(input))
   setInput("")
  }

  

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={btnHandler}>Add to List</button>
    </>
  );
}

export default AddList;
