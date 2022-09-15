import { InputType } from "../../../models/enums";
import {
  Form,
  FormAlert,
  FormElement,
  FormPasswordInput,
  FormSelectInput,
  FormSubmit,
  FormTextInput,
} from "../../../ui-kits/Form";
import { IF } from "../../../ui-kits/IF";
import { getCountries, getCurrencyCode } from "../../../mocks/Countries";
import {
  initialRegisterState,
  IRegisterFormState,
  registerInputProps,
  RegisterInputs,
} from "./types";
import { Form__Elemen__Types } from "../../../ui-kits/Form/FormElements/FormElement";
import useObjectState from "../../../custom-hooks/useObjectState";
import { IFormState, Messages } from "../../../models/interfaces";
import { initialFormState } from "../../../models/constants";
import {
  InputChangeEvent,
  InputFocusEvent,
  OnSubmitEvent,
} from "../../../models/types";

import { isEmpty } from "../../../utils/script";
import { useAuth } from "../../../context/AuthContext";
import { getDialCode } from "../../../mocks/Dialcodes";
import { safeSetTimeout } from "../../../utils/generics";
import { authService } from "../../../services/axiosServices";

export const RegisterForm = () => {
  const { handleFormValidate, handleOnFocusEvent, updateData, navigateToHome } =
    useAuth();

  const {
    obj: registerState,
    get: getRegisterState,
    update: updateRegisterState,
  } = useObjectState(initialRegisterState);

  const {
    obj: formState,
    update: updateFormState,
    setObj: setFormState,
  } = useObjectState(initialFormState as IFormState<IRegisterFormState>);

  const handleSelectChange = (name: string, option: string) => {
    updateRegisterState(name as any, option);
  };

  const message: Messages = {
    success: "Successfully Registered",
    error: "Something went wrong, Try Again",
  };

  const handleOnsubmit = async (e: OnSubmitEvent) => {
    e.preventDefault();

    const isValid = handleFormValidate(
      RegisterInputs,
      registerState,
      updateFormState
    );
    if (isValid) {
      const selectedDialCode = getDialCode(registerState.country) || "";
      const selectedCurrencyCode = getCurrencyCode(
        registerState.country
      ) as string;

      const data: IRegisterFormState = {
        ...registerState,
        currency: selectedCurrencyCode,
        phone: `${selectedDialCode + registerState.phone} `,
        mobile: registerState.mobile
          ? `${selectedDialCode + registerState.mobile}`
          : registerState.mobile,
      };

      const registerParams = {
        ...authService.Register,
        params: data,
      };

      const response = await updateData(
        registerParams,
        formState,
        message,
        setFormState
      );

      if (response) {
        safeSetTimeout(navigateToHome, 1000, registerState.email);
      }
    }
  };

  return (
    <Form onSubmit={handleOnsubmit}>
      <FormElement elementType={Form__Elemen__Types.FormHeader}>
        <h2 className="Heading Text--highlight">Register</h2>
        <p>Please fill in the information below:</p>
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

      <div className="Grid">
        {RegisterInputs.map(({ validation, ...item }: registerInputProps) => {
          const Tag: any =
            item.label === "Password" ? FormPasswordInput : FormTextInput;
          return (
            <div
              className="Grid__Cell  1/2--tablet-and-up 1/2--lap-and-up"
              key={item.label}
            >
              <FormElement key={item.name}>
                <IF condition={item.type !== InputType.select}>
                  <Tag
                    {...item}
                    value={getRegisterState(item.name)}
                    onFocus={(e: InputFocusEvent) =>
                      handleOnFocusEvent(e, initialFormState, setFormState)
                    }
                    onChange={(e: InputChangeEvent) => {
                      updateRegisterState(item.name, e.target.value);
                    }}
                  />
                </IF>
                <IF condition={item.type === InputType.select}>
                  <FormSelectInput
                    label={item.label}
                    name={item.name}
                    options={getCountries()}
                    onSelect={handleSelectChange}
                    disabled={!getCountries().length}
                  />
                </IF>
              </FormElement>
            </div>
          );
        })}
      </div>
      <FormSubmit isFull isLoading={formState.isButtonLoading}>
        Register
      </FormSubmit>
    </Form>
  );
};
