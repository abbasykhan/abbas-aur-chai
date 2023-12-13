import { configureStore } from "@reduxjs/toolkit";
import addSlice from "../feautures/addSlice";

export const store = configureStore({
  reducer: {
    add: addSlice,
  },
});
