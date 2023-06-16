import React, { useEffect, useRef, useState } from "react";
import "bulma-switch/dist/css/bulma-switch.min.css";
import "./PaymentPage.scss";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Payment from "./Payment";
import { useHistory, useParams } from "react-router-dom";
import NavBar from "../../common/NavBar/NavBar";
import { subscriptionPrice } from "../../common/constant";

const PaymentPage = () => {
  const { plan } = useParams();
  const [planName, setPlanName] = useState(
    plan.charAt(0).toUpperCase() + plan.slice(1)
  );
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setSubTotal(subscriptionPrice[plan]);
  }, []);

  useEffect(() => {
    setTotal(subTotal);
  }, [subTotal]);

  return (
    <>
      <NavBar />
      <section className="hero is-fullheight is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="columns">
            <div className="column mx-6">
              <div className="card payment-deatils-card">
                <div className="card-content">
                  <div className="content">
                    <div className="is-flex is-justify-content-space-between">
                      <p className="title is-4">{planName + " Plan"}</p>
                      <p className="title is-4"> ${subscriptionPrice[plan]}</p>
                    </div>
                    <hr />
                    <div className="is-flex is-justify-content-space-between">
                      <p>Sub total</p>
                      <p> ${subTotal}</p>
                    </div>
                    <hr />
                    <div className="is-flex is-justify-content-space-between">
                      <p className="title is-4">Total due today</p>
                      <p> ${total}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column payment-card">
              <Payment plan={planName} amount={total} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PaymentPage;
