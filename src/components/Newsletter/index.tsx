import { useState } from "react";
import useObjectState from "../../custom-hooks/useObjectState";
import { initialFormState } from "../../models/constants";
import { IFormState } from "../../models/interfaces";
import { InputChangeEvent, InputFocusEvent } from "../../models/types";
import { Container } from "../../ui-kits/Container";
import { Form, FormElement, FormTextInput } from "../../ui-kits/Form";
import { Form__Elemen__Types } from "../../ui-kits/Form/FormElements/FormElement";
import {
  BUTTON_TYPE_CLASSES,
  TextButton,
} from "../../ui-kits/TextButton/TextButton.component";
import { PageContentFitScreen } from "../../ui-kits/Wrappers/PageContent.styles";
import { IValidation, validationRules } from "../../utils/Validation";
import { FormError } from "../Auth/FormError";
import "./Style.scss";

export const Newsletter = () => {
  const [email, setEmail] = useState<string | null>(null);

  const {
    obj: formState,
    update: updateFormState,
    setObj: setFormState,
  } = useObjectState(initialFormState as IFormState<string>);

  const validation: IValidation[] = [
    { rule: validationRules.email },
    { rule: validationRules.required },
  ];

  const handleOnchange = (e: InputChangeEvent) => {
    setEmail(e.target.value);
  };

  const handleOnFocusEvent = (e: InputFocusEvent): void => {
    e.preventDefault();
    setFormState({
      ...initialFormState,
      errors: "",
    });
  };

  const handleValidate = () => {
    let error: string = "";
    let isValid: boolean = true;
    validation.forEach((vRule) => {
      const errorMessage = vRule!.rule(email, "Email", vRule!.args);
      if (errorMessage.length) {
        error = errorMessage;
        isValid = false;
      }
    });
    updateFormState("errors", error);
    return isValid;
  };

  const handleSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    const isValid = handleValidate();
    if (isValid) {
    }
  };

  return (
    <div className="Newsletter">
      <Container>
        <Form classname="Newsletter__Form" onSubmit={handleSubmit}>
          <FormElement elementType={Form__Elemen__Types.FormHeader}>
            <h1 className="Heading">Sign Up for Newsletter</h1>
          </FormElement>
          <FormError formState={formState} />
          <FormTextInput
            type="email"
            name="email"
            placeholder="Email"
            className="Newsletter__Input"
            onChange={handleOnchange}
            onFocus={handleOnFocusEvent}
            value={email || ""}
          />
          <TextButton
            className="Newsletter__Submit"
            buttonType={BUTTON_TYPE_CLASSES.transparent}
            isFull
          >
            SUBSCRIBE
          </TextButton>
        </Form>
      </Container>
    </div>
  );
};
