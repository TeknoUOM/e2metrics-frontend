import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import OutlinedInput from "@mui/material/OutlinedInput";
import { TextField } from "@material-ui/core";
import { InputAdornment } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";

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
      <CardElement />

      <TextField
        type="text"
        placeholder="Full Name"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PersonIcon />
            </InputAdornment>
          ),
          disableUnderline: true,
        }}
      />
      <TextField
        type="email"
        placeholder="Email"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          ),
          disableUnderline: true,
        }}
      />
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
