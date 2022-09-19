import { useAuth } from "../../context/AuthContext";
import useObjectState from "../../custom-hooks/useObjectState";
import { initialFormState } from "../../models/constants";
import { IFormState, Messages } from "../../models/interfaces";
import {
  InputChangeEvent,
  InputFocusEvent,
  OnSubmitEvent,
} from "../../models/types";
import { authService } from "../../services/axiosServices";
import {
  Form,
  FormElement,
  FormSubmit,
  FormTextArea,
  FormTextInput,
} from "../../ui-kits/Form";
import { Form__Elemen__Types } from "../../ui-kits/Form/FormElements/FormElement";
import { safeSetTimeout } from "../../utils/generics";
import { FormError } from "../Auth/FormError";
import {
  ContactInputProps,
  contactInputs,
  IContactFormState,
  initialContactState,
} from "./types";

export const ContactForm = () => {
  const groupInputs = contactInputs.slice(0, contactInputs.length - 1);
  const messageInput = contactInputs[contactInputs.length - 1];

  const { handleFormValidate, handleOnFocusEvent, updateData } = useAuth();
  const {
    obj: contactState,
    get: getContactState,
    update: updateContactState,
  } = useObjectState(initialContactState);
  const {
    obj: formState,
    update: updateFormState,
    setObj: setFormState,
  } = useObjectState(initialFormState as IFormState<IContactFormState>);

  const loginParams = {
    ...authService.AddContact,
    params: contactState,
  };

  const message: Messages = {
    success: "We will reply you as soon as possible!",
    error: "Something went wrong, Try Again Later!",
  };

  const handleOnsubmit = async (e: OnSubmitEvent) => {
    e.preventDefault();
    const isValid = handleFormValidate(
      contactInputs,
      contactState,
      updateFormState
    );
    if (isValid) {
      await updateData(loginParams, formState, message, setFormState);
    }
    safeSetTimeout(setFormState, 3000, initialFormState);
  };

  return (
    <Form classname="Form" onSubmit={handleOnsubmit}>
      <FormElement elementType={Form__Elemen__Types.FormHeader}>
        <h2 className="Heading Text--highlight">CONTACT US</h2>
      </FormElement>
      <FormError formState={formState} />
      <FormElement elementType={Form__Elemen__Types.FormGroup}>
        {groupInputs.map(({ validation, ...item }: ContactInputProps) => {
          return (
            <FormElement key={item.name}>
              <FormTextInput
                {...item}
                value={getContactState(item.name)}
                onFocus={(e: InputFocusEvent) =>
                  handleOnFocusEvent(e, initialFormState, setFormState)
                }
                onChange={(e: InputChangeEvent) => {
                  updateContactState(item.name, e.target.value);
                }}
              />
            </FormElement>
          );
        })}
      </FormElement>
      <FormElement>
        <FormTextArea
          label={messageInput.label}
          name={messageInput.name}
          value={getContactState(messageInput.name)}
          onFocus={(e: InputFocusEvent) =>
            handleOnFocusEvent(e, initialFormState, setFormState)
          }
          onChange={(e: InputChangeEvent) => {
            updateContactState(messageInput.name, e.target.value);
          }}
        />
      </FormElement>
      <FormSubmit isFull isLoading={formState.isButtonLoading}>
        Login
      </FormSubmit>
    </Form>
  );
};
