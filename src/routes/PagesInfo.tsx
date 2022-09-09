import { Navigate } from "react-router";
import BaseLayout from "../layout/BaseLayout";
import { Home } from "../pages/Home";

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
      element: <Home />,
    },
    {
      path: "pos-solution",
      element: <Home />,
    },
    {
      path: "security",
      element: <Home />,
    },
    {
      path: "pricing",
      element: <Home />,
    },
    {
      path: "contact",
      element: <Home />,
    },
  ],
};

export default PagesInfo;
