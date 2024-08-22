"use client"

import React from 'react'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckOutForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHER_KEY);


export const CheckOutSection = () => {

    const totalPrice = Math.floor(localStorage.getItem("totalPrice"))
    console.log("totalPrice?:",totalPrice)

    const options = {
        mode:"payment",
        currency:"usd",
        amount: totalPrice
    };

    return (
        <Elements stripe={stripePromise} options={options}>
            <CheckoutForm amount={totalPrice} />
        </Elements>
    )
}
