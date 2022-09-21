import { FC } from "react";
import { Drawer } from "../../../ui-kits/Drawer/Drawer.compenent";
import { AuthButton } from "../AuthButton";
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
      body={
        <>
          <MenuBody handleClose={handleClose} />
          <div className="SidebarMenu__Nav--secondary" onClick={handleClose}>
            <AuthButton />
          </div>
        </>
      }
      position="left"
      title="Menu"
      isHidden={visibleMenu}
      handleClose={handleClose}
      classes="SidebarMenu"
      spacingTight={true}
    />
  );
};
