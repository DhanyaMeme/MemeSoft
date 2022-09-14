import { InputType } from "../../../models/enums";
import { InputBaseProps } from "../../../models/interfaces";
import { validationRules } from "../../../utils/Validation";

export type IRegisterFormState = {
  city: string;
  companyname: string;
  companyregistartion: string;
  country: string;
  currency: string;
  email: string;
  gstregistarion: string;
  mobile: string;
  parentcompany: string;
  password: string;
  phone: string;
  state: string;
  street1: string;
  street2: string;
  website: string;
  zip: string;
};

export type registerInputProps = InputBaseProps<IRegisterFormState>;

export const initialRegisterState: IRegisterFormState = {
  email: "",
  password: "",
  phone: "",
  mobile: "",
  website: "",
  companyname: "",
  parentcompany: "",
  companyregistartion: "",
  gstregistarion: "",
  country: "",
  state: "",
  currency: "",
  city: "",
  street1: "",
  street2: "",
  zip: "",
};

export const RegisterInputs: registerInputProps[] = [
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
    name: "password",
    label: "Password",
    type: InputType.password,
    validation: [
      { rule: validationRules.password },
      { rule: validationRules.required },
    ],
  },
  {
    name: "phone",
    label: "Phone Number",
    type: InputType.number,
    validation: [
      { rule: validationRules.phone },
      { rule: validationRules.required },
    ],
  },
  {
    name: "mobile",
    label: "Alternate Number",
    type: InputType.number,
    validation: [{ rule: validationRules.phone }],
  },

  {
    name: "companyname",
    label: "Company Name",
    type: InputType.text,
    validation: [{ rule: validationRules.required }],
  },
  {
    name: "parentcompany",
    label: "Parent Company",
    type: InputType.text,
    validation: [{ rule: validationRules.required }],
  },
  {
    name: "companyregistartion",
    label: "Company Registartion",
    type: InputType.text,
    validation: [{ rule: validationRules.required }],
  },
  {
    name: "gstregistarion",
    label: "GST Registartion",
    type: InputType.text,
    validation: [{ rule: validationRules.required }],
  },
  {
    name: "country",
    label: "Country",
    type: InputType.select,
    validation: [{ rule: validationRules.required }],
  },
  {
    name: "state",
    label: "State",
    type: InputType.select,
    validation: [{ rule: validationRules.required }],
  },
  {
    name: "currency",
    label: "Currency",
    type: InputType.select,
    validation: [{ rule: validationRules.required }],
  },
  {
    name: "city",
    label: "City",
    type: InputType.text,
    validation: [{ rule: validationRules.required }],
  },
  {
    name: "street1",
    label: "Address1",
    type: InputType.text,
    validation: [{ rule: validationRules.required }],
  },
  {
    name: "street2",
    label: "Address2",
    type: InputType.text,
    validation: [{ rule: validationRules.required }],
  },
  {
    name: "zip",
    label: "Pincode",
    type: InputType.text,
    validation: [{ rule: validationRules.required }],
  },
  {
    name: "website",
    label: "Website",
    type: InputType.text,
    validation: [{ rule: validationRules.required }],
  },
];
