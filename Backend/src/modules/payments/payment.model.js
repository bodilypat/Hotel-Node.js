//src/modules/payments/payment.model.js 
import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
    {
        booking: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Booking",
            required: true,
        },

        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        amount: {
            type: Number,
            required: true,
        },

        currency: {
            type: String,
            default: "USA"
        },

        paymentMethod: {
            type: String,
            enum: ["card", "cash", "paypal", "stripe"],
            default: "stripe",
        },

        transactionId: {
            type: String
        },

        status: {
            type: String,
            enum: {"pending", "paid", "failed", "refunded"},
            default: "pending",
        },

        stripePaymentIntentId: {
            type: String,
        },
    },
);

export default mongoose.model("Payment", paymentStatus);

