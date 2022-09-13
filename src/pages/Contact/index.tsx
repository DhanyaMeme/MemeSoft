import { Container } from "../../ui-kits/Container";
import { LoginForm } from "../../components/Contact/Login/LoginForm/LoginForm";
import { PageContentFitScreen } from "../../ui-kits/Wrappers/PageContent.styles";

export const Contact = () => {
  return (
    <Container>
      <PageContentFitScreen isExtraNarrow>
        <LoginForm />
      </PageContentFitScreen>
    </Container>
  );
};
