import { Navigate } from "react-router";
import { Home } from "../pages/Home";
import BaseLayout from "../layout/BaseLayout";

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
      path: "security",
      element: <Home />,
    },
  ],
};

export default PagesInfo;
