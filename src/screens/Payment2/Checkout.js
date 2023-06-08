import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

const Checkout = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/dashboard",
      },
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  return (
    <form className="p-6 " onSubmit={handleSubmit}>
      <div className="control has-icons-left has-icons-right">
        <CardElement />
      </div>

      <div class="control has-icons-left has-icons-right">
        <input
          class="input is-success"
          type="text"
          placeholder="Cardholder Name"
          value=""
        />
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-check"></i>
        </span>
      </div>
      {/*<p class="help is-success">This username is available</p>*/}
      <div class="control has-icons-left has-icons-right">
        <input
          class="input is-danger"
          type="email"
          placeholder="Email"
          value=""
        />
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-exclamation-triangle"></i>
        </span>
      </div>
      <button
        className="button gradient-button"
        disabled={!stripe}
        type="submit"
      >
        Pay
      </button>
    </form>
  );
};

export default Checkout;
