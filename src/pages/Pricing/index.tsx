import { PricingCard } from "../../components/Pricing/PricingCard";
import LazyLoad from "../../ui-kits/LazyComponent";
import { PageWidth } from "../../ui-kits/PageWidth";
import { SectionHeader } from "../../ui-kits/Sections/SectionHeader/SectionHeader";
import { SectionWrapper } from "../../ui-kits/Sections/SectionWrapper/SectionWrapper";
import { PricingData } from "./data";

export const Pricing = () => {
  return (
    <SectionWrapper isbordered>
      <PageWidth isNarrow>
        <SectionHeader
          heading="Start your ecommerce website now, pick a plan later"
          subHeading="Try Meme Soft free for 14 days, no payment information required"
        />

        <div className="Grid">
          {PricingData.map((item) => (
            <LazyLoad
              tag="div"
              key={item.planName}
              className="Grid__Cell 1/3--lap-and-up"
            >
              <PricingCard pricingData={item} />
            </LazyLoad>
          ))}
        </div>
      </PageWidth>
    </SectionWrapper>
  );
};
