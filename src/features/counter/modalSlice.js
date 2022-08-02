import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalShowing: false,
  modalCompleted: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModalShowing: (state) => {
      state.modalShowing = !state.modalShowing;
    },
    setModalCompleted: (state, action) => {
      state.modalCompleted = action.payload;
    },
  },
});

export const { toggleModalShowing, setModalCompleted } = modalSlice.actions;

export const selectModalShowing = (state) => state.modal.modalShowing;

export const selectModalCompleted = (state) => state.modal.modalCompleted;

export default modalSlice.reducer;
