import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: "main",
  initialState: {
    userData: null,
  },
  reducers: {
    set_user_data: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { set_user_data } = mainSlice.actions;

export default mainSlice.reducer;
