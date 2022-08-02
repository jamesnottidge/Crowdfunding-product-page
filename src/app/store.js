import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "../features/counter/cardSlice";
import modalReducer from "../features/counter/modalSlice";

export const store = configureStore({
  reducer: {
    card: cardReducer,
    modal: modalReducer,
  },
});
