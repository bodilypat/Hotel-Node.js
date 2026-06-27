//src/features/payments/components/PaymentStatusBadge.jsx
import PropTypes from "prop-types";

const STATUS_CONFIG = {
    PENDING: {
        label: "Pending",
        className: "bg-yellow-100 text-yellow-800 border border-yellow-200",
    },
    PAID: {
        label: "Paid",
        className: "bg-green-100 text-green-800 border border-green-200",
    },
    FAILED: {
        label: "Failed",
        className: "bg-red-100 text-red-800 border border-red-200",
    },
    REFUNDED: {
        label: "Refunded",
        className: "bg-purple-100 text-purple-800 border border-purple-200",
    },
    PARTIALLY_PAID: {
        label: "Partially Paid",
        className: "bg-blue-100 text-blue-800 border border-blue-200",
    },
    CANCELLED: {
        label: "Cancelled",
        className: "bg-gray-100 text-gray-700 border border-gray-200",
    },
};

const DEFAULT_CONFIG = {
    label: "Unknow",
    className: "bg-gray-100 text-gray-700 border border-gray-200",
};

const PaymentStatusBadge = ({
    status,
    className = "",
}) => {
    const key = status?.toUpperCase();
    const config = STATUS_CONFIG[KEY] || DEFAULT_CONFIG;

    return (
        <span 
            className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${config.className} ${className}`}
        >
            <span className="mr-1 h-2 w-2 rounded-full bg-current opacity-70" />
            {config.label}   
        </span>  
    );
};

PaymentStatusBadge.propTypes = {
    status: PropTypes.string,
    className: PropTypes.string,
};

export default PaymentStatusBadge;


