import React from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Checkout from "./Checkout";

const initialOptions = {
  "client-id":
    "AW59l_XjymaJXaL1Rd8HseIIfQZB-sf1V-R11AT5I52ANTD_bFzXdFCSifhCek8Wu-JING1RhHFjyNbK",
  currency: "USD",
  intent: "capture",
};

const Payment = ({ plan, amount, basis }) => {
  return (
    <>
      <PayPalScriptProvider options={initialOptions}>
        <Checkout plan={plan} amount={amount} basis={basis} />
      </PayPalScriptProvider>
      x
    </>
  );
};

export default Payment;
