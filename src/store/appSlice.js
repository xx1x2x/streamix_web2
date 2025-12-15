import { createSlice } from "@reduxjs/toolkit";
import { Map } from "immutable";

const initialState = Map({
  siteTitle: "Streamix.by",
});

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setTitle(state, action) {
      return state.set("siteTitle", action.payload);
    },
  },
});

export const { setTitle } = appSlice.actions;
export default appSlice.reducer;
