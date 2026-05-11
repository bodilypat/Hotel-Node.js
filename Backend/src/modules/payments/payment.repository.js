//src/modules/payments/payment.repository.js 
import Payment from "./payment.model.js";

export const createPayment = async () => {
    return Payment.create(payload);
};

export const getPayments = async () => {
    return Payment.find()
        .populate("booking")
        .populate("user");
};

export const getPaymentById = async (id) => {
    return Payment.findById(id)
        .populate("booking")
        .populate("user")
};

export const updatePayment = async (id, payload) => {
    return Payment.findByIdAndUpdate(id, payload, {
        new: true,
    });
};

