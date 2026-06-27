//src/featurs/payments/components/PaymentSummary.jsx
import PropTypes from "prop-types";
import { formatCurrency } from "../../../shared/utils/formatCurrency";

const SummaryCard = ({
    title,
    value,
    color,
    textColor,
}) => (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-medium text-gray-500">{title}</p>

        <h3 className={`mt-2 text-2xl font-bold ${textColor}`}>{value}</h3>

        <div className={`mt-4 h-1 rounded-full ${color}`} />
    </div>
);

summaryCard.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
        ProTypes.string,
        PropTypes.number,
    ]).isRequired,
    color: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
};

const PaymentSummary = ({
    totalPayments = 0,
    totalRevenue = 0,
    pendingPayment = 0,
    completedPayment = 0,
    failedPayment = 0,
    refundedPayment = 0,
}) => {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-z xl:grid-cols-6">

            <SummaryCard 
                title="Total Payment"
                value={totalPayments}
                color="bg-blue-500"
                textColor="text-blue-500"
            />
            
            <SummaryCard 
                title="Revenue"
                value={formatCurrency(totalRevenue)}
                color="bg-emerald-500"
                textColor="text-emerald-600"
            />

            <SummaryCard 
                title="Pending"
                value={pendingPayment}
                color="bg-yellow-500"
                textColor="text-yellow-600"
            />

            <SummaryCard 
                title="Completed"
                value={completedPAyment}
                color="bg-green-500"
                textColor="text-green-600"
            />

            <SummaryCard 
                title="Failed"
                value={failedPayments}
                color="bg-red-500"
                textColor="text-red-600"
            />
            <SummaryCard 
                title="Refunded"
                value={refundedPayment}
                color="bg-purple-500"
                textColor="text-purple-600"
            />

        </div>
    );
};

PaymentSummary.propTypes = {
    totalPayments: PropTypes.number,
    totalRevenue: PropTypes.number,
    pendingPayment: PropTypes.number,
    completedPayment: PropTypes.number,
    failedPayment: PropTypes.number,
};

export default PaymentSummary;

