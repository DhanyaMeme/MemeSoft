import { createSlice } from "@reduxjs/toolkit";
import { navReducer } from "./nav.reducer";
import { INavState } from "./nav.type";

export const initialState: INavState = {
  pricing: undefined,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: navReducer,
});

export const { setPricing } = navSlice.actions;
