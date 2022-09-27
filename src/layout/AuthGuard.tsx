import { ReactNode, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Login } from "../pages/Auth/Login";

interface AuthGuardProps {
  children?: ReactNode;
}

const AuthGuard = ({ children }: AuthGuardProps) => {
  const { user: isAuthenticated } = useAuth();

  const { pathname } = useLocation();
  const [requestedLocation, setRequestedLocation] = useState<string | null>(
    null
  );

  console.log({
    pathname,
    isAuthenticated,
    requestedLocation,
  });

  if (!isAuthenticated) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }
    return <Login />;
  }

  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation(null);
    return <Navigate to={requestedLocation} />;
  }

  return <>{children || <Outlet />}</>;
};

export default AuthGuard;
