//src/modules/payments/payment.controller.js 
import * as paymentService from "./payment.service.js"; 

export const createPayment = async (
    req,
    res,
    next
) => {
    try {
        const result = 
            await paymentService.createPaymentService({
                booking: req.body.booking,
                user: req.body.amount,
                currency: req.body.currency,
            });

        res.status(201).json({
            success: true,
            message: "Payment initialed successfully",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

export const getPayment = async (
    req,
    res,
    next
) => {
    try {
        const payments = 
            await paymentService.getPaymentService();

        res.status(200).json({
            success: true,
            data: payments,
        });
    } catch (error) {
        next(error);
    }
};

export const getPayment = async (
    req,
    res,
    next 
) => {
    try {
        const payment = 
            await paymentService.getPaymentService(
                req.params.id
            );
        
        res.status(200).json({
            success: true,
            data: payment,
        });
    } catch (error) {
        next(error);
    }
};

export const updatePaymentStatus = async (
    req,
    res,
    next
) => {
    try {
        const payment =
            await paymentService.updatePaymentStatusService(
                req.params.id,
                req.body.status
            );

        res.status(200).json({
            success: true,
            message: "Payment updated successfully",
            data: payment
        });
    } catch (error) {
        next(error);
    }
};

