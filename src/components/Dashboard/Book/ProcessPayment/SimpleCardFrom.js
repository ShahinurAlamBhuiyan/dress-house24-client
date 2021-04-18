import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import React, { useState } from 'react'
// import { useHistory } from 'react-router';

const SimpleCardForm = ({handlePayment}) => {
  // const history = useHistory();
  const stripe = useStripe();
  const elements = useElements();

  const [ paymentError, setPaymentError ] = useState(null)
  const [ paymentSuccess, setPaymentSuccess ] = useState(null)
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const handleChange = (event) => {
    
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty.length);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message)
      setPaymentSuccess(null)
    } else {
      
      setSucceeded(true);
      setProcessing(false);
      setPaymentError(null);
      setPaymentSuccess(paymentMethod.id);
      handlePayment(paymentMethod.id);
      // history.push("/dashboard");
    }
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <CardElement onChange={handleChange}  />
        <button
          disabled={processing || disabled || succeeded}
          className="btn-size btn btn-danger mt-3"
          type="submit"
        >
          <span>{processing ? <p>Processing</p> : "Pay"}</span>
        </button>
      </form>
    {
        paymentError && <p className='text-center' style={{color:'red'}}>{paymentError}</p>
    }
    {
        paymentSuccess && <p className='text-center' style={{color:'green'}}>Your payment is successfully</p>
    }
    </div>
  );
};

export default SimpleCardForm;