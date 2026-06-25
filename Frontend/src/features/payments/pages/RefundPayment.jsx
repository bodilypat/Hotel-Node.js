//src/features/payments/pages/RefundPayment.jsx 
import { useState, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { usePaymentDetails } from "../hooks/usePaymentDetails";
import { refundPayment } from "../services/paymentApi";

const REFUND_REASONS = [
    "Customer Request",
    "Duplice Payment",
    "Incorrect Amount Charged",
    "Order Cancellation",
    "Fraudulent Transaction",
    "Service Not Delivered",
    "Other"
];

const RefundPayment = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const { payment, loading, error, refetch } = usePaymentDetails(id);

    const [refundType, setRefundType] = useState("FULL");
    const [refundAmount, setRefundAmount] = useState("");
    const [reason, setReason] = useState("");
    const [notes, setNotes] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [formError, setFormError] = useState("");

    const maxRefundAmount = useMemo(() => {
        if (!payment) return 0;

        const status = payment.status?.toUpperCase();
        const amount = Number(payment.totalAmount || payment.amount || 0);

        return ["PAID", "PARTIALLY_REFUNDED"].includes(status) && amount > 0
            ? amount
            : 0;
    }, [payment]);

    const isRefundable = maxRefundAmount > 0;

    const validateForm = () => {
        setFormError("");

        if (!reason) {
            return "Please select a refund reason.";
        }

        if (refundType === "PARTIAL") {
            const amount = Number(refundAmount);

            if (!amount || amount <= 0) {
                return "Refund amount must be greater than zero.";
            }

            if (amount > maxRefundAmount) {
                return `Refund amount cannot exceed $${maxRefundAmount.toFixed(2)}.`;
            }
        }

        return "";
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationError = validateForm();

        if (validationError) {
            setFormError(validationError);
            return;
        }

        try {
            setSubmitting(true);

            const payload = {
                refundType,
                refundAmount:
                    refundType === "FULL"
                        ? maxRefundAmount
                        : Number(refundAmount),
                reason,
                notes,
            };

            await refundPayment(id, payload);

            if (refetch) {
                await refetch();
            }

            navigate(`/payments/${id}`);
        } catch (error) {
            setFormError(
                error?.response?.data?.message ||
                error?.message ||
                "Failed to process refund."
            );
        } finally {
            setSubmitting(false);
        }
    };

    if (loading) {
        return (
            <div className="flex min-h-[300px] items-center justify-center">
                <p className="text-gray-500">Loading payment details...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4">
                <h2 className="text-lg font-semibold text-yellow-700">Payment Not Found</h2>
            </div>
        );
    }

    return (
        <div className="mx-auto max-w-4xl p-6">
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold">Refund Payment</h1>
                    <p className="text-gray-500">
                        Process a refund for payment #{payment.id}
                    </p>
                </div>

                <button 
                    onClick={() => navigate(-1)}
                    className="rounded-md border px-4 py-2 hover:bg-gray-50"
                >
                    Back
                </button>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                <InfoRow 
                    label="Payment ID"
                    value={payment.id}
                />
                <InfoRow 
                    label="Invoice Number"
                    value={payment.invoiceNumber}
                />
                <InfoRow 
                    label="Customer"
                    value={payment.customerName}
                />
                <InfoRow 
                    label="Status"
                    value={payment.status}
                />
                <InfoRow 
                    label="Total Amount"
                    value={`$${Number(
                        payment.totalAmount || payment.amount || 0
                    ).toFixed(2)}`}
                />
                <InfoRow 
                    label="Available Refund"
                    value={`$${maxRefundAmount.toFixed(2)}`}
                />
            </div>

            {!isRefundable ? (
                <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4">
                    <h3 className="font-semibold text-yellow-700">Refund Not Available</h3>

                    <p className="mt-1 text-yellow-600">This payment is not eligible for refund or has already been fully refunded.</p>
                </div>
            ) : (
                <form 
                    onSubmit={handleSubmit}
                    className="rounded-xl border bg-white p-6 shadow-sm"
                >
                    <h2 className="mb-4 text-lg font-semibold">Refund details</h2>

                    {formError && (
                        <div className="mb-4 rounded-md border border-red-200 bg-red-50 p-3 text-red-700">{formError}</div>
                    )}

                    {/* Refund type */}
                    <div className="mb-5">
                        <label className="mb-2 block font-medium">Refund Type</label>

                        <div className="flex gap-6">
                            <label className="flex items-center gap-2">
                                <input  
                                    type="radio"
                                    value="FULL"
                                    checked={refundType === "FULL"}
                                    onChange={(e) => 
                                        setRefundType(e.target.value)
                                    }
                                />
                                Full Refund
                            </label>

                            <label className="flex items-center gap-2">
                                <input  
                                    type="radio"
                                    value="PARTIAL"
                                    checked={refundType === "PARTIAL"}
                                    onChange={(e) => 
                                        setRefundType(e.target.value)
                                    }
                                />
                                Partial Refund
                            </label>
                        </div>
                    </div>

                    {/* Amount */}
                    {refundType === "PARTIAL" && (
                        <div className="mb-5">
                            <label className="mb-2 block font-medium">Refund Amount</label>

                            <input 
                                type="number"
                                step="0.01"
                                min="0"
                                max={maxRefundAmount}
                                value={refundAmount}
                                onChange={(e) => 
                                    setRefundAmount(e.target.value)
                                }
                                placeholder="Enter refund amount"
                                className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    )}

                    {/* Reason */}
                    <div className="mb-5">
                        <label className="mb-2 block font-medium">Refund Reason</label>

                        <select 
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                            className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Select reason</option>

                            {REFUND_REASONS.map((item) => (
                                <option 
                                    key={item}
                                    value={item}
                                >
                                    {item}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Notes */}
                    <div className="mb-6">
                        <label className="mb-2 block font-medium">Notes</label>
                        <textarea 
                            rows={4}
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            placeholder="Add internal notes..."
                            className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Summary */}
                    <div className="mb-6 rounded-lg bg-gray-50 p-4">
                        <h3 className="mb-2 font-semibold">Refund Summary</h3>

                        <p>Amount to Refund:{" "} 
                            <strong>
                                $ 
                                {(
                                    refundType === "FULL"
                                        ? maxRefundAmount 
                                        : Number(refundAmount || 0)
                                ).toFixed(2)}
                            </strong>
                        </p>
                    </div>

                    <div className="flex justify-end gap-3">
                        <button 
                            type="button"
                            onClick={() => navigate(-1)}
                            className="rounded-md border px-4 py-2 hover:bg-gray-50"
                        >
                            Cancel
                        </button>

                        <button 
                            type="submit"
                            disabled={submitting}
                            className="rounded-md bg-red-600 px-5 py-2 text-white hover:bg-red-700 disabled:opacity-50"
                        >
                            {submitting 
                                ? "Processing..."
                                : "Process Refund"
                            }
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};
const InfoRow = ({ label, value }) => {
    return (
        <div>
            <p className="text-sm text-gray-500">{label}</p>
            <p className="font-medium">{value || "-"}</p>
        </div>
    );
};

export default RefundPayment;

