import classNames from "classnames";
import { forwardRef, useState } from "react";
import usePath from "../../custom-hooks/usePath";
import { OnclickEvent } from "../../models/types";
import LogoWrapper from "../../components/Navbar/LogoWrapper";
import { Drawer } from "../../ui-kits/Drawer/Drawer.compenent";
import { NavDrawMenu } from "../../components/Navbar/NavDrawMenu";
import useScrollPosition from "../../custom-hooks/useScrollPosition";
import { NavMenuWrapper } from "../../components/Navbar/NavMenuWrapper";
import "./Style.scss";

export const NavBar = forwardRef<HTMLDivElement>((_, ref) => {
  const path = usePath();
  const { scrollPosition } = useScrollPosition();
  const [isNavhidden, setNavHidden] = useState(true);

  const handleOnNavCLick = (e?: OnclickEvent): void => {
    e?.preventDefault();
    setNavHidden((prev) => !prev);
  };

  const nonStickyPath = ["pricing", "contact"];

  return (
    <section
      className={classNames("HeaderSection", {
        sticky: !nonStickyPath.includes(path),
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
