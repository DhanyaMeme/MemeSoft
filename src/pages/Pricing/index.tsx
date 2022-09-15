import usePath from "../../custom-hooks/usePath";
import LazyLoad from "../../ui-kits/LazyComponent";
import { PageWidth } from "../../ui-kits/PageWidth";
import { PricingCard } from "../../components/Pricing/PricingCard";
import { SectionHeader } from "../../ui-kits/Sections/SectionHeader/SectionHeader";
import { SectionWrapper } from "../../ui-kits/Sections/SectionWrapper/SectionWrapper";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { fetchSubcription } from "../../redux/slices/nav/nav.reducer";
import { setPricing } from "../../redux/slices/nav/nav.slice";
import { pricingData } from "../../redux/slices/nav/nav.selector";
import { PricingKey, IPricingData } from "../../redux/slices/nav/nav.type";

export const Pricing = () => {
  const dispatch = useAppDispatch();
  const {
    params: { id },
  } = usePath();

  const pathId = id as PricingKey;
  const { data } = useAppSelector(pricingData);

  const pricingList = data?.[pathId];

  useEffect(() => {
    dispatch(setPricing(pathId));
    if (!pricingList || !pricingList.length) {
      dispatch(fetchSubcription(pathId));
    }
  }, [dispatch, id]);

  return (
    <SectionWrapper isbordered>
      <PageWidth isNarrow>
        <SectionHeader
          heading="Start your ecommerce website now, pick a plan later"
          subHeading="Try Meme Soft free for 14 days, no payment information required"
        />

        <div className="Grid">
          {pricingList?.map((item: IPricingData) => (
            <LazyLoad
              tag="div"
              key={item.sid}
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
