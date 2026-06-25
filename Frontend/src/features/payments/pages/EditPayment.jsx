//src/features/payments/pages/EditPayment.jsx 
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import PaymentForm from "../components/PaymentForm";
import PaymentSummary from "../components/PaymentSummary";

import { usePaymentDetails } from "../hooks/usePaymentDetails";
import { updatePayment } from "../services/paymentApi";

import Loader from "../../../shared/ui/Loader";
import Card from "../../../shared/ui/Button";

import { useToast } from "../../../shared/notifications/useToast";

export default function EditPayment() {
    const { id } = useParams();
    const navigate = useNavigate();
    const toast = useToast();

    const {
        payment,
        loading,
        error,
        fetchPayments,
    } = usePaymentDetails(id);

    useEffect(() => {
        fetchPayment();
    }, [fetchPayment]);

    const handleSubmit = async (formData) => {
        try {
            await updatePayment(id, formData);

            toast.success("Payment updated successfully");

            navigate(`/payments/${id}`);
        } catch (err) {
            toast.error(
                err?.response?.data?.message || 
                "Failed to update payment"
            );
        }
    };

    if (loading) {
        return  <Loader />;
    }

    if (error) {
        return (
            <Card>
                <h2>Error loading Payment</h2>
                <p>{error}</p>

                <Button onClick={fetchPayment}>
                    Retry
                </Button>
            </Card>
        );
    }

    if (!payment) {
        return (
            <Card>
                Payment not found
            </Card>
        );
    }

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-semibold">Edit Payment</h1>

                <p className="text-gray-500">Update payment information.</p>
            </div>

            <PaymentSummary payment={payment} />

            <Card>
                <PaymentForm 
                    mode="edit"
                    initialValues={payment}
                    onSubmit={handleSubmit}
                />
            </Card>
        </div>
    );
}
