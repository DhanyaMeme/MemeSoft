import classNames from "classnames";
import { FC, ReactNode, useState } from "react";
import { NavLink } from "react-router-dom";
import useElementSize from "../../custom-hooks/useElementSize";
import { isEmpty } from "../../utils/script";
import { IF } from "../IF";

import "./Accordian.scss";

interface IProps {
  title: string;
  path: string;
  onHandleClose: () => void;
  child: ReactNode | undefined;
  isPadded?: boolean;
  isAutoExpand?: boolean;
  isLarge?: boolean;
}

export const Accordian: FC<IProps> = (props: IProps) => {
  const { child, title, isPadded, isAutoExpand, isLarge, path, onHandleClose } =
    props;

  const [squareRef, { height }] = useElementSize();
  const [isExpand, setIsExpand] = useState(false);

  const handleClick = () => {
    setIsExpand(!isExpand);
  };

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
          onClick={handleClick}
        >
          {title}
          <span className="Collapsible__Plus"></span>
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
          to={path}
          className="Collapsible__Button Heading u-h5 Link Link--primary"
          onClick={onHandleClose}
        >
          {title}
        </NavLink>
      </IF>
    </div>
  );
};
