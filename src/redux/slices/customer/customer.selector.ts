import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export const customerSelf = (state: RootState) => state.customer;

export const customer = createSelector(
  customerSelf,
  (state) => state && state.customer
);

export const customerTransactions = createSelector(
  customerSelf,
  (state) => state && state.customerTransactions
);
