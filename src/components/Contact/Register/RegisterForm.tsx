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
import { getCountries, getCountryData } from "../../../mocks/Countries";
import {
  initialRegisterState,
  IRegisterFormState,
  registerInputProps,
  RegisterInputs,
} from "./RegisterFor.types";
import { Form__Elemen__Types } from "../../../ui-kits/Form/FormElements/FormElement";
import useObjectState from "../../../custom-hooks/useObjectState";
import { IFormState } from "../../../models/interfaces";
import { initialFormState } from "../../../models/constants";
import {
  InputChangeEvent,
  InputFocusEvent,
  OnSubmitEvent,
} from "../../../models/types";
import { useAuth } from "../../../context/AuthContext";
import { isEmpty } from "../../../utils/script";
import { getStates } from "../../../mocks/States";

export const RegisterForm = () => {
  const { handleFormValidate, handleOnFocusEvent } = useAuth();

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

  const selectedCountry = getCountryData(registerState.country);

  const getOptions = (name: string) =>
    ({
      country: getCountries(),
      state: getStates(selectedCountry?.countryCode || ""),
    }[name]);

  const handleSelectChange = (name: string, option: string) => {
    updateRegisterState(name as any, option);
  };

  const handleOnsubmit = (e: OnSubmitEvent) => {
    e.preventDefault();
    const isValid = handleFormValidate(
      RegisterInputs,
      registerState,
      updateFormState
    );
    if (isValid) {
    }
  };

  console.log({ registerState, selectedCountry });

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
                    options={getOptions(item.name) ?? []}
                    onSelect={handleSelectChange}
                    disabled={!getOptions(item.name)?.length}
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
