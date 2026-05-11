//src/modules/payments/stripe.service.js 
import Stripe from "stripe";
import env from "../../config/env.js";

const stripe = new Stripe(env.STRIPE_SECRET_KEY);

export const createPaymentIntent = async ({
    amount,
    currency ="usd",
}) => {
    const paymentIntent = await stripe.paymentIntents.create({
        amount: amount * 100,
        currency,
        payment_method_types: ["card"],
    });

    return paymentIntent;
};

export default stripe;

