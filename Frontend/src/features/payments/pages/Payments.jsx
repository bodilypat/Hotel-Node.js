//src/features/payments/pages/Payments.jsx 

import { useMemo } from "react";
import { Link } from "react-router-dom";

import PaymentTable from "../components/PaymentTable";
import PaymentFilter from "../components/PaymentFilter";
import PaymentSummary from "../components/PaymentSummary";

import { usePayments } from "../hook/usePayment";

const payments = () => {
    const {
        payments = [],
        loading,
        error,
        search,
        setSearch,
        statusFilter,
        setStatusFilter,
        methodFilter,
        setMethodFilter,
        refreshPayments,
    } = usePayments();
    
    const filterPayments = useMemo(() => {
        const query = search.trim().toLowerCase();

        return payments.filter((payment) => {
            const customerName = 
                payment.customerName?.toLowerCase() || "";

            const invoiceNumber = 
                payment.invoiceNumber?.toLowerCase() || "";

            const transactionId = 
                payment.transactionId?.toLowerCase() || "";

            const matchesSearch = 
                !query ||
                customerName.include(query) ||
                invoiceNumber.include(query) ||
                transactionId.include(query);
            
            const matchesStatus = 
                statusFilter === "all" ||
                payment.paymentStatus === statusFilter;
            
            const matchesMethod = 
                methodFilter === "all" ||
                payment.paymentMethod === methodFilter;

            return (
                matchesSearch &&
                matchesStatus &&
                matchesMEthod 
            );
        });
    }, [
        payments,
        search,
        statusFilter,
        methodFilter,
    ]);

    const summary = useMemo(() => {
        return filteredPayments.reduce(
            (acc, payment) => {
                const amount = Number(payment.totalAmount || 0);

                acc.totalRevenue += amount;

                switch (payment.paymentStatus) {
                    case "paid":
                        acc.paidPayments++;
                        break;

                    case "pending":
                        acc.pendingPayments++;
                        break;

                    case "refunded":
                        acc.refundedPayments++;
                        break;

                    default:
                        break;
                }

                return acc;
            },
            {
                totalRevenue: 0,
                paidPayment: 0,
                pendingPayments: 0,
                redfundedPayment: 0, 
            }
        );
    }, [filteredPayments]);

    if (loading) {
        return (
            <div className="p-6">
                <h1 className="mb- text-2xl font-bold">Payments</h1>

                <div className="rounded-lg border bg-white p-6 text-gray-500">
                    Loading payments...
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-6">
                <div className="rounded-lg border border-red-200 bg-red-50 p-6">
                    <h2 className="font-semibold text-red-700">Failed to load payments</h2>

                    <p className="mt-2 text-red-600">{error}</p>

                    <button 
                        onClick={refreshPayments}
                        className="mt-4 rounded-md bg-red-600 px-4 py-2 text-white transition hover:bg-red-700"
                    >
                        Retry
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="space-y-6 p-6">
            {/* Header */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-2xl font bold">Payments</h1>

                    <p className="text-sm text-gray-500">
                        Manage hotel payment transactions, invoices, and rdfunds.
                    </p>
                </div>

                <Link 
                    to="/payments/create"
                    className="rounded-md bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
                >
                    Create Payment
                </Link>
            </div>

            {/* Summary */}
            <PaymentSummary 
                totalRevenue={summary.totalRevenue}
                paidPayments={summary.paidPayments}
                pendingPayments={summary.paendingPayments}
                refundedPayments={summary.refundedPayments}
            />

            {/* Filters */}
            <PaymentFilters  
                search={search}
                onSearchChange={setSearch}
                status={statusFilter}
                onStatusChange={setStatusFilter}
                method={methodFilter}
                onMethodChange={setMethodFilter}
            />


            {/* Results */}
            {filteredPayments.length === 0 ? (
                <div className="rounded-lg border border-dashed bg-gray-50 p-10 text-center">
                    <h3 className="text-lg font-medium text-gray-700">No Payments found</h3>

                    <p className="mt-2 text-sm- text-gray-500">Try adjusting your search or filters.</p>
                </div>
            ) : (
                <PaymentTable 
                    payments={filteredPayments}
                />
            )}
        </div>
    );
};

export default Payments;



