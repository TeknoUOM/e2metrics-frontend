import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Checkout from "./Checkout";

const initialOptions = {
  "client-id":
    "AW59l_XjymaJXaL1Rd8HseIIfQZB-sf1V-R11AT5I52ANTD_bFzXdFCSifhCek8Wu-JING1RhHFjyNbK",
  currency: "USD",
  intent: "capture",
};

const Payment = ({ plan, amount, basis }) => {
  const [clientSecret, setClientSecret] = useState("");
  const stripePromise = loadStripe(
    "pk_test_51MiYQlFPp8AJRpqLWAFZQKjpw1N5uTzCS6E6ycnl1jJ8PsaEcrVpkXYQOrVKNXxYs1jjR6UQ8IeT3AlpGQaruAYB00MO7wbmQT"
  );
  const options = {
    clientSecret: clientSecret,
  };
  return (
    <Elements stripe={stripePromise}>
      <Checkout />
    </Elements>
  );
};

export default Payment;
