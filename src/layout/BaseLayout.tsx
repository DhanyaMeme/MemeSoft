import { FC, ReactNode, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import useElementSize from "../custom-hooks/useElementSize";
import useWindowSize from "../custom-hooks/useWindowSize";
import { NavBar } from "../pages/Navbar";

interface BaseLayoutProps {
  children?: ReactNode;
}

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  const { width, height } = useWindowSize();

  const [headerRef, { height: headerHeight }] = useElementSize();

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
      {children || <Outlet />}
      <Footer />
    </>
  );
};

export default BaseLayout;
