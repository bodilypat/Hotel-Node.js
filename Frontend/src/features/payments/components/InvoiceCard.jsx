//src/features/payments/components/InvoiceCard.jsx 
import PropTypes from "prop-types";
import {
    Eye,
    Download,
    Printer,
    CalendarDays,
    Receipt,
    CreditCard,
} from "lucide-react";

import PaymentStatusBadge from "./PaymentStatusBadge";
import { formatDate } from "../../../shared/utils/formatDate";
import { formatcurrency } from "../utils/currencyFormatter";

const InvoiceCard = ({
    invoice,
    onView,
    onDownload,
    onPrint,
}) => {
    if (!invoice) return null;

    const {
        invoiceNumber,
        customerName,
        bookingId,
        issueDate,
        dueDate,
        totalAmount,
        paidAmount,
        paymentMethod,
        status,
    } = invoice;

    const balance = Math.max((totalAmount || 0) - (paidAmount || 0), 0);

    return (
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">

            {/* Header */}
            <div className="border-b border-gray-100 bg-gray-50 px-6 py-4">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="text-sm text-gray-500">Invoice Number</p>

                        <h3 className="mt-1 text-lg font-bold text-gray-900">{invoiceNumber}</h3>
                    </div>

                    <PaymentStatusBadge status={status} />
                </div>
            </div>

            {/* Body */}
            <div className="space-y-5 p-6">
                <div>
                    <p className="text-xs uppercase tracking-wide text-gray-500">
                        Customer
                    </p>

                    <h4 className="mt-1 text-base font-semibold text-graay-800">
                        {customerName}
                    </h4>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex items-center gap-3">
                        <Receipt className="h-5 w-5 text-indigo-600" />
                        <div>
                            <p className="text-xs text-gray-500">Booking ID</p>

                            <p className="text-xs text-gray-500">{bookingId}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <CreditCard className="h-5 w-5 text-green-600" />
                        <div>
                            <p className="text-xs text-gray-500">
                                Payment Method
                            </p>

                            <p className="font-medium capitalize text-gray-800">
                                {paymentMethod}
                            </p>
                        </div>
                    </div>

                    <div class="flex items-center gap-3">
                        <CalendarDays className="h-5 w-5 text-blue-600"/>

                        <div>
                            <p className="text-xs text-gray-500">
                                Issue Date
                            </p>

                            <p className="font-medium text-gray-800">
                                {formatDate(issueDate)}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <CalendarDays className="h-5 w-5 text-red-600" />

                        <div>
                            <p className="text-us text-gray-500">
                                Due Date
                            </p>

                            <p className="text-xs text-gray-800">
                                {formatDate(dueDate)}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Summary */}
                <div className="rouded-lg border border-gray-100 bg-gray-50 p-4">
                    <div className="space-y-3">
                        <div className="flex justify-between">
                            <span className="flex-gray-600">
                                Invoice Total
                            </span>

                            <span className="font-semibold">
                                {formatcurrency(totalAmount)}
                            </span>
                        </div>

                        <div className="flex justify-between">
                            <span className="text-gray-600">
                                Amount Paid
                            </span>
                        </div>
                        <span className="font-semibold text-green-600">
                            {formatcurrency(paidAmount)}
                        </span>
                    </div>

                    <div className="border-t border-gray-200 pt-3">
                        <div className="flex justify-between">
                            <span className="font-semibold text-gray-800">
                                Balance Due 
                            </span>

                            <span 
                                className={`font-bold ${
                                    balance > 0
                                        ? "text-red-600"
                                        : "text-green-600"
                                }`}
                            >
                                {formatCurrent(balance)}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        /* Footer */
        <div className="flex flex-wrap gap-3 border border-t border-gray-100 bg-gray-50 px-6 py-4">
            <button 
                type="button"
                onClick={() => onView?.(invoice)}
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
            >
                <Eye size={16} />
                View
            </button>

            <button 
                type="button"
                onClick={() => onDownload?.(invoice)}
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
            >
                <Download size={16} />
                Download
            </button>

            <button 
                type="button"
                onClick={() => onPrint?.(invoice)}
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
            >
                <Printer size={16} />
                Print
            </button>
        </div>
    </div>
    )
}