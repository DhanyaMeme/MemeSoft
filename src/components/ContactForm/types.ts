import { InputType } from "../../models/enums";
import { InputBaseProps } from "../../models/interfaces";
import { validationRules } from "../../utils/Validation";

export type IContactFormState = {
  email: string;
  name: string;
  message: string;
};

export type ContactInputProps = InputBaseProps<IContactFormState>;

export const initialContactState: IContactFormState = {
  email: "",
  name: "",
  message: "",
};

export const contactInputs: ContactInputProps[] = [
  {
    name: "name",
    label: "Name",
    type: InputType.text,
    validation: [
      { rule: validationRules.name },
      { rule: validationRules.required },
    ],
  },
  {
    name: "email",
    label: "Email",
    type: InputType.email,
    validation: [
      { rule: validationRules.email },
      { rule: validationRules.required },
    ],
  },
  {
    name: "message",
    label: "Your Messgae",
    type: InputType.text,
    validation: [{ rule: validationRules.required }],
  },
];
