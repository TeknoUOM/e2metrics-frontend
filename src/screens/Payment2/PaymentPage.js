import React, { useEffect, useRef, useState } from "react";
import "bulma-switch/dist/css/bulma-switch.min.css";
import "./PaymentPage.css";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Payment from "./Payment";
import { useHistory, useParams } from "react-router-dom";
import NavBar from "../../common/NavBar/NavBar";
import { subscriptionPrice } from "../../common/constant";

const PaymentPage = () => {
  const { plan } = useParams();
  const [basis, setBasis] = useState("Monthly");
  const [planName, setPlanName] = useState(
    plan.charAt(0).toUpperCase() + plan.slice(1)
  );
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);

  const handleChange = (e) => {
    if (e.target.checked) {
      setSubTotal((sub) => sub * 12);
      setBasis("Yearly");
    } else {
      setSubTotal((sub) => sub / 12);
      setBasis("Monthly");
    }
  };

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
                      <p className="title is-4">
                        {" "}
                        ${subscriptionPrice[plan]}/mo
                      </p>
                    </div>
                    <div className="field">
                      <input
                        id="switchRoundedOutlinedDefault"
                        type="checkbox"
                        name="switchRoundedOutlinedDefault"
                        className="switch is-rounded is-outlined is-success"
                        onChange={handleChange}
                      />
                      <label htmlFor="switchRoundedOutlinedDefault">
                        Pay Annually
                      </label>
                    </div>
                    <hr />
                    <div className="is-flex is-justify-content-space-between">
                      <p>Sub total</p>
                      <p> ${subTotal}/mo</p>
                    </div>
                    <hr />
                    <div className="is-flex is-justify-content-space-between">
                      <p className="title is-4">Total due today</p>
                      <p> ${total}/mo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column ">
              <div className="card payment-card">
                <div className="card-content">
                  <div className="content">
                    <Payment />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PaymentPage;
