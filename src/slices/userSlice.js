import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  //userType
  //Can be stats of user
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogin(state, action) {
      state.username = action.payload;
    },
    userLogout(state, action) {
      state.username = "";
    },
  },
});

export const { userLogin, userLogout } = userSlice.actions;
export default userSlice.reducer;
