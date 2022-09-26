import { AxiosResponse } from "axios";
import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {
  ICustomer,
  ICustomerState,
  ICustomerTransaction,
} from "./customer.type";
import { fetchData } from "../../../services/axios";
import { authService } from "../../../services/axiosServices";

export const fetchCustomer = createAsyncThunk<ICustomer, string>(
  "nav/getCustomer",
  async (email, { rejectWithValue }) => {
    try {
      const response = (await fetchData({
        ...authService.GetCustomer,
        params: {
          email,
        },
      })) as AxiosResponse;
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const fetchCustomerTransactions = createAsyncThunk<
  ICustomerTransaction,
  string
>("nav/getCustomerTransactions", async (email, { rejectWithValue }) => {
  try {
    const response = (await fetchData({
      ...authService.GetCustomertTrascations,
      params: {
        customerid: email,
        offset: 0,
        pagesize: 20,
      },
    })) as AxiosResponse;
    return response.data["content"];
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const customerReducer = {};

export const extraCustomerReducer = {
  [fetchCustomer.pending.type]: (state: ICustomerState) => {
    state.customer.loading = true;
  },
  [fetchCustomer.fulfilled.type]: (
    state: ICustomerState,
    { payload }: PayloadAction<ICustomer>
  ) => {
    state.customer.loading = false;
    state.customer.data = payload;
  },
  [fetchCustomer.rejected.type]: (state: ICustomerState) => {
    state.customer.loading = false;
    state.customer.error = "Error while fetching all customers";
  },
  [fetchCustomerTransactions.pending.type]: (state: ICustomerState) => {
    state.customerTransactions.loading = true;
  },
  [fetchCustomerTransactions.fulfilled.type]: (
    state: ICustomerState,
    { payload }: PayloadAction<Array<ICustomerTransaction>>
  ) => {
    state.customerTransactions.loading = false;
    state.customerTransactions.data = payload;
  },
  [fetchCustomerTransactions.rejected.type]: (state: ICustomerState) => {
    state.customerTransactions.loading = false;
    state.customerTransactions.error =
      "Error while fetching customers transactions";
  },
};
