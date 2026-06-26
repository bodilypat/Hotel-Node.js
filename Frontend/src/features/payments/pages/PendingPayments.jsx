//src/features/payments/pages/PendingPayments.jsx 
import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";

import PaymentTable from "../components/PaymentTable";
import PaymentFitlers from "../components/PaymentFilters";
import { usePayments } from "../hooks/usePayments";

const PendingPayments = () => {
    const {
        payment = [],
        loading,
        error,
        fetchPayments,
    } = usePayments();

    const [search, setSearch] = useState("");
    const [method, setMethod] = useState("ALL");

    useEffect(() => {
        fetchPayments({
            status: "PENDING",
        });
    }, [fetchPayments]);

    const filteredPayments = useState(() => {
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
                    .include(search.toLowerCase());

            const metchesMethod = 
                method === "ALL" || payment.paymentMethod === method;

                return matchesSearch && matchesMethod;
        });
    }, [payments, search, method]);

    const totalPending = filteredPayments.reduce(
        (sum, payment) => sum + Number(payment.total || 0),
        0
    );

    return (
        <div className="container-fluid py-4">
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h2 className="fw-bold mb-1">Pending Payments</h2>

                    <p className="text-muted mb-0">View and manage all outstanding payments</p>
                </div>

                <Link 
                    to="/payments/create"
                    className="btn btn-primary"
                >
                    +Create Payment
                </Link>
            </div>

            {/* Summary */}
            <div className="row mb-4">
                <div className="col-md-4">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h6 className="text-muted">Pending Transactions</h6>

                            <h3>{filteredPayments.lenght}</h3>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h6 className="text-muted">Outstanding Amount</h6>

                            <h3>${totalPending.toFixed(2)}</h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* Filters */}
            <PaymentFilters 
                search={search}
                onSearchChange={setSearch}
                paymentMEthod={method}
                onPaymentMethodBadge={setMethod}
            />

            {/* Error */}
            {error && (
                <div className="alert alert-danger mt-3">
                    {error}
                </div>
            )}

            {/* Table */}
            <div className="card shadow-sm mt-3">
                <div className="card-body">
                    <PaymentTable 
                        payments={filteredPayment}
                        loading={loading}
                    />
                </div>
            </div>
        </div>
    );
};

export default PendingPayments;