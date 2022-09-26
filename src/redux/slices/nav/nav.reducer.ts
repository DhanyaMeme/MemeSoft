import { AxiosResponse } from "axios";
import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ICustomer, INavState, IPricingData, Pricing } from "./nav.type";
import { fetchData } from "../../../services/axios";
import { authService, paymentService } from "../../../services/axiosServices";
import { GroupByPropValue } from "../../../utils/generics";

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

export const fetchSubcription = createAsyncThunk(
  "nav/getSubcription",
  async (_args, { rejectWithValue }) => {
    try {
      const response = (await fetchData(
        paymentService.getAllSubcription
      )) as AxiosResponse;
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const navReducer = {
  setPricing: (
    state: INavState,
    { payload }: PayloadAction<string | undefined>
  ): void => {
    state.pricing = payload;
  },
  setSelectedPricing: (
    state: INavState,
    { payload }: PayloadAction<IPricingData | undefined>
  ): void => {
    state.selectedPricing = payload;
  },
};

export const extraNavReducer = {
  [fetchSubcription.pending.type]: (state: INavState) => {
    state.pricingData.loading = true;
  },
  [fetchSubcription.fulfilled.type]: (
    state: INavState,
    { payload }: PayloadAction<Array<IPricingData>>
  ) => {
    const data = GroupByPropValue(payload, "platform");
    state.pricingData.loading = false;
    state.pricingData.data = data;
  },
  [fetchSubcription.rejected.type]: (state: INavState) => {
    state.pricingData.loading = false;
    state.pricingData.error = "Error while fetching all categories";
  },
  [fetchCustomer.pending.type]: (state: INavState) => {
    state.customer.loading = true;
  },
  [fetchCustomer.fulfilled.type]: (
    state: INavState,
    { payload }: PayloadAction<ICustomer>
  ) => {
    state.customer.loading = false;
    state.customer.data = payload;
  },
  [fetchCustomer.rejected.type]: (state: INavState) => {
    state.customer.loading = false;
    state.customer.error = "Error while fetching all customers";
  },
};
