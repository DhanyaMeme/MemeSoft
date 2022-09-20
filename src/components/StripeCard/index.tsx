import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { fetchData } from "../../services/axios";
import { paymentService } from "../../services/axiosServices";
import {
  Form,
  FormElement,
  FormSubmit,
  FormTextInput,
} from "../../ui-kits/Form";
import { CARD_OPTIONS, ErrorMessage } from "./Elements";
import { ICustomer, IPricingData } from "../../redux/slices/nav/nav.type";
import "./Style.scss";
import { Form__Elemen__Types } from "../../ui-kits/Form/FormElements/FormElement";
import useObjectState from "../../custom-hooks/useObjectState";
import { initialFormState } from "../../models/constants";
import { IFormState } from "../../models/interfaces";
import { FormError } from "../Auth/FormError";

interface IProps {
  selectedPricing: IPricingData;
  customer: ICustomer;
}

export const StripeCard: FC<IProps> = (props: IProps) => {
  const { selectedPricing, customer } = props;

  const stripe = useStripe();
  const elements = useElements() as any;
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const currency = selectedPricing.fee.replace(/[^a-zA-Z]+/g, "");
  const amount = parseInt(selectedPricing.fee);
  const {
    obj: formState,
    update: updateFormState,
    setObj: setFormState,
  } = useObjectState(initialFormState as IFormState<string>);

  const fetchClientSecret = async () => {
    try {
      const response = (await fetchData({
        ...paymentService.stripePay,
        params: {
          amnt: amount,
          currency: currency,
          method: "card",
        },
      })) as any;
      const responseData = await response.data;
      setClientSecret(responseData.client_secret);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    if (clientSecret) {
      setFormState({ ...formState, isButtonLoading: true });

      const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: customer.companyname,
          },
        },
      });

      console.log(paymentResult);

      setFormState({ ...formState, isButtonLoading: false, errors: "" });

      if (paymentResult.error) {
        alert(paymentResult.error.message);
        setFormState({
          ...formState,
          helperText: paymentResult.error.message || " Payment Failed",
          submitSuccess: false,
          isButtonLoading: false,
        });
      } else {
        if (paymentResult.paymentIntent.status === "succeeded") {
          setFormState({
            ...formState,
            helperText: "Payment successful",
            submitSuccess: true,
            isButtonLoading: false,
          });

          // onSuccess(paymentResult.paymentIntent.id);
          // navigate("/orderconfirm");
        }
      }
    }
  };

  useEffect(() => {
    fetchClientSecret();
  }, []);

  return (
    <Form onSubmit={handleSubmit}>
      <FormElement elementType={Form__Elemen__Types.FormHeader}>
        <h2 className="Heading Text--highlight">SUBSCRIBE</h2>
      </FormElement>
      <FormError formState={formState} />
      <FormElement>
        <FormTextInput
          label="Company Name"
          type="text"
          placeholder={customer?.companyname}
          disabled={true}
        />
      </FormElement>
      <FormElement>
        <FormTextInput
          label="Email"
          type="email"
          placeholder={customer?.email}
          disabled={true}
        />
      </FormElement>
      <FormElement>
        <FormTextInput
          label="Phone"
          type="tel"
          placeholder={customer?.phone}
          disabled={true}
        />
      </FormElement>
      <FormElement>
        <fieldset className="FormGroup">
          <CardElement
            options={CARD_OPTIONS as any}
            onChange={onchange as any}
          />
        </fieldset>
      </FormElement>
      <FormSubmit
        disabled={!stripe && !clientSecret}
        isLoading={formState.isButtonLoading}
        isFull
      >
        {`PAY INR ${1000}`}
      </FormSubmit>
    </Form>
  );
};
