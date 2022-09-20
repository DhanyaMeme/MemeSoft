import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export const navSelf = (state: RootState) => state.nav;

export const pricing = createSelector(
  navSelf,
  (state) => state && state.pricing
);
export const pricingData = createSelector(
  navSelf,
  (state) => state && state.pricingData
);

export const selectedPricing = createSelector(
  navSelf,
  (state) => state && state.selectedPricing
);

export const customer = createSelector(
  navSelf,
  (state) => state && state.customer
);
