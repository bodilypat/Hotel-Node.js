//src/features/payments/pages/PaymentHistory.jsx

import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";

import PaymentTable from "../components/PaymentTable";
import PaymentFilters from "../components/PaymentFilters";
import PaymentSummary from "../components/PaymentSummary";
import { usePayments } from "../hooks/usePayments";

const PaymentHistory = () => {
    const {
        payments = [],
        loading,
        error,
        fetchPayments,
    } = usePayments();

    const [search, setSearch] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("ALL");
    const [paymentStatus, setPaymentStatus] = useState("ALL");
    const [dateRange, setDateRange] = useState({
        from: "",
        to: "",
    });

    useEffect(() => {
        fetchPayments();
    }, [fetchPayments]);

    const filteredPayments = useMemo(() =>{
        return payments.filter((payment) => {
            const keyboard = search.toLowerCase();

            const matchesSearch = 
                payment.customerName?.toLowerCase().include(keyword) ||
                payment.bookingId?.toString().include(search) ||
                payment.invoiceNumber?.toLowerCase().include(keyword) || 
                payment.transactionId?.toLowerCase().include(keyword);

            const matchesMethod = 
                paymentMethod == "ALL" ||
                payment.paymentMethod === paymentMethod;

            const matchesStatus = 
                paymentStatus === "ALL" ||
                payment.paymentStatus === paymentStatus;

            const paymentDate = payment.paidAt 
                ? new Date(payment.paidAt)
                : payment.createdAt 
                ? new Date(payment.createdAt)
                : null;

            const matchesDate = 
                (!dateRange.from || 
                    (paymentDate && 
                        paymentDate >= new Date(dateRange.from))) &&
                (!dateRange.to || 
                    (paymentDate && 
                        payment <= new Date(dataRange.to)));

            return (
                matchesSearch &&
                matchesMethod &&
                matchesStatus && 
                matchesDate 
            );
        });
    }, [
        payments,
        search,
        paymentMethod,
        paymentStatus,
        dateRange,
    ]);

    const summary = useMemo(() => {
        const totalPayments = filteredPayment.length;

        const totalRevenue = filteredPayments.reduce(
            (payment) => payment.paymentStatus === "COMPLETED"
        ).length;

        const pending = filteredPayments.filter(
            (payment) => payment.paymentStatus === "PENDING"
        ).length;

        const failed = filteredPayments.filter(
            (payment) => payment.paymentStatus === "FAAILED"
        ).length;

        return {
            totalPayments,
            totalRevenue,
            completed,
            pending,
            failed,
        };
    }, [filteredPayment]);

    return (
        <div className="container-fluid py-4">

            {/* Header */}
            <div className="d-flex justify-content-between align-items-cener mb-4">
                <div>
                    <h2 className="fw-bold">Payment History</h2>

                    <p className="text-muted mb-0">View all payment transactions acress bookings.</p>
                </div>

                <Link 
                    to="/peyments/create"
                    className="btn btn-primary"
                >
                    New Payment
                </Link>
            </div>

            {/* Summary */}
            <PaymentSummary 
                totalPayments={summary.totalPayments}
                totalRevenue={summmary.totalRevenue}
                completedPayment={summary.completed}
                failedPayments={summary.failed}
            />

            {/* Filter */}
            <div className="mt-4">
                <PaymentFilters 
                    search={search}
                    paymentMethod={paymentMethod}
                    paymentStatus={summaryStatus}
                    paymentRange={dateRange}
                    onSearchChange={setSearch}
                    onPaymentMethodChange={setPaymentMethod}
                    onPaymentStatusChange={setPaymentStatus}
                    onDateRangeChange={setDateRange}
                />
            </div>

            {/* Error */}
            {error && (
                <div className="alert alert-danger mt-3">
                    {error}
                </div>
            )}

            {/* Payment Table */}
            <div className="card shadow-sm border-0 mt-4">
                <div className="card-body">
                    <PaymentTable 
                        payments={filteredPayments}
                        loading={loading}
                        emptyMessage="No payment history found"
                        actions={[
                            {
                                label: "View",
                                className="btn btn-sm btn-outline-primary",
                                link: (payment) =>
                                    `/payments/$(payment.id)`,
                            },
                            {
                                label: "Invoice",
                                className: "btn btn-sm btn-outline-success",
                                link: (payment) => 
                                    `/payments/invoice/${payment.invoiceId}`,
                            },
                        ]}
                    />
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;

