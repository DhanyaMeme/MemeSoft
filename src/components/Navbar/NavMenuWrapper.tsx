import { useRef } from "react";
import { MenuIcon } from "../../assets/icons/Menu.icon";
import useHover from "../../custom-hooks/useHover";
import { INavData, navData } from "../../mocks/navData";
import { NavMenuItem } from "./NavMenuItem";

export const NavMenuWrapper = () => {
  const hoverRef = useRef(null);
  const isShown = useHover(hoverRef);

  return (
    <div className="Header__FlexItem Header__FlexItem--fill">
      <button className="Header__Icon Icon-Wrapper--clickable hidden-desk">
        <MenuIcon />
      </button>
      <div className="Header__MainNav hidden-pocket hidden-lap">
        <ul className="HorizontalList HorizontalList--spacingExtraLoose">
          {navData.map((item: INavData) => (
            <NavMenuItem item={item} key={item.title} />
          ))}
        </ul>
      </div>
    </div>
  );
};
