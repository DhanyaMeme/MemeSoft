import { ReactNode, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

interface AuthGuardProps {
  children?: ReactNode;
}

const AuthGuard = ({ children }: AuthGuardProps) => {
  return <>{children || <Outlet />}</>;
};

export default AuthGuard

