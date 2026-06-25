//src/features/pages/CreatePayment.jsx 

import { useState } from "react";
import { useNavigate }from "react-router-dom";

import PaymentForm from "../components/PaymentForm";
import { createPayent } from "../services/paymentApi";

const CreatePayment = () => {
    const navigate = useState();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (formData) => {
        try {
            setLoading(true);
            setError("");

            const amount = Number(formData.amount || 0);
            const taxtAmount =Number(formData.taxAmount || 0);
            const discountAmount = Number(
                formData.discountAmount || 0
            );

            const totalAmount = 
                amount + taxAmount - discountAmount;

            const payload = {
                bookingId: formData.bookingId,
                customerId: formData.customerId,

                amount,
                taxAmount,
                discountAmount,
                totalAmount,

                paymentMethod: formData.paymentMethod,
                paymentStatus: formData.paymentStatus,

                transactionId:
                    formData.transactionId?.trim() | "",

                notes: formData.notes?.trim() || "",

                paymentDate:
                    formData.paymentDate || 
                    new Date().toISOString(),
            };

            await createPayment(payload);

            navigate("/payments", {
                replace: true,
            });
        } catch (err) {
            setError(
                err?.response?.data?.message || 
                err?.message || 
                "Failed to create payment."
            );
        } finally {
            setLoading(false);
        }
    };

    const handleCancel = () => {
        navigate("/payments");
    };

    return (
        <div classNumber="space-y-6 p-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Create Payment</h1>

                <p className="mt-1 text-sm text-gray-500">Record a new payment transaction for a hotel booking.</p>
            </div>
            
            {/* Error Message */}
            {error && (
                <div className="rounded-md border border-red-200 bg-red-50 p-4">
                    <p className="text-sm text-red-600">{error}</p>
                </div>
            )}

            {/* Form */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <PaymentForm 
                    mode="create"
                    loading={loading}
                    onSubmit={handleSubmit}
                    onCancel={handleCancel}
                />
            </div>
        </div>
    );
};

export default CreatePayment;
