import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  copper: 0,
  silver: 0,
  gold: 0,
  diamond: 0,
  turns: 0,
};

const resourcesSlice = createSlice({
  name: "resources",
  initialState,
  reducers: {
    updateResources(state, action) {
      state.copper = action.payload.copper;
      state.silver = action.payload.silver;
      state.gold = action.payload.gold;
      state.diamond = action.payload.diamond;
      state.turns = action.payload.turns;
    },
  },
});

export const { updateResources } = resourcesSlice.actions;
export default resourcesSlice.reducer;
