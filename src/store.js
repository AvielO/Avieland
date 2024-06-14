import { configureStore } from "@reduxjs/toolkit";
import userRedcuer from "./slices/userSlice.js";

const store = configureStore({
  reducer: {
    user: userRedcuer,
  },
});

export default store;
