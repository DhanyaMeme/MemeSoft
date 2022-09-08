import LogoWrapper from "../../components/Navbar/LogoWrapper";
import { NavMenuWrapper } from "../../components/Navbar/NavMenuWrapper";
import "./Style.scss";

export const Navbar = () => {
  return (
    <section className="HeaderSection sticky">
      <header className="Header">
        <nav className="Header__Wrapper">
          <LogoWrapper />
          <NavMenuWrapper />
        </nav>
      </header>
    </section>
  );
};
