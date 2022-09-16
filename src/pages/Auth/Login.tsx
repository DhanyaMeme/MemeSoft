import { Container } from "../../ui-kits/Container";
import { LoginForm } from "../../components/Auth/Login/LoginForm";
import { PageContentFitScreen } from "../../ui-kits/Wrappers/PageContent.styles";
import { EmailVerifyForm } from "../../components/Auth/Login/EmailVerifyForm";
import { OtpVerifyForm } from "../../components/Auth/Login/OtpVerifyForm";
import { ResetPasswordForm } from "../../components/Auth/Login/ResetPasswordForm";
import { LoginPage, useAuth } from "../../context/AuthContext";

export const Login = () => {
  const { loginPage } = useAuth();

  const getComponent = (loginPage = LoginPage.Login) =>
    ({
      [LoginPage.Login]: LoginForm,
      [LoginPage.EmailVerify]: EmailVerifyForm,
      [LoginPage.ConfirmOtp]: OtpVerifyForm,
      [LoginPage.ResetPassword]: ResetPasswordForm,
    }[loginPage]);

  const CustomLoginPage = getComponent(loginPage);

  return (
    <Container>
      <PageContentFitScreen isExtraNarrow>
        <CustomLoginPage />
      </PageContentFitScreen>
    </Container>
  );
};
