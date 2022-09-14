import { RegisterForm } from "../../components/Contact/Register/RegisterForm";
import { Container } from "../../ui-kits/Container";
import { PageContentFitScreen } from "../../ui-kits/Wrappers/PageContent.styles";

export const Contact = () => {
  return (
    <Container>
      <PageContentFitScreen isNarrow>
        {/* <LoginForm /> */}
        <RegisterForm />
      </PageContentFitScreen>
    </Container>
  );
};
