import React from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Checkout from "./Checkout";

const initialOptions = {
  "client-id":
    "AT-Rj6Oh2btsnI2uFgdaT9Lx_9TBFPdWxvvN19HhapgM_L3FTsGtqeM_wjHY0SS8YzsPonUFnBMdQrG7",
  currency: "USD",
  intent: "capture",
};

const Payment = () => {
  return (
    <>
      <PayPalScriptProvider options={initialOptions}>
        <Checkout />
      </PayPalScriptProvider>
      x
    </>
  );
};

export default Payment;
