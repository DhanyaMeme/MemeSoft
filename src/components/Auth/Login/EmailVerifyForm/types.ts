import { InputType } from "../../../../models/enums";
import { InputBaseProps } from "../../../../models/interfaces";
import { validationRules } from "../../../../utils/Validation";

export type IForgotPasswordState = {
  email: string;
};

export type ForgotPasswordInput = InputBaseProps<IForgotPasswordState>;

export const initialForgotPasswordState: IForgotPasswordState = {
  email: "",
};

export const ForgotPasswordInputs: ForgotPasswordInput[] = [
  {
    name: "email",
    label: "Email",
    type: InputType.email,
    validation: [
      { rule: validationRules.email },
      { rule: validationRules.required },
    ],
  },
];
