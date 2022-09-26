import { FC, ReactNode, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { useAuth } from "../context/AuthContext";
import useElementSize from "../custom-hooks/useElementSize";
import useWindowSize from "../custom-hooks/useWindowSize";
import { NavBar } from "../pages/Navbar";
import {
  fetchCustomer,
  fetchSubcription,
} from "../redux/slices/nav/nav.reducer";
import { useAppDispatch } from "../redux/store";

interface BaseLayoutProps {
  children?: ReactNode;
}

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const { width, height } = useWindowSize();
  const [headerRef, { height: headerHeight }] = useElementSize();

  const { user } = useAuth();

  useEffect(() => {
    dispatch(fetchSubcription());
  }, []);

  useEffect(() => {
    if (user) {
      dispatch(fetchCustomer(user));
    }
  }, [user]);

  useEffect(() => {
    const windowheight = `${height}px`;
    const header__Height = `${headerHeight}px`;
    document.documentElement.style.setProperty("--window-height", windowheight);
    document.documentElement.style.setProperty(
      "--header-height",
      header__Height
    );
  }, [width, height, headerHeight]);

  return (
    <>
      <NavBar ref={headerRef} />
      <main>{children || <Outlet />}</main>
      <Footer />
    </>
  );
};

export default BaseLayout;
