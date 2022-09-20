import { FC, useState } from "react";
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
import { IPricingData } from "../../redux/slices/nav/nav.type";
import "./Style.scss";

interface IProps {
  selectedPricing: IPricingData;
}

export const StripeCard: FC<IProps> = (props: IProps) => {
  // const { name, amount, email, phoneNo, onSuccess } = props.PaymentProps;

  const { selectedPricing } = props;

  const currency = selectedPricing.fee.replace(/[^a-zA-Z]+/g, "");
  const amount = parseInt(selectedPricing.fee);

  console.log(currency, amount);

  const stripe = useStripe();
  const elements = useElements() as any;
  // const navigate = useNavigate();

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
      ...paymentService.stripePay,
      params: {
        amnt: amount,
        currency: currency,
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

   

    // if (clientSecret) {
    //   const paymentResult = await stripe.confirmCardPayment(clientSecret, {
    //     payment_method: {
    //       card: elements.getElement(CardElement),
    //       billing_details: {
    //         name: "Dhanya",
    //       },
    //     },
    //   });

    //   setProcessing(false);

    //   if (paymentResult.error) {
    //     alert(paymentResult.error.message);
    //     setError(paymentResult.error.message);
    //   } else {
    //     if (paymentResult.paymentIntent.status === "succeeded") {
    //       setPaymentMethod(paymentResult.paymentIntent as any);
    //       alert("Payment Successful!");
    //       // onSuccess(paymentResult.paymentIntent.id);
    //       // navigate("/orderconfirm");
    //     }
    //   }
    // }
  };

  return (
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

      <FormElement>
        <fieldset className="FormGroup">
          <CardElement
            options={CARD_OPTIONS as any}
            onChange={onchange as any}
          />
        </fieldset>
      </FormElement>

      {error && <ErrorMessage>{error}</ErrorMessage>}
      <FormSubmit disabled={!stripe} isFull>
        {`PAY INR ${1000}`}
      </FormSubmit>
    </Form>
  );
};
