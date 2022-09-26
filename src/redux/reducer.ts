import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { customerSlice } from "./slices/customer/customer.slice";
import { navSlice } from "./slices/nav/nav.slice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
  // blacklist: ["modal"],
};

const rootReducer = combineReducers({
  [navSlice.name]: navSlice.reducer,
  [customerSlice.name]: customerSlice.reducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
