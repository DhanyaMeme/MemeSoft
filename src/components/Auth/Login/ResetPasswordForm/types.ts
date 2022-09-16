import { InputType } from "../../../../models/enums";
import { InputBaseProps } from "../../../../models/interfaces";
import { validationRules } from "../../../../utils/Validation";

export type IResetPasswordState = {
  password: string;
  confirmpassword: string;
};

export type ResetPasswordInput = InputBaseProps<IResetPasswordState>;

export const initialResetPasswordState: IResetPasswordState = {
  password: "",
  confirmpassword: "",
};

export const ResetPasswordInputs: ResetPasswordInput[] = [
  {
    name: "password",
    label: "Password",
    type: InputType.password,
    validation: [
      { rule: validationRules.password },
      { rule: validationRules.required },
    ],
  },
  {
    name: "confirmpassword",
    label: "Confirm Password",
    type: InputType.password,
    validation: [{ rule: validationRules.required }],
  },
];
