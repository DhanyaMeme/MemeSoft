import { FC } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { fetchData } from "../../services/axios";
import { paymentService } from "../../services/axiosServices";
import {
  Form,
  FormElement,
  FormSubmit,
  FormTextInput,
} from "../../ui-kits/Form";
import { CARD_OPTIONS } from "./Elements";
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
  const currency = selectedPricing.fee.replace(/[^a-zA-Z]+/g, "");
  const amount = parseInt(selectedPricing.fee);
  const {
    obj: formState,
    update: updateFormState,
    setObj: setFormState,
  } = useObjectState(initialFormState as IFormState<string>);

  const updateTransaction = async (id: string) => {
    const data = {
      ...selectedPricing,
      customerid: customer.customerid,
      paymentmode: "card",
      paymentstatus: "success",
      status: "active ",
      tnxid: id,
    };
    try {
      const response = await fetchData({
        ...paymentService.updateTransaction,
        params: data,
      });

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    // Creating Payment Intent

    setFormState({
      ...formState,
      helperText: "Creating payment intent...",
      submitSuccess: true,
    });

    const { client_secret } = await fetchData({
      ...paymentService.stripePay,
      params: {
        amnt: amount,
        currency: currency,
        method: "card",
      },
    }).then((res: any) => {
      return res.data;
    });

    // Confirm the payment on client

    if (client_secret) {
      const paymentResult = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: customer.companyname,
          },
        },
      });

      if (paymentResult.error) {
        setFormState({
          ...formState,
          helperText: paymentResult.error.message || " Payment Failed",
          submitSuccess: false,
          isButtonLoading: false,
        });
      }
      if (paymentResult?.paymentIntent?.status === "succeeded") {
        setFormState({
          ...formState,
          helperText: "Payment successful",
          submitSuccess: true,
          isButtonLoading: false,
        });
      }
    }
  };

  const handleOnchange = () => {
    setFormState(initialFormState as IFormState<string>);
  };

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
            onChange={handleOnchange}
          />
        </fieldset>
      </FormElement>
      <FormSubmit
        disabled={!stripe}
        isLoading={formState.isButtonLoading}
        isFull
      >
        {`PAY INR ${1000}`}
      </FormSubmit>
    </Form>
  );
};
