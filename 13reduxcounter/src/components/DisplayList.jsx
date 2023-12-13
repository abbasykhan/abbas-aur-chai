import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, editItem } from "../feautures/addSlice";

function DisplayList() {
  const selector = useSelector((state) => state.add.inputs);
  const dispatch = useDispatch();

  return (
    <>
      <ul>
        {selector.map((data) => {
          return (
            <li key={data.id}>
              {data.text}
              <button onClick={() => dispatch(deleteItem(data.id))}>
                Delete
              </button>
              <button onClick={()=>{
            dispatch(editItem(data.id))
        }}>Edit</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default DisplayList;
