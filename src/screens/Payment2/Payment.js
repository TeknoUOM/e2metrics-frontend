import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Checkout from "./Checkout";

const Payment = ({ plan, amount, basis }) => {
  const [clientSecret, setClientSecret] = useState("");
  const stripePromise = loadStripe(
    "pk_test_51MiYQlFPp8AJRpqLWAFZQKjpw1N5uTzCS6E6ycnl1jJ8PsaEcrVpkXYQOrVKNXxYs1jjR6UQ8IeT3AlpGQaruAYB00MO7wbmQT"
  );
  return (
    <Elements stripe={stripePromise}>
      <Checkout />
    </Elements>
  );
};

export default Payment;
