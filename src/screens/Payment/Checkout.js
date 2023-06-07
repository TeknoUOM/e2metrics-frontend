import React from "react";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { roles } from "../../common/constant";
import axios from "axios";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

const Checkout = ({ plan, amount, basis }) => {
  const [{ options, isPending }] = usePayPalScriptReducer();
  const history = useHistory();
  const userId = sessionStorage.getItem("userId");

  const onCreateOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          description: plan + " " + basis + " subscription",
          amount: {
            value: amount,
          },
        },
      ],
    });
  };

  const onApproveOrder = (data, actions) => {
    actions.order
      .capture()
      .then((details) => {
        sessionStorage.setItem("role", roles[plan]);
        //change user group on asgardeo
        axios
          .put(
            `http://localhost:8080/user/changeUserGroup?userId=${userId}&groupName=${plan}`
          )
          .then((res) => {
            //save payment
            axios
              .post(`http://localhost:8080/payment/savePayment`, {
                timestamp: details.create_time.substring(
                  0,
                  details.create_time.length - 1
                ),
                id: details.id,
                userId: userId,
                amount: {
                  value: parseFloat(details.purchase_units[0].amount.value),
                  currency_code: details.purchase_units[0].amount.currency_code,
                },
                subscription: plan,
                basis: basis,
              })
              .then((res) => {
                Swal.fire({
                  icon: "success",
                  title: "Done",
                  text: "Payment Successfully Done!",
                });
                history.push("/dashboard");
              })
              .catch((e) => {
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "Something went wrong!",
                });
                console.log(e);
              });
          })
          .catch((e) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
            });
            console.log(e);
          });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const onError = (data, actions) => {};

  return (
    <div className="checkout">
      {isPending ? (
        <p>LOADING...</p>
      ) : (
        <>
          <PayPalButtons
            style={{ layout: "vertical" }}
            createOrder={(data, actions) => onCreateOrder(data, actions)}
            onApprove={(data, actions) => onApproveOrder(data, actions)}
            onError={onError}
          />
        </>
      )}
    </div>
  );
};

export default Checkout;
