import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardFrom';


const stripePromise = loadStripe('pk_test_51IeG02KMEmcSDqqABJ4kYjJh9CUUX39ked3idcOwR86aTyvGLgiks9zpdn0CXTWKr0ImHOydPHgGN5P1y3yGvzhf009rZxRa2L');

const ProcessPayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm handlePayment={handlePayment} />
        </Elements>
    );
};

export default ProcessPayment;