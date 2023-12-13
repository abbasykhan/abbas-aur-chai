import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  inputs: [],
};

export const addSlice = createSlice({
  name: "Add",
  initialState,
  reducers: {
    addtoList: (state, action) => {
      if (action.payload == "") {
        alert("enter some data");
      } else {
        state.inputs.push({
          text: action.payload,
          id: nanoid(),
        });
      }
    },
    deleteItem: (state, action) => {
      state.inputs = state.inputs.filter((data) => {
        if (data.id !== action.payload) {
          return state.inputs;
        }
      });
    },
    editItem: (state, action) => {
        const { id, newText}= action.payload
        const exisitingItem = state.inputs.find((data)=>{
            if(data.id==id){
           return exisitingItem.text=newText
            }

        })
      if (state.inputs.id == action.payload) {
        state.inputs.text = text.payload
      }
    },
  },
});

export const { addtoList, deleteItem, editItem } = addSlice.actions;
export default addSlice.reducer;
