import { createSlice } from "@reduxjs/toolkit";
import { initialAsyncData } from "../../../models/constants";
import { customerReducer, extraCustomerReducer } from "./customer.reducer";
import { ICustomerState } from "./customer.type";

export const initialState: ICustomerState = {
  customer: initialAsyncData,
  customerTransactions: initialAsyncData,
};

export const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: customerReducer,
  extraReducers: extraCustomerReducer,
});
