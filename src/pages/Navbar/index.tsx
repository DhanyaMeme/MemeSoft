import classNames from "classnames";
import { forwardRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { OnclickEvent } from "../../models/types";
import LogoWrapper from "../../components/Navbar/LogoWrapper";
import { NavDrawMenu } from "../../components/Navbar/NavDrawMenu";
import { NavMenuWrapper } from "../../components/Navbar/NavMenuWrapper";
import useScrollPosition from "../../custom-hooks/useScrollPosition";
import { Drawer } from "../../ui-kits/Drawer/Drawer.compenent";
import "./Style.scss";

export const NavBar = forwardRef<HTMLDivElement>((_, ref) => {
  const [isNavhidden, setNavHidden] = useState(true);

  const handleOnNavCLick = (e?: OnclickEvent): void => {
    e?.preventDefault();
    setNavHidden((prev) => !prev);
  };

  const nonStickyPath = ["/pricing", "/contact"];

  const { pathname } = useLocation();
  const { scrollPosition } = useScrollPosition();

  return (
    <section
      className={classNames("HeaderSection", {
        sticky: !nonStickyPath.includes(pathname),
      })}
      ref={ref}
    >
      <header
        className={classNames("Header", {
          "Header--transparent": !scrollPosition,
        })}
      >
        <nav className="Header__Wrapper">
          <LogoWrapper />
          <NavMenuWrapper handleOnNavCLick={handleOnNavCLick} />
        </nav>
        <Drawer
          title="Nav"
          body={<NavDrawMenu handleOnNavCLick={handleOnNavCLick} />}
          isHidden={isNavhidden}
          handleClose={handleOnNavCLick}
          spacingTight={true}
          classes="SidebarMenu"
        />
      </header>
    </section>
  );
});
