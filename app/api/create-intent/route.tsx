import { NextResponse } from "next/server";
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2024-06-20',
    typescript:true
});
export async function POST(request: any) {
    const data: any = await request.json();
    const amount = data.amount;

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: Number(amount) * 100,
            currency: "USD"
        })
        return NextResponse.json(paymentIntent.client_secret, {status:200})
    } catch (error: any) {
        return new NextResponse(error, {
            status: 400
        })
    }
}