import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    username: "",
    password: "",
  },
  reducers: {
    addNewUsers: (state = initialState, action) => {
      console.log(action.payload);
      state.username = action.payload?.username;
      state.password = action.payload?.password;
    },
  },
});

export const { addNewUsers } = authSlice.actions;
export default authSlice.reducer;
