import classNames from "classnames";
import { forwardRef, useState } from "react";
import usePath from "../../custom-hooks/usePath";
import { OnclickEvent } from "../../models/types";
import LogoWrapper from "../../components/Navbar/LogoWrapper";
import useScrollPosition from "../../custom-hooks/useScrollPosition";
import { NavMenuWrapper } from "../../components/Navbar/NavMenuWrapper";
import { MenuDrawer } from "../../components/Navbar/MenuDrawer/MenuDrawer";
import "./Style.scss";

export const NavBar = forwardRef<HTMLDivElement>((_, ref) => {
  const { path } = usePath();
  const { scrollPosition } = useScrollPosition();
  const [isNavhidden, setNavHidden] = useState(true);

  const handleOnNavCLick = (e?: OnclickEvent): void => {
    e?.preventDefault();
    setNavHidden((prev) => !prev);
  };

  const stickyPath = [
    "home",
    "mobile-apps",
    "erp",
    "pos",
    "solution",
    "security",
  ];

  return (
    <header
      className={classNames("HeaderSection", {
        sticky: stickyPath.includes(path),
      })}
      ref={ref}
    >
      <div
        className={classNames("Header", {
          "Header--transparent": !scrollPosition,
        })}
      >
        <nav className="Header__Wrapper">
          <LogoWrapper />
          <NavMenuWrapper handleOnNavCLick={handleOnNavCLick} />
        </nav>
        <MenuDrawer visibleMenu={isNavhidden} handleClose={handleOnNavCLick} />
      </div>
    </header>
  );
});
