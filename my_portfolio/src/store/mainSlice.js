import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: "main",
  initialState: {
    userData: null,
  },
  reducers: {},
});

export default mainSlice.reducer;
