import { PayloadAction } from "@reduxjs/toolkit";
import { INavState } from "./nav.type";

export const navReducer = {
  setPricing: (
    state: INavState,
    { payload }: PayloadAction<string | undefined>
  ): void => {
    state.pricing = payload;
  },
};
