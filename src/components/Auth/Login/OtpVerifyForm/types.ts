import { InputType } from "../../../../models/enums";
import { InputBaseProps } from "../../../../models/interfaces";
import { validationRules } from "../../../../utils/Validation";

export type ILoginOTPState = {
  otp: string;
};
export type LoginOTPInput = InputBaseProps<ILoginOTPState>;

export const initialLoginOTPState: ILoginOTPState = {
  otp: "",
};

export const LoginOTPInputs: LoginOTPInput[] = [
  {
    name: "otp",
    label: "OTP",
    type: InputType.number,
    validation: [
      { rule: validationRules.length, args: 4 },
      { rule: validationRules.required },
    ],
  },
];
