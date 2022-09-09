import { useState } from "react";
import LogoWrapper from "../../components/Navbar/LogoWrapper";
import { NavDrawMenu } from "../../components/Navbar/NavDrawMenu";
import { NavMenuWrapper } from "../../components/Navbar/NavMenuWrapper";
import { OnclickEvent } from "../../models/types";
import { Drawer } from "../../ui-kits/Drawer/Drawer.compenent";
import "./Style.scss";

export const Navbar = () => {
  const [isNavhidden, setNavHidden] = useState(true);

  const handleOnNavCLick = (e?: OnclickEvent): void => {
    e?.preventDefault();
    setNavHidden((prev) => !prev);
  };

  return (
    <div>
      <section className="HeaderSection sticky">
        <header className="Header">
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
    </div>
  );
};
