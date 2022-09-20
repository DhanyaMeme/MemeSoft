import { FC } from "react";
import { IPricingData } from "../../redux/slices/nav/nav.type";
import { FormElement } from "../../ui-kits/Form";
import { IF } from "../../ui-kits/IF";
import { TextButton } from "../../ui-kits/TextButton/TextButton.component";
import "./Style.scss";

interface IProps {
  pricingData: IPricingData;
}

export const PricingCard: FC<IProps> = ({ pricingData }: IProps) => {
  const { planename, fee, plancode, country } = pricingData;

  return (
    <div
      className="PricingCard"
      data-aos="zoom-in"
      data-aos-once="true"
      data-aos-duration="1500"
    >
      <IF condition={planename === "Premium"}>
        <span className="Heading PricingCard__PlanRecommended u-h6">
          Recommended
        </span>
      </IF>
      <h2 className="Heading">{planename}</h2>
      <p className="Text--subdued">
        {country} - {plancode}
      </p>
      <div className="u-h2 Heading">
        Rs. <strong>{fee}</strong> /mo
      </div>

      <TextButton isSmall>SUBSCRIBE</TextButton>
    </div>
  );
};
