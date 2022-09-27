import { Profile } from "../pages/Profile";
import { Subscription } from "../pages/Subscription";
import AuthGuard from "../layout/AuthGuard";

const AuthRoutes = {
  path: "/",
  element: <AuthGuard />,
  children: [
    {
      path: "subscribe",
      element: <Subscription />,
    },
    {
      path: "profile",
      element: <Profile />,
    },
  ],
};

export default AuthRoutes;
