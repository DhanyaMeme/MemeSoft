import { useAuth } from "../../../../context/AuthContext";
import useObjectState from "../../../../custom-hooks/useObjectState";
import { initialFormState } from "../../../../models/constants";
import { IFormState, Messages } from "../../../../models/interfaces";
import {
  InputChangeEvent,
  InputFocusEvent,
  OnSubmitEvent,
} from "../../../../models/types";
import {
  Form,
  FormAlert,
  FormElement,
  FormSubmit,
  FormTextInput,
} from "../../../../ui-kits/Form";
import { Form__Elemen__Types } from "../../../../ui-kits/Form/FormElements/FormElement";
import { IF } from "../../../../ui-kits/IF";
import { isEmpty } from "../../../../utils/script";
import {
  ForgotPasswordInput,
  ForgotPasswordInputs,
  IForgotPasswordState,
  initialForgotPasswordState,
} from "./types";

export const EmailVerifyForm = () => {
  const {
    obj: forgotPasswordState,
    get: getforgotPasswordState,
    update: updateforgotPasswordState,
  } = useObjectState(initialForgotPasswordState);

  const {
    obj: formState,
    update: updateFormState,
    setObj: setFormState,
  } = useObjectState(initialFormState as IFormState<IForgotPasswordState>);

  const {
    handleFormValidate,
    handleOnFocusEvent,
    updateData,
    handleLoginPage,
  } = useAuth();

  const message: Messages = {
    success: "OTP sent to your registered email.",
    error: "User Not Available",
  };

  // const forgotPasswordParams = {
  //   ...authService.ForgorPassword,
  //   params: forgotPasswordState,
  // };

  const handleOnsubmit = async (e: OnSubmitEvent) => {
    e.preventDefault();
    const isValid = handleFormValidate(
      ForgotPasswordInputs,
      forgotPasswordState,
      updateFormState
    );
    if (isValid) {
    }
  };

  return (
    <Form onSubmit={handleOnsubmit}>
      <FormElement elementType={Form__Elemen__Types.FormHeader}>
        <h1 className="Heading Text--highlight">Forgot Password?</h1>
      </FormElement>
      <IF
        condition={!isEmpty(formState.helperText) || !isEmpty(formState.errors)}
      >
        <FormAlert
          isError={!formState.submitSuccess}
          isSuccess={formState.submitSuccess}
          classname="u-h6"
        >
          {formState.helperText ||
            (formState.errors && Object.values(formState.errors)[0])}
        </FormAlert>
      </IF>
      {ForgotPasswordInputs.map(
        ({ validation, ...item }: ForgotPasswordInput) => {
          return (
            <FormElement key={item.name}>
              <FormTextInput
                {...item}
                value={getforgotPasswordState(item.name)}
                onFocus={(e: InputFocusEvent) =>
                  handleOnFocusEvent(e, initialFormState, setFormState)
                }
                onChange={(e: InputChangeEvent) => {
                  updateforgotPasswordState(item.name, e.target.value);
                }}
              />
            </FormElement>
          );
        }
      )}
      <FormSubmit isFull isLoading={formState.isButtonLoading}>
        RECOVER
      </FormSubmit>
    </Form>
  );
};
