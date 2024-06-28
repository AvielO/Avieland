import { configureStore } from "@reduxjs/toolkit";
import userRedcuer from "./slices/userSlice.js";
import resourcesSlice from "./slices/resourcesSlice.js";

const store = configureStore({
  reducer: {
    user: userRedcuer,
    resources: resourcesSlice,
  },
});

export default store;
