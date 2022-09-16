import React from "react";
import { IFormState } from "../../../models/interfaces";
import { FormAlert, FormElement } from "../../../ui-kits/Form";
import { IF } from "../../../ui-kits/IF";
import { isEmpty } from "../../../utils/script";

interface IProps<T> {
  formState: IFormState<T>;
}

export const FormError = <T extends Object>(props: IProps<T>) => {
  const { formState } = props;

  return (
    <IF
      condition={!isEmpty(formState.helperText) || !isEmpty(formState.errors)}
    >
      <FormAlert
        isError={!formState.submitSuccess}
        isSuccess={formState.submitSuccess}
        classname="u-h6 Heading"
      >
        {formState.helperText ||
          (formState.errors && Object.values(formState.errors)[0])}
      </FormAlert>
    </IF>
  );
};
