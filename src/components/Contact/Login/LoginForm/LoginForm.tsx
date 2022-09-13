import {
  Form,
  FormElement,
  FormHint,
  FormPasswordInput,
  FormSubmit,
  FormTextInput,
} from "../../../../ui-kits/Form";
import { Form__Elemen__Types } from "../../../../ui-kits/Form/FormElements/FormElement";
import { LoginFormInput, LoginFormInputs } from "./LoginFormInputs";

export const LoginForm = () => {
  return (
    <Form>
      <FormElement elementType={Form__Elemen__Types.FormHeader}>
        <h1 className="Heading Text--highlight">LOGIN</h1>
      </FormElement>
      {LoginFormInputs.map(({ validation, ...item }: LoginFormInput) => {
        const Tag: any =
          item.label === "Password" ? FormPasswordInput : FormTextInput;
        return (
          <FormElement key={item.name}>
            <Tag
              {...item}
              // value={getloginState(item.name)}
              // onFocus={(e: InputFocusEvent) =>
              //   handleOnFocusEvent(e, initialFormState, setFormState)
              // }
              // onChange={(e: InputChangeEvent) => {
              //   updateloginState(item.name, e.target.value);
              // }}
            />
          </FormElement>
        );
      })}

      <div
        className="Form__HelpText Text--alignRight Text--subdued Link Link--primary"
        // onClick={() => handleLoginPage(LoginPage.ForgotPassword)}
      >
        Lost your password?
      </div>

      <FormSubmit isFull>LOGIN</FormSubmit>

      <div className="OR__Seperator">OR</div>

      <FormHint isCenter>
        <span className="Text--subdued">Don't have an account ? </span>
        &nbsp;
        <a href="/auth/register" className="Link Link--secondary">
          Create one
        </a>
      </FormHint>
    </Form>
  );
};
