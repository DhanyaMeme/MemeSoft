import { forwardRef, useState } from "react";
import { OnclickEvent } from "../../models/types";
import LogoWrapper from "../../components/Navbar/LogoWrapper";
import { NavMenuWrapper } from "../../components/Navbar/NavMenuWrapper";
import { MenuDrawer } from "../../components/Navbar/MenuDrawer/MenuDrawer";
import "./Style.scss";

export const NavBar = forwardRef<HTMLDivElement>((_, ref) => {
  const [isNavhidden, setNavHidden] = useState(true);

  const handleOnNavCLick = (e?: OnclickEvent): void => {
    e?.preventDefault();
    setNavHidden((prev) => !prev);
  };

  return (
    <header className="HeaderSection" ref={ref}>
      <div className="Header">
        <nav className="Header__Wrapper">
          <LogoWrapper />
          <NavMenuWrapper handleOnNavCLick={handleOnNavCLick} />
        </nav>
        <MenuDrawer visibleMenu={isNavhidden} handleClose={handleOnNavCLick} />
      </div>
    </header>
  );
});
