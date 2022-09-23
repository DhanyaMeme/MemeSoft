import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Accordian } from "../../../ui-kits/Accordian/Accordian";
import { INavData, ISubMenu, navData } from "../../../mocks/navData";

interface IProps {
  handleClose: () => void;
}

export const MenuBody: FC<IProps> = (props: IProps) => {
  const { handleClose } = props;

  return (
    <nav className="SidebarMenu__Nav SidebarMenu__Nav--primary">
      {navData.map((item: INavData) => {
        return (
          <Accordian
            title={item.title.toUpperCase()}
            key={item.id}
            path={`/${item.path}`}
            onHandleClose={handleClose}
            child={
              item.dropDown
                ? item.dropDown?.map((submenu: ISubMenu) => (
                    <div
                      className="Collapsible"
                      key={submenu.title}
                      onClick={handleClose}
                    >
                      <NavLink
                        to={`/${submenu.path}`}
                        className="Collapsible__Button Heading Text--subdued Link Link--primary u-h7"
                      >
                        {submenu.title.toUpperCase()}
                      </NavLink>
                    </div>
                  ))
                : undefined
            }
          />
        );
      })}
    </nav>
  );
};
