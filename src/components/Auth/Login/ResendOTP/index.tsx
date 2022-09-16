import { useAuth } from "../../../../context/AuthContext";
import { IFormState, Messages } from "../../../../models/interfaces";

interface IProps<T> {
  formState: IFormState<T>;
  setFormState: (value: IFormState<T>) => void;
}

export const ResendOTP = <T extends Object>(props: IProps<T>) => {
  const { formState, setFormState } = props;

  const { updateData, verificationEmail } = useAuth();

  const resendOTPParams = {
    // ...authService.ForgorPassword,
    // params: {
    //   email: verificationEmail,
    // },
  };

  const registerResendOTPmessage: Messages = {
    success: "OTP sent to your registered email.",
    error: "Something went wrong, Try again",
  };

  const handleResendOTPsubmit = async () => {
    await updateData(
      resendOTPParams,
      formState,
      registerResendOTPmessage,
      setFormState
    );
  };

  return (
    <div
      className="Form__HelpText Text--alignRight Link Link--secondary"
      onClick={handleResendOTPsubmit}
    >
      Resend OTP ?
    </div>
  );
};
