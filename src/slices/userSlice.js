import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: localStorage.getItem("username") || "",
  //userType
  //Can be stats of user
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogin(state, action) {
      state.username = action.payload;
      localStorage.setItem("username", action.payload);
    },
    userLogout(state, action) {
      state.username = "";
      localStorage.removeItem("username");
    },
  },
});

export const { userLogin, userLogout } = userSlice.actions;
export default userSlice.reducer;
