import React from 'react'
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import Checkout from './Checkout';
import { PayHereButton } from 'react-payhere-button';

const initialOptions = {
  "client-id": "AT-Rj6Oh2btsnI2uFgdaT9Lx_9TBFPdWxvvN19HhapgM_L3FTsGtqeM_wjHY0SS8YzsPonUFnBMdQrG7",
  currency: "USD",
  intent: "capture",
};
 
const Payment = ()=>{
  const onSucess = (orderId: number) => console.log('onSuccess', orderId);
    const onDismissed = () => console.log('onDismissed');
    const onError = (error: Object) => console.log('onError', error);  
  return (
    <>
      <PayHereButton
        sandbox={true}
        merchant_id={"1222632"}
        onCompleted={onSucess}
        onDismissed={onDismissed}
        onError={onError}
        order_id={"ItemNo12345"}
        items={"Door bell wireles"}
        amount={100}
        currency={"LKR"}
        first_name={"Prahveen"}
        last_name={"Thiruchelvam"}
        email={"prahveent@gmail.com"}
        phone={"0771234567"}
        address={"No.1, Galle Road"}
        city={"Colombo"}
        country={"Sri Lanka"}
        options={{
          delivery_address: "No. 123, Galle road, Colombo 03",
          delivery_city: "Kollupitiya",
          delivery_country: "Sri Lanka",
          custom_1: "",
          custom_2: "",
          return_url: "/",
          cancel_url: "http://sample.com/cancel",
          notify_url: "http://sample.com/notify",
        }}
      />

      <PayPalScriptProvider options={initialOptions}>
        <Checkout />
      </PayPalScriptProvider>x
    </>
  );
  }

export default Payment;