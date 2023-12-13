import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  input: 1,
};

export const counterSlice = createSlice({
  name: "Counter",
  initialState,
  reducers: {
    increament: (state, action) => {
        state.input +=1
    },
    decreament: (state, action) => {
        state.input -=1
    },
  },
});






export const {increament,decreament}= counterSlice.actions
export default counterSlice.reducer
