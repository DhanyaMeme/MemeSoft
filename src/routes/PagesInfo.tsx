import { Navigate } from "react-router";
import { ERP } from "../pages/ERP";
import { Home } from "../pages/Home";
import BaseLayout from "../layout/BaseLayout";
import { Pricing } from "../pages/Pricing";
import { Contact } from "../pages/Contact";

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
      element: <Home />,
    },
    {
      path: "mobile-apps",
      element: <Home />,
    },
    {
      path: "erp",
      element: <ERP />,
    },
    {
      path: "pos",
      element: <Home />,
    },
    {
      path: "solution",
      element: <Home />,
    },
    {
      path: "security",
      element: <Home />,
    },
    {
      path: "pricing",
      element: <Pricing />,
    },
    {
      path: "contact",
      element: <Contact />,
    },
  ],
};

export default PagesInfo;
