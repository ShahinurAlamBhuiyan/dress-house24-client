import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import React, { useState } from 'react'
// import { useHistory } from 'react-router';

const SimpleCardForm = ({handlePayment}) => {
  // const history = useHistory();
  const stripe = useStripe();
  const elements = useElements();

  const [ paymentError, setPaymentError ] = useState(null)
  const [ paymentSuccess, setPaymentSuccess ] = useState(null)

  const handleSubmit = async (event) => {
    event.preventDefault();

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
      
      setPaymentError(null)
      setPaymentSuccess(paymentMethod.id)
      handlePayment(paymentMethod.id)
      // history.push('/dashboard')
    }
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
      <CardElement />
      <button  className='btn btn-danger mt-3' type="submit" disabled={!stripe}>
        Pay
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