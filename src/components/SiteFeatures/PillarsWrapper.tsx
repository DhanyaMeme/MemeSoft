import classNames from "classnames";
import { FC } from "react";

interface IProps {
  isReverse?: boolean;
}

export const PillarsWrapper: FC<IProps> = (props: IProps) => {
  const { isReverse } = props;

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
            src="https://cdn.shopify.com/shopifycloud/brochure/assets/home/market-small-084eab2d72b510555838c446501d27dd7380585450efcaaa97453289b2b69c79.jpg"
          />
        </div>
      </div>
      <div className="Text_Sec">
        <h2 className="Heading">Breaking the myth</h2>
        <p className="Text--subdued">
          Wool gets a bad rep for being itchy, heavy and uncomfortable – but the
          Merino Wool that goes into our shoes is soft as silk and fine as a
          feather. This ultra-fine wool is ridiculously soft, so our shoes feel
          more like a second skin. You might even forget you’re wearing shoes at
          all.
        </p>
      </div>
    </div>
  );
};
