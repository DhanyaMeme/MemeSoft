import { useEffect } from "react";
import { useNavigate } from "react-router";
import usePath from "../../custom-hooks/usePath";
import LazyLoad from "../../ui-kits/LazyComponent";
import { PageWidth } from "../../ui-kits/PageWidth";
import { PricingCard } from "../../components/Pricing/PricingCard";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { SectionHeader } from "../../ui-kits/Sections/SectionHeader/SectionHeader";
import { SectionWrapper } from "../../ui-kits/Sections/SectionWrapper/SectionWrapper";
import {
  setPricing,
  setSelectedPricing,
} from "../../redux/slices/nav/nav.slice";
import { pricingData } from "../../redux/slices/nav/nav.selector";
import { IPricingData } from "../../redux/slices/nav/nav.type";
import { useAuth } from "../../context/AuthContext";

export const Pricing = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { data } = useAppSelector(pricingData);
  const { user } = useAuth();

  const {
    params: { id },
  } = usePath();

  const pathId = id?.toUpperCase() as string;

  const pricingList = data?.get(pathId);

  const handleSubscribe = (pricingData: IPricingData) => {
    if (user) {
      dispatch(setSelectedPricing(pricingData));
      navigate("/subscribe");
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    dispatch(setPricing(pathId));
  }, [dispatch, pathId, pricingList]);

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
              <PricingCard
                pricingData={item}
                handleSubscribe={handleSubscribe}
              />
            </LazyLoad>
          ))}
        </div>
      </PageWidth>
    </SectionWrapper>
  );
};
