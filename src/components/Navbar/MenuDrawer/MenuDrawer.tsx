import { FC } from "react";
import { Drawer } from "../../../ui-kits/Drawer/Drawer.compenent";
import { MenuBody } from "./MenuBody";
import "./MenuDrawer.scss";

interface IProps {
  handleClose: () => void;
  visibleMenu: boolean;
}

export const MenuDrawer: FC<IProps> = (props: IProps) => {
  const { handleClose, visibleMenu } = props;

  return (
    <Drawer
      body={<MenuBody handleClose={handleClose} />}
      position="left"
      title="Menu"
      isHidden={visibleMenu}
      handleClose={handleClose}
      classes="SidebarMenu"
      spacingTight={true}
    />
  );
};
