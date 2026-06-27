//src/features/payments/components/PaymentCard.jsx 
import React from "react";
import PropTypes from "prop-types";
import { formatCurrency } from "../../../shared/utils/formatCurrency";
import { formatDate } from "../../../shared/utils/formatDate";
import PaymentStatusBadge from "./PaymentStatusBadge";
import PaymentMethodBadge from "./PaymentMethodBadge";

const PaymentCard = ({
    payment,
    onView,
    onEdit,
    onRefund,
    className = "",
}) => {
    if (!payment) return null;

    const {
        paymentNumber,
        customerName,
        bookingNumber,
        amount,
        method,
        status,
        paymentDate,
    } = payment;

    return (
        <div className={`bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 ${className}`}>
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b">
                <div>
                    <h3 className="text-lg font-semibold text-gray-800">{paymentNumber}</h3>

                    <p className="text-sm text-gray-500">Booking: {bookingNumber}</p>
                </div>

                {/* Body */}
                <div className="p-5 space-y-4">
                    <div>
                        <p className="text-xs uppercase tracking-wide text-gray-500">Customer</p>

                        <p className="font-medium text-gray-800">{customerName}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-xs uppercase tracking-wide text-gray-500">Amount</p>

                            <p className="text-lg font-bold text-emerald-600">{formatCurrency(amount)}</p>
                        </div>

                        <div>
                            <p className="text-xs uppercase tracking-wide text-gray-500">Method</p>

                            <PaymentMethodBadge method={method} />
                        </div>

                        <div>
                            <p className="text-xs uppercase tracking-wide text-gray-500">Payment Date</p>

                            <p className="font-medium text-gray-700">{formatDate(paymentDate)}</p>
                        </div>

                        <div>
                            <p className="text-xs uppercase tracking-wide text-gray-500">Status</p>

                            <PaymentStatusBadge status={status} />
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex justify-end gap-2 border-t p-4">
                    <button 
                        type="button"
                        onClick={() => onView?.(payment)}
                        className="rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
                    >
                        View
                    </button>

                    {onEdit && (
                        <button 
                            type="button"
                            onClick={() => onEdit(payment)}
                            className="rounded-md bg-amber-500 px-4 py-2 text-sm font-medium text-white hover:bg-amber-600"
                        >
                            Edit
                        </button>
                    )}

                    {status === "PAID" && (
                        <button 
                            type="button"
                            onClick={() => onRefund?.(payment)}
                            className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
                        >
                            Refund
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

PaymentCard.propTypes = {
    payment: PropTypes.shape({
        id: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string,
        ]),
        paymentNumber: PropTypes.string,
        customerName: PropTypes.string,
        bookingNumber: PropTypes.string,
        amount: PropTypes.number,
        paymentMethod: PropTypes.string,
        status: PropTypes.string,
        paymentDate: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.instanceOf(Date),
        ]),
    }).isRequired,

    onView: PropTypes.func,
    onEdit: PropTypes.func,
    onRefund: PropTypes.func,
    className: PropTypes.string
};

export default PaymentCard;
