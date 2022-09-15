import React from "react";
import { useAuth } from "../../context/AuthContext";
import useObjectState from "../../custom-hooks/useObjectState";
import { initialFormState } from "../../models/constants";
import { IFormState } from "../../models/interfaces";
import {
  InputChangeEvent,
  InputFocusEvent,
  OnSubmitEvent,
} from "../../models/types";
import {
  Form,
  FormAlert,
  FormElement,
  FormTextArea,
  FormTextInput,
} from "../../ui-kits/Form";
import { Form__Elemen__Types } from "../../ui-kits/Form/FormElements/FormElement";
import { IF } from "../../ui-kits/IF";
import { TextButton } from "../../ui-kits/TextButton/TextButton.component";
import { isEmpty } from "../../utils/script";
import {
  ContactInputProps,
  contactInputs,
  IContactFormState,
  initialContactState,
} from "./types";

export const ContactForm = () => {
  const groupInputs = contactInputs.slice(0, contactInputs.length - 1);
  const message = contactInputs[contactInputs.length - 1];

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

  const handleOnsubmit = async (e: OnSubmitEvent) => {
    e.preventDefault();
    const isValid = handleFormValidate(
      contactInputs,
      contactState,
      updateFormState
    );
    if (isValid) {
    }
  };

  return (
    <Form classname="Form" onSubmit={handleOnsubmit}>
      <FormElement elementType={Form__Elemen__Types.FormHeader}>
        <h2 className="Heading Text--highlight">CONTACT US</h2>
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
          label={message.label}
          name={message.name}
          value={getContactState(message.name)}
          onFocus={(e: InputFocusEvent) =>
            handleOnFocusEvent(e, initialFormState, setFormState)
          }
          onChange={(e: InputChangeEvent) => {
            updateContactState(message.name, e.target.value);
          }}
        />
      </FormElement>
      <TextButton isFull>Send message</TextButton>
    </Form>
  );
};
