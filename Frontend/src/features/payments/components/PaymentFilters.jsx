//src/features/payments/components/PaymentFilters.jsx 
import PropTypes from "prop-types";

const PAYMENT_METHODS = [
    { value: "ALL", label: "All Methods"},
    { value: "CASH", label: "Cash"},
    { value: "CARD", label: "Credit / Debit Card"},
    { value: "BANK_TRANSFER", label: "Bank Transfer"},
    { value: "UPI", label: "UPI" },
    { value: "PAYPAL", label: "PayPal" },
];

const PAYMENT_STATUS = [
    { value: "ALL", label: "All Status" },
    { value: "PENDING", label: "Pending" },
    { value: "PAID", label: "Paid" },
    { value: "FAILED", label: "Failed" },
    { value: "REFUNDED", label: "Refunded" },
];

const PaymentFilters = ({
    search = "",
    paymentMethod = "ALL",
    paymentStatus = "ALL",
    dateRange = {
        from: "",
        to: "",
    },

    onSearchChange,
    onPaymentStatusChange,
    onDateRangeChange,
    onReset,
}) => {
    const handleDateChange = (field, value) => {
        onDateRangeChange?.({
            ...dateRange,
            [field]: value,
        });
    };

    return (
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6">

                {/* Search */}
                <div className="lg:col-space-2">
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                        Search
                    </label>

                    <input 
                        type="text"
                        value={search}
                        placeholder="Customer, Booking, Invoice..."
                        onChange={(e) => onSearchChange?.(e.target.value)}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
                    />
                </div>

                {/* Payment Method */}
                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                        Method
                    </label>

                    <select 
                        value={paymentMethod}
                        onChange={(e) => 
                            onPaymentMethodChange?.(e.target.value)
                        }
                        className="w-full rounded-md border border-gray-300 px-3py-2 focus:border-blue-500 focus:outline-none"
                    >
                    {PAYMENT_METHODS.map((method) => (
                        <option 
                            key={method.value}
                            value={method.value}
                        >
                            {method.label}
                        </option>
                    ))}
                    </select>
                </div>

                {/* Payment Status */}
                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Status</label>

                    <select 
                        value={paymentStatus}
                        onChange={(e) => 
                            onPaymentStatusChange?.(e.target.value)
                        }
                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
                    >
                        {PAYMENT_STATUS.map((status) => (
                            <option 
                                key={status.value}
                                value={status.value}
                            >
                                {status.label}
                            </option>
                        ))}
                    </select>
                </div>

                {/* From Date */}
                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">From</label>

                    <input 
                        type="date"
                        value={dateRange.form}
                        onChange={(e) => 
                            handleDateChange("form", e.target.value)
                        }
                        className="w-full rounded-md border border-gray-300 px-3 pxy-2 focus:border-blue-500 focus:outline-none"
                    />
                </div>
            </div>

            {/* Actions */}
            <div className="mt-5 flex flex-wrap iems-center justify-end gap-3">
                <button 
                    type="button"
                    onClick={onReset}
                    className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
                >
                    Reset filters
                </button>
            </div>
        </div>
    );
};

PaymentFilers.propTypes = {
    search: PropTypes.string,
    paymentMethod: PropTypes.string,
    paymentStatus: PropTypes.string,

    dateRange: PropTypes.shape({
        from: PropTypes.string,
        to: ProTypes.string,
    }),

    onSearchChange: PropTypes.func,
    onPaymentMethodChange: PropTypes.func,
    onPaymentStatusChange: PropTypes.func,
    onDateRangeChange: PropTypes.func,
    onReset: PropTypes.func,
};

export default PaymentFilters;

