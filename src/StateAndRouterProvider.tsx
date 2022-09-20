import * as React from "react";
import { Provider } from "react-redux";
import { ReactNode, ReactPortal } from "react";
import { Store } from "@reduxjs/toolkit";
import { BrowserRouter } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { PersistGate } from "redux-persist/integration/react";
import { STRIPE_KEY, STRIPE_TEST_KEY } from "./models/constants";
import { AuthProvider } from "./context/AuthContext";
import { persistor, store } from "./redux/store";

type Children = ReactNode | Array<Children> | ReactPortal;

export interface IChildrenProp {
  children: Children;
}

export interface IElementProps {
  className: string;
}

interface IProps extends IChildrenProp {
  store: Store;
}

const stripePromise = loadStripe(STRIPE_KEY);

/**
 * Responsible for rendering the IntlProvider component
 */
const StateAndRouterProvider: React.FC<IProps> = (props: IProps) => {
  return (
    <BrowserRouter>
      <Elements stripe={stripePromise}>
        <AuthProvider>
          <Provider store={store}>
            <PersistGate persistor={persistor}>{props.children}</PersistGate>
          </Provider>
        </AuthProvider>
      </Elements>
    </BrowserRouter>
  );
};

export { StateAndRouterProvider };
