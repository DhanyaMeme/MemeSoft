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
  FormElement,
  FormPasswordInput,
  FormSubmit,
} from "../../../../ui-kits/Form";
import { Form__Elemen__Types } from "../../../../ui-kits/Form/FormElements/FormElement";
import { safeSetTimeout } from "../../../../utils/generics";
import { FormError } from "../../FormError";
import {
  initialResetPasswordState,
  IResetPasswordState,
  ResetPasswordInput,
  ResetPasswordInputs,
} from "./types";

export const ResetPasswordForm = () => {
  const {
    obj: registerState,
    get: getRegisterState,
    update: updateRegisterState,
  } = useObjectState(initialResetPasswordState);

  const {
    obj: formState,
    update: updateFormState,
    setObj: setFormState,
  } = useObjectState(initialFormState as IFormState<IResetPasswordState>);

  const {
    handleFormValidate,
    handleOnFocusEvent,
    updateData,
    verificationEmail,
    handleLoginPage,
  } = useAuth();

  const message: Messages = {
    success: "Password updated succesfully",
    error: "Error While updating password, Try again!",
  };

  const resetPasswordParams = {
    ...authService.ResetPassword,
    params: {
      email: verificationEmail,
      password: registerState.password,
    },
  };

  const handleOnsubmit = async (e: OnSubmitEvent) => {
    e.preventDefault();
    let isValid = handleFormValidate(
      ResetPasswordInputs,
      registerState,
      updateFormState
    );

    if (registerState.password !== registerState.confirmpassword) {
      isValid = false;
      updateFormState("helperText", "Passwords do NOT match!");
    }
    if (isValid) {
      const data = await updateData(
        resetPasswordParams,
        formState,
        message,
        setFormState
      );
      if (data) {
        safeSetTimeout(handleLoginPage, 1000, LoginPage.Login, null);
      }
    }
  };

  return (
    <Form onSubmit={handleOnsubmit}>
      <FormElement elementType={Form__Elemen__Types.FormHeader}>
        <h1 className="Heading Text--highlight">Reset password</h1>
      </FormElement>
      <FormError formState={formState} />
      {ResetPasswordInputs.map(
        ({ validation, ...item }: ResetPasswordInput) => {
          return (
            <FormElement key={item.name}>
              <FormPasswordInput
                {...item}
                value={getRegisterState(item.name)}
                onFocus={(e: InputFocusEvent) =>
                  handleOnFocusEvent(e, initialFormState, setFormState)
                }
                onChange={(e: InputChangeEvent) => {
                  updateRegisterState(item.name, e.target.value);
                }}
              />
            </FormElement>
          );
        }
      )}

      <FormSubmit isFull isLoading={formState.isButtonLoading}>
        Register
      </FormSubmit>
    </Form>
  );
};
