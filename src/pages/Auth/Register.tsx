import { Container } from "../../ui-kits/Container";
import { RegisterForm } from "../../components/Auth/RegisterForm";
import { PageContentFitScreen } from "../../ui-kits/Wrappers/PageContent.styles";

export const Register = () => {
  return (
    <Container>
      <PageContentFitScreen isNarrow>
        <RegisterForm />
      </PageContentFitScreen>
    </Container>
  );
};
