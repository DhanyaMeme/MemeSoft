import { FC, ReactNode } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../pages/Navbar";

interface BaseLayoutProps {
  children?: ReactNode;
}

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children || <Outlet />}
    </>
  );
};

export default BaseLayout;
