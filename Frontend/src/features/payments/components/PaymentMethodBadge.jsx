//src/features/payments/components/PaymentMethodBadge.jsx
import PropTypes from "prop-types";

const METHOD_STYLES = {
    CASH: {
        label: "Cash",
        className: "bg-green-100 text-green-800 border border-green-200",
    },
    CARD: {
        label: "Card",
        className: "bg-blue-100 text-blue-800 border border-blue-200",
    },
    CREDIT_CARD: {
        label: "Credit Card",
        className: "bg-blue-100 text-blue-800 border border-blue-200",
    },
    DEBIT_CARD: {
        label: "Debit Card",
        className: "bg-indigo-100 text-indigo-800 border border-indigo-200",
    },
    BANK_TRANSFER: {
        label: "Bank Transfer",
        className: "bg-purple-100 text-purple-800 border border-purple-200",
    },
    UPI: {
        label: "UPI",
        className: "bg-orange-100 text-organge-800 border border-orange-200",
    },
    PAYPAL: {
        label: "PayPal",
        className: "bg-cyan-100 text-cyan-800 border border-cyan-200",
    },
    STRIPE: {
        label: "Stripe",
        className: "bg-violet-100 text-violet-800 border border-violet-200"
    },
    RAZORDPAY: {
        label: "Razorpay",
        className: "bg-sky-100 text-sky-800 border border-sky-200",
    },
};

const DEFAULT_STYLE = {
    label: "Unknown",
    className = "bg-gray-100 text-gray-700 border border-gray-200",
};

const PaymentMEthodBadge = ({
    method,
    className = "",
}) => {
    const config = 
    METHOD_STYLES[method?.toUpperCase()] || DEFAULT_STYLE;

    return (
        <span 
            className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${config.className} ${className}`}
        >
            {config.label}
        </span>
    );
};

PaymentMethodBadge.propTypes = {
    method: PropTypes.string,
    className: PropTypes.string,
};

export default PaymentMethodBadge;
