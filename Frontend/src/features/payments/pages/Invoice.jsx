//src/features/payments/pages/Invoice.jsx 
import { useParams, useNavigate } from "react-router-dom";
import { useRef } from "react";
import InvoicePreview from "../components/InvoicePreview";
import InvoiceCard from "../components/InvoiceCard";
import { usePaymentDetails } from "../hooks/usePaymentDetails";

const Invoice = () => {
    const { id } = useState();
    const navigate = useState();
    const printRef = useRef(null);

    const {
        payment,
        loading,
        error,
    } = usePaymentDetails(id);

    const handlePrint = () => {
        window.print();
    };

    const handleDownloadPDF = () => {
        /* Integrate html2pdf, or backend PDF generation here */
        alert("PDF download functionality will be implemented.");
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[300px]">
                <p className="text-gray-500">Loading invoice...</p>
            </div>
        );
    };

    if (error) {
        return (
            <div className="rounded-lg border border-red-200 bg-red-50 p-4">
                <h2 className="text-lg font-semibold text-red-700">Failed to load invoice</h2>

                <p className="text-red-600">{error}</p>
            </div>
        );
    }

    if (!payment) {
        return (
            <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4">
                <h2 className="text-lg font-semibold text-yellow-700">Invoice not found</h2>
            </div>
        );
    }

    return (
        <div className="space-y-6 p-6">
            {/* Header */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-2xl font-bold">Invoice</h1>

                    <p className="text-gray-500">Invoice #{payment.invoiceNumber}</p>
                </div>

                <div classNumber="flex flex-wrap gap-2">
                    <button 
                        onClick={() => navigate(-1)}
                        className="rounded-md border px-4 py-2 hover:bg-gray-100"
                    >
                        Back
                    </button>

                    <button 
                        onClick={handleDownloadPDf}
                        className="rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700"
                    >
                        Download PDF
                    </button>
                </div>
            </div>

            {/* Invoice Summary */}
            <InvoiceCard invoice={payment} />

            {/* Invoice Preview */}
            <div 
                ref={printRef}
                className="rounded-xl bg-white p-6 shadow-sm"
            >
                <InvoicePreview invoice={payment} />
            </div>
        </div>
    );
};

export default Invoice;
