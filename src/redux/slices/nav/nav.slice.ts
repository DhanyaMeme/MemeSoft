import { createSlice } from "@reduxjs/toolkit";
import { initialAsyncData } from "../../../models/constants";
import { extraNavReducer, navReducer } from "./nav.reducer";
import { INavState } from "./nav.type";

export const initialState: INavState = {
  pricing: undefined,
  pricingData: initialAsyncData,
  selectedPricing: undefined,
  customer: initialAsyncData,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: navReducer,
  extraReducers: extraNavReducer,
});

export const { setPricing, setSelectedPricing } = navSlice.actions;
