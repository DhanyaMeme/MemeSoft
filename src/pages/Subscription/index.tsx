import { useEffect } from "react";
import { useNavigate } from "react-router";
import { StripeCard } from "../../components/StripeCard";
import { selectedPricing } from "../../redux/slices/nav/nav.selector";
import { IPricingData } from "../../redux/slices/nav/nav.type";
import { useAppSelector } from "../../redux/store";
import { Container } from "../../ui-kits/Container";
import { PageContentFitScreen } from "../../ui-kits/Wrappers/PageContent.styles";
import { isEmpty } from "../../utils/script";
import { IF } from "../../ui-kits/IF";
import { customer } from "../../redux/slices/customer/customer.selector";
import { ICustomer } from "../../redux/slices/customer/customer.type";

export const Subscription = () => {
  const selectedPricingData = useAppSelector(selectedPricing);
  const { data: customerData } = useAppSelector(customer);
  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedPricingData) {
      navigate("/pricing/erp");
    }
  }, [navigate, selectedPricingData]);

  return (
    <Container>
      <PageContentFitScreen isExtraNarrow>
        <IF condition={!isEmpty(selectedPricingData)}>
          <StripeCard
            selectedPricing={selectedPricingData as IPricingData}
            customer={customerData as ICustomer}
          />
        </IF>
      </PageContentFitScreen>
    </Container>
  );
};
