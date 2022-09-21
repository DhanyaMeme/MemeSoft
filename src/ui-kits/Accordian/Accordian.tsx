import classNames from "classnames";
import { FC, ReactNode, useState } from "react";
import { NavLink } from "react-router-dom";
import useElementSize from "../../custom-hooks/useElementSize";
import { isEmpty } from "../../utils/script";
import { IF } from "../IF";

import "./Accordian.scss";

interface IProps {
  title: string;
  child?: ReactNode;
  isPadded?: boolean;
  isAutoExpand?: boolean;
  isLarge?: boolean;
  to?: string;
}

export const Accordian: FC<IProps> = (props: IProps) => {
  const { child, title, isPadded, isAutoExpand, isLarge, to = "" } = props;

  const [squareRef, { height }] = useElementSize();
  const [isExpand, setIsExpand] = useState(false);

  const handleClick = () => {
    setIsExpand(!isExpand);
  };

  console.log(title, child);

  return (
    <div
      className={classNames("Collapsible", {
        "Collapsible--padded": isPadded,
        "Collapsible--autoExpand": isAutoExpand,
        "Collapsible--large": isLarge,
      })}
    >
      <IF condition={!isEmpty(child)}>
        <button
          type="button"
          className="Collapsible__Button u-h5 Heading"
          aria-expanded={isExpand}
        >
          {title}
          <span className="Collapsible__Plus" onClick={handleClick}></span>
        </button>
        <div
          className="Collapsible__Inner"
          style={{
            height: isExpand ? `${height}px` : "0",
          }}
        >
          <div className="Collapsible__Content" ref={squareRef}>
            {child}
          </div>
        </div>
      </IF>

      <IF condition={isEmpty(child)}>
        <NavLink
          to={to}
          className="Collapsible__Button Heading Link Link--primary u-h5"
        >
          {title}
        </NavLink>
      </IF>
    </div>
  );
};
