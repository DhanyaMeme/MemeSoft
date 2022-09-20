import { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import {
  CardField,
  ErrorMessage,
  Field,
  ResetButton,
  SubmitButton,
} from "./Elements";
import "./Style.scss";

import { useNavigate } from "react-router-dom";
import { fetchData } from "../../services/axios";
import { TextButton } from "../../ui-kits/TextButton/TextButton.component";
import { Form, FormElement, FormTextInput } from "../../ui-kits/Form";

export const StripeCard = () => {
  // const { name, amount, email, phoneNo, onSuccess } = props.PaymentProps;
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements() as any;
  const [error, setError] = useState<any>(null);
  const [processing, setProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<any>(null);

  const reset = () => {
    setError(null);
    setProcessing(false);
    setPaymentMethod(null);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setProcessing(true);
    setError(null);

    const response = await fetchData({
      params: {
        amnt: 100,
        currency: "INR",
        method: "card",
      },
    })
      .then((res: any) => {
        return res.data;
      })
      .catch((err) => {
        setError("Payment Failure, Try Again Later");
      });

    const clientSecret = response.client_secret;

    if (clientSecret) {
      const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: "Dhanya",
          },
        },
      });

      setProcessing(false);

      if (paymentResult.error) {
        alert(paymentResult.error.message);
        setError(paymentResult.error.message);
      } else {
        if (paymentResult.paymentIntent.status === "succeeded") {
          setPaymentMethod(paymentResult.paymentIntent as any);
          alert("Payment Successful!");
          // onSuccess(paymentResult.paymentIntent.id);
          // navigate("/orderconfirm");
        }
      }
    }
  };

  return paymentMethod ? (
    <div className="Result">
      <div className="ResultTitle" role="alert">
        Payment successful
      </div>
      <div className="ResultMessage">
        Thanks for trying Stripe Elements. we generated a PaymentMethod:{" "}
        {paymentMethod.id}
      </div>
      <ResetButton onClick={reset} />
    </div>
  ) : (
    <Form onSubmit={handleSubmit}>
      <FormElement>
        <FormTextInput
          label="Name"
          type="text"
          placeholder={"Dhanya"}
          defaultValue={"Dhanya"}
        />
      </FormElement>
      <FormElement>
        <FormTextInput
          label="Email"
          type="email"
          placeholder={"Dhanya@gmail.com"}
          defaultValue={"Dhanya@gmail.com"}
        />
      </FormElement>
      <FormElement>
        <FormTextInput
          label="Phone"
          type="tel"
          placeholder={"9498422064"}
          defaultValue={"9498422064"}
        />
      </FormElement>
      <fieldset className="FormGroup">
        <CardField
          onchange={() => {
            setError(null);
          }}
        />
      </fieldset>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <TextButton isLoading={processing} disabled={!stripe}>
        {`PAY INR ${1000}`}
      </TextButton>
    </Form>
  );
};
