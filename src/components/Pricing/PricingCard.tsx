import { FC } from "react";
import { IPricing } from "../../pages/Pricing/data";
import { IF } from "../../ui-kits/IF";
import "./Style.scss";

interface IProps {
  pricingData: IPricing;
}

export const PricingCard: FC<IProps> = ({ pricingData }: IProps) => {
  const { planName, planPricing, planDescription, isRecommended } = pricingData;

  return (
    <div
      className="PricingCard"
      data-aos="zoom-in"
      data-aos-once="true"
      data-aos-duration="1500"
    >
      <IF condition={isRecommended}>
        <span className="Heading PricingCard__PlanRecommended u-h6">
          Recommended
        </span>
      </IF>
      <h2 className="Heading">{planName}</h2>
      <p className="Text--subdued">{planDescription}</p>
      <div className="u-h2 Heading">
        Rs. <strong>{planPricing}</strong> /mo
      </div>
    </div>
  );
};
