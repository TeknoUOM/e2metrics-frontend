import React from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Checkout from "./Checkout";

const initialOptions = {
  "client-id":
    "AW59l_XjymaJXaL1Rd8HseIIfQZB-sf1V-R11AT5I52ANTD_bFzXdFCSifhCek8Wu-JING1RhHFjyNbK",
  currency: "USD",
  intent: "capture",
};

const Payment = ({ plan, amount }) => {
  return (
    <>
      <PayPalScriptProvider options={initialOptions}>
        <Checkout plan={plan} amount={amount} />
      </PayPalScriptProvider>
    </>
  );
};

export default Payment;
