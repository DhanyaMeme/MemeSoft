import { AxiosResponse } from "axios";
import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { INavState, IPricingData, Pricing } from "./nav.type";
import { fetchData } from "../../../services/axios";
import { authService } from "../../../services/axiosServices";

export const fetchSubcription = createAsyncThunk<IPricingData[], string>(
  "nav/getSubcription",
  async (platform, { rejectWithValue }) => {
    try {
      const response = (await fetchData({
        ...authService.Pricing,
        params: {
          platform,
        },
      })) as AxiosResponse;
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
};

export const extraNavReducer = {
  [fetchSubcription.pending.type]: (state: INavState) => {
    state.pricingData.loading = true;
  },
  [fetchSubcription.fulfilled.type]: (
    state: INavState,
    { payload }: PayloadAction<Array<IPricingData>>
  ) => {
    const data = state.pricingData.data || ({} as Pricing);
    const key = state.pricing as string;
    state.pricingData.loading = false;
    state.pricingData.data = { ...data, [key]: payload };
  },
  [fetchSubcription.rejected.type]: (state: INavState) => {
    state.pricingData.loading = false;
    state.pricingData.error = "Error while fetching all categories";
  },
};
