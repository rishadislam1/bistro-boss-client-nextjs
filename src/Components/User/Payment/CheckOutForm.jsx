"use client";

import { useAddPaymentMutation } from "@/redux/features/payment/paymentApi";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import Swal from "sweetalert2";

const CheckOutForm = ({ amount }) => {
  const mainAmount = parseFloat(amount);
  const [clientSecret, setClientSecret] = useState('');

  const stripe = useStripe();
  const elements = useElements();
const [addPayment,{data:paymentData, isLoading}] = useAddPaymentMutation();
  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error.message}`,
      });
    } else {
        const data= {price: mainAmount}
        addPayment(data);
    //   console.log("[PaymentMethod]", paymentMethod);
    }
  };
if(!isLoading && paymentData){
    setClientSecret(paymentData.clientSecret)
}
  return (
    <form onSubmit={handleSubmit} className="md:mx-20">
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        type="submit"
        disabled={!stripe}
        className="mt-10 btn btn-info text-white"
      >
        Pay
      </button>
    </form>
  );
};

export default CheckOutForm;
