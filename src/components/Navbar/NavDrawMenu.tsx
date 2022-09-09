import { FC, ReactElement } from "react";
import { NavLink } from "react-router-dom";
import { INavData, navData } from "../../mocks/navData";

interface IProps {
  handleOnNavCLick: () => void;
}

export const NavDrawMenu: FC<IProps> = (props: IProps): ReactElement => {
  const { handleOnNavCLick } = props;

  return (
    <ul className="Linklist">
      {navData.map((item: INavData) => (
        <li className="Linklist__Item u-h6" onClick={handleOnNavCLick}>
          <NavLink
            to={`/${item.path}`}
            className="Heading Link Link--secondary"
          >
            {item.title.toUpperCase()}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
