//src/modules/payments/payment.service.js 
import * as paymentRepository from "./payment.repository.js";
import * as stripeService from "./stripe.service.js";

export const createPaymentService = async ({
    booking,
    user,
    amount,
    currency,
}) => {
    const paymentIntent = 
        await stripeService.createPaymentIntent({
            amount,
            currency,
        });

    const payment = 
        await paymentRepository.createPayment({
            booking,
            user,
            amount,
            currency,
            transactionId: paymentIntent.id,
            stripePaymentIntentId: paymentIntent.id,
            status: "pending",
            paymentMethod: "stripe",
        });

    return {
        payment,
        clientSecret: paymentIntent.client_secret,
    };
};

export const getPaymentService = async () => {
    return paymentRepository.getPaymentById(id);
};

export const updatePaymentStatusService = async (
    id,
    status
) => {
    return paymentRepository.updatePayment(id, {
        status,
    });
};

