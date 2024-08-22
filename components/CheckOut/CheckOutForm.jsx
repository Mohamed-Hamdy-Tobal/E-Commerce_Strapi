"use client"
import { CartProvider } from '@/context/components/CartProvider';
import { useOrders } from '@/utils/useOrders';
import { useUser } from '@clerk/nextjs';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { useContext, useState } from 'react';

const CheckoutForm = ({amount}) => {

    const { cart, setCart } = useContext(CartProvider)
    const user = useUser()

    const stripe = useStripe();
    const elements = useElements();

    const [loading, setLoading] = useState()
    const [errorMessage, setErrorMessage] = useState()
    const { addOrder } = useOrders()

    const handleAddOrder = async () => {
        try {
            await addOrder(amount)
            console.log("Make Order")
        } catch (error) {
            console.error("Failed to Make Order", error)
        }
    }

    const sendEmail = async () => {
        const res = await fetch("api/send-email", {
            method: "POST",
        });
    }
    
    const handleSubmit = async (event) => {
        handleAddOrder()
        sendEmail()
        // We don't want to let default form submission happen here,
        // which would refresh the page.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js hasn't yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        const handleError = (error) => {
            setLoading(false)
            setErrorMessage(error.message)
        }

        const { error: submitError } = await elements.submit()
        if (submitError) {
            handleError(submitError)
            return
        }

        const res = await fetch("api/create-intent", {
            method: "POST",
            body: JSON.stringify({
                amount: amount,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!res.ok) {
            handleError(new Error('Failed to create payment intent'));
            return;
        }

        const clientSecret = await res.json(); // Extract JSON data only once

        console.log("res:", clientSecret); // Log the parsed JSON
    

        const result = await stripe.confirmPayment({
            //`Elements` instance that was used to create the Payment Element
            clientSecret,
            elements,
            confirmParams: {
                return_url: "http://localhost:3000/payment-confirm",
            },
        });

        if (result.error) {
            // Show error to your customer (for example, payment details incomplete)
            console.log(result.error.message);
        } else {
            console.log("Good Payment!")
            localStorage.removeItem("totalPrice")
        }
    };

    return (
        <div className='py-10'>
            <form onSubmit={handleSubmit}>
                <PaymentElement />
                <button
                    disabled={!stripe}
                    className="block  mt-5 rounded bg-primary w-full px-5 py-3 text-sm text-gray-100 transition hover:bg-primary/80 disabled:bg-primary/30"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default CheckoutForm;