import { StripeCard } from "../../components/checkout-form/StripeCard";
import { Container } from "../../ui-kits/Container";
import { PageContentFitScreen } from "../../ui-kits/Wrappers/PageContent.styles";

export const Subscription = () => {
  return (
    <Container>
      <PageContentFitScreen isExtraNarrow>
        <StripeCard />
      </PageContentFitScreen>
    </Container>
  );
};
