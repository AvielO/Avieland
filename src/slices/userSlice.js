import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  status: "idle",
  error: null,
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
    setUser(state, action) {
      state.user = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { userLogin, userLogout, setUser, setStatus, setError } =
  userSlice.actions;
export default userSlice.reducer;
