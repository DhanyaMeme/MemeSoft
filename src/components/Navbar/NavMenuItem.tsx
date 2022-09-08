import classnames from "classnames";
import React, { FC, ReactElement, useRef } from "react";
import { NavLink } from "react-router-dom";
import useHover from "../../custom-hooks/useHover";
import { INavData } from "../../mocks/navData";

interface IProps {
  item: INavData;
}

export const NavMenuItem: FC<IProps> = (props: IProps): ReactElement => {
  const { item } = props;
  const hoverRef = useRef(null);
  const isShown = useHover(hoverRef);

  return (
    <li
      className={classnames("HorizontalList__Item u-h5", {
        "is-active": isShown,
      })}
      ref={hoverRef}
    >
      <NavLink to={`/${item.path}`} className="Heading Header__LinkSpacer">
        {item.title.toUpperCase()}
      </NavLink>
    </li>
  );
};
