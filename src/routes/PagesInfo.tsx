import { Navigate } from "react-router";
import { POS } from "../pages/POS";
import { ERP } from "../pages/ERP";
import { Home } from "../pages/Home";
import { Pricing } from "../pages/Pricing";
import { Contact } from "../pages/Contact";
import { Login } from "../pages/Auth/Login";
import { Solution } from "../pages/Solution";
import BaseLayout from "../layout/BaseLayout";
import { Ecommerce } from "../pages/Ecommerce";
import { MobileApps } from "../pages/MobileApps";
import { Register } from "../pages/Auth/Register";

const PagesInfo = {
  path: "/",
  element: <BaseLayout />,
  children: [
    {
      path: "",
      element: <Navigate to="/home" replace />,
    },
    {
      path: "home",
      element: <Home />,
    },
    {
      path: "ecommerce",
      element: <Ecommerce />,
    },
    {
      path: "mobile-apps",
      element: <MobileApps />,
    },
    {
      path: "erp",
      element: <ERP />,
    },
    {
      path: "pos",
      element: <POS />,
    },
    {
      path: "solution",
      element: <Solution />,
    },
    {
      path: "security",
      element: <Home />,
    },
    {
      path: "pricing/:id",
      element: <Pricing />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "register",
      element: <Register />,
    },
    {
      path: "contact",
      element: <Contact />,
    },
  ],
};

export default PagesInfo;
