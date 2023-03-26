import React from "react";
import "bulma-switch/dist/css/bulma-switch.min.css";
import "./PaymentPage.css";
import Checkout from "./Checkout";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Payment from "./Payment";

const initialOptions = {
  "client-id":
    "AT-Rj6Oh2btsnI2uFgdaT9Lx_9TBFPdWxvvN19HhapgM_L3FTsGtqeM_wjHY0SS8YzsPonUFnBMdQrG7",
  currency: "USD",
  intent: "capture",
  locale: "en_US",
};

const PaymentPage = () => {
  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="columns">
          <div className="column mx-6">
            <div className="card payment-deatils-card">
              <div className="card-content">
                <div className="content">
                  <div className="is-flex is-justify-content-space-between">
                    <p className="title is-4">Basic Plan</p>
                    <p className="title is-4"> $55/mo</p>
                  </div>
                  <div className="field">
                    <input
                      id="switchRoundedOutlinedDefault"
                      type="checkbox"
                      name="switchRoundedOutlinedDefault"
                      className="switch is-rounded is-outlined is-success"
                    />
                    <label htmlFor="switchRoundedOutlinedDefault">
                      Pay Annually
                    </label>
                  </div>
                  <hr />
                  <div className="is-flex is-justify-content-space-between">
                    <p>Sub total</p>
                    <p> $55/mo</p>
                  </div>
                  <hr />
                  <div className="is-flex is-justify-content-space-between">
                    <p className="title is-4">Total due today</p>
                    <p> $55/mo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column payment-card">
            <Payment />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentPage;
