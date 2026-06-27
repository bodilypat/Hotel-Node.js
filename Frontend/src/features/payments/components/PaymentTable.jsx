//src/features/payments/components/PaymentTable.jsx 
import React from "react";
import PropTypes from "prop-types";
import { formatCurrency } from "../../../shared/utils/formatCurrency";
import { formatDate } from "../../../shared/utils/formatDate";
import PaymentStatusBadge from "./PaymentStatusBadge";
import PaymentMethodBadge from "./PaymentMethodBadge";

const PaymentTable = ({
    payments = [],
    loading = false,
    onView,
    onEdit,
    onRefund,
}) => {
    if (loading) {
        return (
            <div className="p-6 text-center text-gray-500">
                Loading payments...
            </div>
        );
    }

    if (!loading && payments.length === 0) {
        return (
            <div className="rounded-lg border border-gray-200 bg-white p-8 text-center ext-gray-500">
                No payments found.
            </div>
        );
    }

    
    return (
        <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-gray-600">Payment ID</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-gray-600">Customer</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-gray-600">Booking</th>
                        <th className="px-4 py-3 text-right text-xs font-semibold uppercase text-gray-600">Amount</th>
                        <th className="px-4 py-4 text-center text-xs font-semibold uppercase text-gray-600">Method</th>
                        <th className="px-4 py-3 text-center text-xs font-semibold uppercase text-gray-600">Status</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-gray-600">Paid Date</th>
                        <th className="px-4 py-3 text-center text-xs font-semibold uppercase text-gray-600">Actions</th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-100">
                    {payments.map((payment) => (
                        <tr 
                            key={payment.id}
                            className="hover:bg-gray-50 transition-colors"
                        >
                            <td className="px-4 py-3 font-medium text-gray-800">
                                {payment.paymentNumber || payment.id}
                            </td>

                            <td className="px-4 py-3">
                                {payment.customerName}
                            </td>

                            <td className="px-4 py-3">
                                {payment.bookingNumber}
                            </td>

                            <td className="px-4 py-3 text-right font-semibold">
                                {formatCurrency(payment.amount)}
                            </td>

                            <td className="px-4 py-3 text-center">
                                <PaymentMethodBadge method={payment.paymentStatus} />
                            </td>

                            <td className="px-4 py-3 text-center">
                                <PaymentStatusBadge status={payment.status} />
                            </td>

                            <td className="px-4 py-3">
                                {formatDate(payment.paymentDate)}
                            </td>

                            <td className="px-4 py-3">
                                <div className="flex justify-center gap-2">
                                    <button 
                                        onClick={() => onView?.(payment)}
                                        className="rounded bg-blue-600 px-3 py-1 text-sm text-white hover:bg-blue-700"
                                    >
                                        View
                                    </button>

                                    <button 
                                        onClick={() => onEdit?.(payment)}
                                        className="rounded bg-yellow-500 px-3 py-1 text-sm text-white hover:bg-yellow-600"
                                    >
                                        Edit
                                    </button>

                                    {payment.status === "PAID" && (
                                    <button 
                                        onClick={() => onRefund?.(payment)}
                                        className="rounded bg-red-600 px-3 py-1 text-sm text-white hover:bg-red-700"
                                    >
                                        Refund
                                    </button>
                                    )}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

PaymentTable.propTypes = {
    payments: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number,
            ]),
            paymentNumber: PropTypes.string,
            customerName: PropTypes.string,
            bookingNumber: PropTypes.string,
            amount: PropTypes.number,
            paymentMethod: PropTypes.string,
            status: PropTypes.string,
            paymentDate: PropTypes.string,
        })
    ),
    loading: PropTypes.bool,
    onView: PropTypes.func,
    onEdit: PropTypes.func,
    onRefund: PropTypes.func,
};

export default PaymentTable;
