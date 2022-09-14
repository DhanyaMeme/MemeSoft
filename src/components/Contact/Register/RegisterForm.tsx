import { InputType } from "../../../models/enums";
import {
  Form,
  FormElement,
  FormPasswordInput,
  FormSelectInput,
  FormTextInput,
} from "../../../ui-kits/Form";
import { IF } from "../../../ui-kits/IF";
import { getCountries } from "../../../mocks/Countries";
import { registerInputProps, RegisterInputs } from "./RegisterFor.types";
import { Form__Elemen__Types } from "../../../ui-kits/Form/FormElements/FormElement";

export const RegisterForm = () => {
  const getOptions = (name: string) =>
    ({
      country: getCountries(),
      state: getCountries(),
    }[name]);

  return (
    <Form>
      <FormElement elementType={Form__Elemen__Types.FormHeader}>
        <h2 className="Heading Text--highlight">Register</h2>
        <p>Please fill in the information below:</p>
      </FormElement>
      <div className="Grid"></div>
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
                <Tag {...item} />
              </IF>
              <IF condition={item.type === InputType.select}>
                <FormSelectInput
                  label={item.label}
                  name={item.name}
                  options={getOptions(item.name) ?? []}
                  onSelect={() => {}}
                />
              </IF>
            </FormElement>
          </div>
        );
      })}
    </Form>
  );
};
