import { FC } from "react";
import classNames from "classnames";
import { IPillar } from "../../models/interfaces";

interface IProps {
  pillarData: IPillar;
  isReverse?: boolean;
}

export const PillarsWrapper: FC<IProps> = (props: IProps) => {
  const { isReverse, pillarData } = props;

  return (
    <div
      data-aos="zoom-in-left"
      data-aos-easing="linear"
      data-aos-duration="1500"
      data-aos-once="true"
      className={classNames("ImgText_Section", {
        "ImgText_Section--Reverse": isReverse,
      })}
    >
      <div className="Image_Sec">
        <div className="image">
          <img
            className="lazyload"
            src={pillarData.url}
            alt={pillarData.name}
          />
        </div>
      </div>
      <div className="Text_Sec">
        <h2 className="Heading">{pillarData.name}</h2>
        <p className="Text--subdued">{pillarData.features}</p>
      </div>
    </div>
  );
};
