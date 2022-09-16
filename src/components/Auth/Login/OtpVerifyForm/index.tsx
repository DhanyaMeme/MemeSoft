import { LoginPage, useAuth } from "../../../../context/AuthContext";
import useObjectState from "../../../../custom-hooks/useObjectState";
import { initialFormState } from "../../../../models/constants";
import { IFormState, Messages } from "../../../../models/interfaces";
import {
  InputChangeEvent,
  InputFocusEvent,
  OnSubmitEvent,
} from "../../../../models/types";
import { authService } from "../../../../services/axiosServices";
import {
  Form,
  FormAlert,
  FormElement,
  FormSubmit,
  FormTextInput,
} from "../../../../ui-kits/Form";
import { Form__Elemen__Types } from "../../../../ui-kits/Form/FormElements/FormElement";
import { IF } from "../../../../ui-kits/IF";
import { safeSetTimeout } from "../../../../utils/generics";
import { isEmpty } from "../../../../utils/script";
import { FormError } from "../../FormError";
import { ResendOTP } from "../ResendOTP";
import {
  ILoginOTPState,
  initialLoginOTPState,
  LoginOTPInput,
  LoginOTPInputs,
} from "./types";

export const OtpVerifyForm = () => {
  const {
    obj: loginOTPState,
    get: getLoginOTPState,
    update: updateLoginOTPState,
  } = useObjectState(initialLoginOTPState);

  const {
    obj: formState,
    update: updateFormState,
    setObj: setFormState,
  } = useObjectState(initialFormState as IFormState<ILoginOTPState>);

  const {
    handleFormValidate,
    handleOnFocusEvent,
    updateData,
    handleLoginPage,
    verificationEmail,
  } = useAuth();

  const message: Messages = {
    success: "OTP validated successfully!",
    error: "Incorrect OTP, Try Again!",
  };

  const otpParams = {
    ...authService.ConfirmOtp,
    params: {
      ...loginOTPState,
      email: verificationEmail,
    },
  };

  const handleOnsubmit = async (e: OnSubmitEvent) => {
    e.preventDefault();
    const isValid = handleFormValidate(
      LoginOTPInputs,
      loginOTPState,
      updateFormState
    );
    if (isValid) {
      const data = await updateData(
        otpParams,
        formState,
        message,
        setFormState
      );
      if (data) {
        safeSetTimeout(handleLoginPage, 1000, LoginPage.ResetPassword);
      }
    }
  };

  return (
    <Form onSubmit={handleOnsubmit}>
      <FormElement elementType={Form__Elemen__Types.FormHeader}>
        <h1 className="Heading u-h1 Text--highlight">OTP Verification</h1>
        <p>Please enter an OTP sent to your Email.</p>
      </FormElement>
      <FormError formState={formState} />
      {LoginOTPInputs.map(({ validation, ...item }: LoginOTPInput) => {
        return (
          <FormElement key={item.name}>
            <FormTextInput
              {...item}
              value={getLoginOTPState(item.name)}
              onFocus={(e: InputFocusEvent) =>
                handleOnFocusEvent(e, initialFormState, setFormState)
              }
              onChange={(e: InputChangeEvent) => {
                updateLoginOTPState(item.name, e.target.value);
              }}
            />
          </FormElement>
        );
      })}
      <ResendOTP formState={formState} setFormState={setFormState} />
      <FormSubmit isFull isLoading={formState.isButtonLoading}>
        Submit
      </FormSubmit>
    </Form>
  );
};
