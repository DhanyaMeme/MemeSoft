import { Container } from "../../ui-kits/Container";
import { LoginForm } from "../../components/Auth/Login/LoginForm/LoginForm";
import { PageContentFitScreen } from "../../ui-kits/Wrappers/PageContent.styles";

export const Login = () => {
  return (
    <Container>
      <PageContentFitScreen isExtraNarrow>
        <LoginForm />
      </PageContentFitScreen>
    </Container>
  );
};
