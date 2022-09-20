import { StripeCard } from "../../components/StripeCard";
import { selectedPricing } from "../../redux/slices/nav/nav.selector";
import { IPricingData } from "../../redux/slices/nav/nav.type";
import { useAppSelector } from "../../redux/store";
import { Container } from "../../ui-kits/Container";
import { IF } from "../../ui-kits/IF";
import { PageContentFitScreen } from "../../ui-kits/Wrappers/PageContent.styles";
import { isEmpty } from "../../utils/script";

export const Subscription = () => {
  const selectedPricingData = useAppSelector(selectedPricing);

  return (
    <Container>
      <PageContentFitScreen isExtraNarrow>
        <IF condition={!isEmpty(selectedPricingData)}>
          <StripeCard selectedPricing={selectedPricingData as IPricingData} />
        </IF>
      </PageContentFitScreen>
    </Container>
  );
};
