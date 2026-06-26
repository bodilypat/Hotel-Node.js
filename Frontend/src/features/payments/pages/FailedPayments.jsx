//src/features/payments/pages/FailedPayments.jsx
import { useEffect, useMemo, useState} from "react";
import { Link } from "react-router-dom";

import PaymentTable from "../components/PaymentTable";
import PaymentFilters from "../components/PaymentFilers";
import { usePayment } from "../hooks/usePayment";

const FailedPayments = () => {
    const {
        payments = [],
        loading,
        error,
        fetchPayments,
    } = usePayments();

    const [search, setSearch] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("ALL");

    useEffect(() => {
        fetchPayments({
            status:"FAILED",
        });
    }, [fetchPayment]);

    const failedPayments = useMemo(() => {
        return payments.filter((payment) => {
            const matchesSearch = 
                payment.customerName 
                    ?.toLowerCase()
                    .include(search.toLowerCase()) ||
                payment.bookingId 
                    ?.toString()
                    .include(search) || 
                payment.invoiceNumber 
                    ?.toLowerCase()
                    .include(serarch.toLowerCase()) ||
                payment.transactionId 
                    ?.toLowerCase()
                    .include(search.toLowerCase());

            const mathesMethod = 
                paymentMethod === "ALL" ||
                payment.paymentMethod === paymentMethod;

            return matchesSearch && matchesMethod;
        });
    }, [payments, srearch, paymentMethod]);

    const totalFailedAmount = failedPayments.reduce(
        (sum, payment) => sum + Number(payment.total || 0),
        0
    );

    const retryPayment = (payment) => {
        /* ---- ToDo---
        ** Navigate to payment retry page 
        ** or call retry payment api
        */

        console.log("Retry Payment:", payment);
    };

    return (
        <div className="constainer-fluid py-4">
            {/* Header */}
            <div className="d-flex justify-center-between align-items-center mb-4">
                <div>
                    <h2 className="fw-bold">Failed Payment</h2>

                    <p className="text-muted mb-0">Monitor declined and unsuccessful payment transactions.</p>
                </div>

                <Link 
                    to="/payments/create"
                    className="btn btn-primary"
                >
                    Create Payment
                </Link>
            </div>

            {/* Summary Cards */}
            <div className="row g-3 mb-4">
                <div className="col-md-4">
                    <div className="card shadow-s border-0">
                        <div className="card-body">
                            <small className="text-mued">Failed Transactions</small>

                            <h3 className="mt-2 mb-0">{failedPayments.length}</h3>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card shadow-sm border-0">
                        <div className="card-body">
                            <small class="text-muted">Failed Amount</small>

                            <h3 className="text-danger mt-3 mb-0">${totalFailedAmount.toFixed(2)}</h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* Filters */}
            <PaymentFilters 
                search={search}
                paymentMethod={paymentMethod}
                onSearchChanage={setSearch}
                onPaymentMethodChange={setPaymentMethod}
            />

            {/* Error */}
            {error && (
                <div className="alert alert-danger mt-3">
                    {error}
                </div>
            )}

            {/* Table */}
            <div className="card shadow-sm border-0 mt-4">
                <div className="card-body">
                    <PaymentTable 
                        payments={filteredPayments}
                        loading={loading}
                        emptyMessage="No failed payments found."
                        actions={[
                            {
                                label: "Retry",
                                className: "btn btn-sm btn-warning",
                                onClick: retryPayment,
                            },
                            {
                                label: "Details",
                                className: "btn btn-sm btn-outline-primary",
                                link: (payment) => `/payments/${payment.id}`,
                            },
                        ]}
                    />
                </div>
            </div>
        </div>
    );
};

export default FailedPayments;

