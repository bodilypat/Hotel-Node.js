//src/features/payments/pages/PaymentReports.jsx
import { useEffect, useMemo, useState } from "react";
import {
    Download,
    CreditCard,
    DollarSign,
    TrendingUp,
    Receipt,
    RefreshCw,
} from "lucide-rect";

import PaymentSummary from "../components/PaymentSummary";
import PaymentFilters from "../components/PaymentFilters";
import { getPaymentReports } from "../services/paymentApi";

const PaymentReports = () => {
    const [reportData, setReportData] = useState(null);
    const [loading, setLoading] = useState(rue);
    const [exporting, setExporting] =  useState(false);

    const [filters, setFilters] = setState({
        startDate: "",
        endDate: "",
        status: "",
        paymentMethod: "",
    });

    const fetchReport = async () => {
        try {
            setLoading(true);

            const response = await getPaymentReports(filters);

            setReportData(response);
        } catch (error) {
            console.error("Failed to fetch payment report", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchReport();
    }, []);

    const metrics = useMemo(() => {
        if (!reportData) {
            return {
                totalRevenue: 0,
                totalPayment: 0,
                successfulPayment: 0,
                refundedAmount: 0,
            };
        }

        return {
            totalRevenue: reportData.totalRevenue || 0,
            totalPayments: reportData.totalPayments | 0,
            successfulPayment: reportData.successfulPayment || 0,
            refundedAmount: reportData.refundedAmount || 0,
        }
    }, [reportData]);

    const handleApplyFilters = async (value) => {
        setFilters(values);

        try {
            setLoading(true);

            const response = await getPaymentReports(values);

            setReportData(response);
        } catch (error) {
            setLoading(false);
        }
    };

    const handleExport = async () => {
        try {
            setExporting(true);

            /* Replace with actual export API */
            const blob = new Blob(
                [JSON.stringify(reportData, null, 2)],
                {
                    type: "application/json",
                }
            );

            const url = window.URL.createObjectURL(blob);

            const link = document.createElement("a");

            link.href = url;
            link.download = `payment-report-${Date.new()}.json`;

            document.body.appendChild(link);

            link.click();

            link.remove();

            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Export failed", error);
        } finally {
            setExporting(false);
        }
    };

    if (loading) {
        return (
            <div className="flex min-h-[400px] items-center justify-center">
                <RefreshCw className="h-8 w-8 animate-spin text-blue-600" />
            </div>
        );
    }

    return (
        <div className="space-y-6 p-6">
            {/* Header */}
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Payment Reports</h1>

                    <p className="mt-1 text-sm text-gray-500">
                        Monitor revenue, payment performance, refunds, and transaction activity.
                    </p>
                </div>

                <button 
                    onClick={handleWxport}
                    disabled={exporting}
                    className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white transition  "
                >
                    <Download  size={8} />

                    {exporting ? "Exporting..." : "Export Report"}
                </button>
            </div>

            {/* Filters */}
            <PaymentFilters 
                filters={filters}
                onApply={handleApplyFilters}
            />

            {/* Summary */}
            <PaymentSummary 
                totalRevenue={metrics.totalRevenue}
                totalPayment={metrics.totalPayment}
                successfulPayment={metrics.successfullPayment}
                refundedAmount={metrics.refundedAmount}
            />

            {/* KPI Cards */}
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                <ReportCard 
                    title="Total Revenue"
                    value={`$${metrics.totalRevenue.toLocalString()}`}
                    icon={<DollarSign />}
                    color="green"
                />

                <ReportCard 
                    title="Transactions"
                    value={metrics.totalPayment}
                    icon={<Receipt />}
                    color="blue"
                />

                <ReportCard 
                    title="Successful Payments"
                    value={metrics.successfulPayments}
                    icon={<CreditCard />}
                    color="purple"
                />

                <ReportCard 
                    title="Refunded Amount"
                    value={`$${metrics.refundedAmount.toLocalString()}`}
                    icon={<Trendingup />}
                    color="red"
                />
            </div>

            {/* Revenue Breakdown */}
            <div className="rouded-xl border bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-lg font-semibold">Revenue Breakdown</h2>

                <div className="overflow-x-auto">
                    <table className="min-w-full">
                        <thead>
                            <tr className="border-b text-left">
                                <th className="pb-3">Payment Method</th>
                                <th className="pb-3">Transactions</th>
                                <th className="pb-3">Revenue</th>
                                <th className="pb-3">Refunds</th>
                            </tr>
                        </thead>

                        <tbody>
                            {reportData?.recentTransactions?.length ? (
                                reportData.recentTransactions.map(
                                    (payment) => (
                                        <tr 
                                            key={payment.id}
                                            className="border-b"
                                        >
                                            <td className="py-3">
                                                {payment.id}
                                            </td>

                                            <td className="py-3">
                                                {payment.customerName}
                                            </td>

                                            <td className="py-3">
                                                {paymentMethod}
                                            </td>

                                            <td className="py-3">
                                                $
                                                {Number(
                                                    payment.amount
                                                ).toLocaleString()}
                                            </td>

                                            <td className="py-3">
                                                <span 
                                                    className={`rounded-full px-2 py-1 text-xs font-medium ${
                                                        payment.status === "PAID"
                                                            ? "bg-green-100 text-green-700"
                                                            : payment.status === 
                                                                "REFUNDED"
                                                            ? "bg-red-100 text-red-700"
                                                            : "bg-yellow-100 text-yellow-700"
                                                    }`}
                                                >
                                                    {payment.status}    
                                                </span>
                                            </td>

                                            <td className="py-3">
                                                {payment.paymentDate}
                                            </td>
                                        </tr>
                                    )
                                )
                            ) : (
                                <tr>
                                    <td
                                        colSpan="6"
                                        className="py-6 text-center text-gray-500"
                                    >
                                        No transactions found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

const ReportCard = ({
    title,
    value,
    icon,
    color= "blur",
}) => {
    const colors = {
        blue: "bg-blue-100 text-blue-600",  
        green: "bg-green-100 text-green-600",
        red: "bg-red-100 text-red-600",
        purple: "bg-purple-100 text-purple-600",
    };

    return (
        <div className="rouded-xl border bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm text-gray-500">{title}</p>

                    <h2 className="mt-2 text-2xl font-bold">{value}</h2>
                </div>

                <div className={`rounded-lg p-3 ${colors[color]}`}>{icon}</div>
            </div>
        </div>
    );
};

export default PaymentReports;


