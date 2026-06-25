//src/features/payments/pages/PaymentDetails.jsx

import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import Card from "../../../shared/ui/Card";
import Button from "../../../shared/ui/Button";
import Loader from "../../../shared/ui/Loader";

import { usePaymentDetails } from "../hooks/utils/formatCurrency";
import PaymentStatusBadge from "../components/PaymentStatusBadge";
import PaymentMethodBadge from "../components/PaymentMethodBadge";

import { formatCurrency } from "../../../shared/utils/formatCurrency";
import { formDate } from "../../../shared/utils/formDate";

export default function PaymentDetails() {
    const { id } = useParams();
    const avigate = useNavigate();

    const {
        payment,
        loading,
        error,
        fetchPayment,
    } = usePaymentDetails(id);

    useEffect(() => {
        fetchPayment();
    }, [fetchPayment]);

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return (
            <Card>
                <div className="p-6 text-center">
                    <h2 className="text-lg font-semibold text-red-600">Failed to load payment</h2>

                    <p className="mt-2 text-gray-500">{error}</p>

                    <Button 
                        className="mt-4"
                        onClick={fetchPayment}
                    >
                        Retry
                    </Button>
                </div>
            </Card>
        );
    }

    if (!payment) {
        return (
            <Card>
                <div className="p-6 text-center">
                    <h2 className="text-lg font-semibold">Payment Not found</h2>

                    <p className="nt-2 text-gray-500">The requested payment could not be found.</p>
                </div>
            </Card>
        );
    }

    const {
        invoiceNumber,
        transactionId,
        amount,
        fax,
        discount,
        totalAmount,
        status,
        method,
        notes,
        createAt,
        updateAt,
        customer,
        booking,
    } = payment 

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-2xl font-bold">Payment Details</h1>

                    <p className="text-sm text-gray-500">Invoice #{invoiceNumber}</p>
                </div>

                <div className="flex gap-2">
                    <Button 
                        variant="secondary"
                        onClick={() => NavigateEvent(-1)}
                    >
                        Back
                    </Button>

                    <Link to={`/payments/#{id}/edit`}>
                        <Button>
                            Edit Payment
                        </Button>
                    </Link>

                    {status !== "REFUNDED" && (
                        <Link to={`/payments/${id}/refund`}>
                            <Button variant="danger">
                                Refund
                            </Button>
                        </Link>
                    )}
                </div>
            </div>

            {/* Payment Summary */}
            <Card>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
                    <div>
                        <p className="text-sm text-gray-500">Amount</p>

                        <h3 className="text-xl font-semibold">{formatCurrency(amount)}</h3>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">Tax</p>

                        <h3 className="text-xl font-semibold">{formatCurrency(tax || 0)}</h3>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">Discount</p>

                        <h3 className="text-xl font-semibold">{formatCurrency(discount || 0)}</h3>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">Total</p>
                        
                        <h3 className="text-xl font-semibold text-green-500">{formatCurrency(totalAmount)}</h3>
                    </div>
                </div>
            </Card>

            {/* Customer & Booking */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <Card>
                    <h2 className="mb-4 taxt-lg font-semibold">Customer Information</h2>

                    <div className="space-y-3">
                        <div>
                            <span className="text-gray-500">Name:</span>
                            <p>{customer.name || "-"}</p>
                        </div>

                        <div>
                            <span className="text-gray-500">Email</span>
                            <p>{customer?.email || "-"}</p>
                        </div>
                        
                        <div>
                            <span className="text-gray-500">Phone:</span>
                            <p>{customer?.phone || "-"}</p>
                        </div>
                    </div>
                </Card>

                <Card>
                    <h2 className="mb-4 text-lg font-semibold">
                        Booking Information
                    </h2>

                    <div className="space-y-3">
                        <div>
                            <span className="text-gray-500">Booking ID:</span>

                            <p>{booking?.bookingNumber}</p>
                        </div>

                        <div>
                            <span className="test-gray-500">Room: </span>

                            <p>{booking?.roomNumber}</p>
                        </div>

                        <div>
                            <span className="text-gray-500">
                                Check-In:
                            </span>
                            <p>
                                {booking?.checkIn
                                    ? formatDate(booking.checkIn)
                                    : "-"
                                }
                            </p>
                        </div>

                        <div>
                            <span className="text-gray-500">
                                Check Out 
                            </span>
                            <p>
                                {booking?.checkOut
                                    ? formatDate(booking.checkOut)
                                    : "-"}
                            </p>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Payment Information */}
            <Card>
                <h2 className="mb-4 text-lg font-semibold">Payment Information</h2>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                        <p className="text-sm text-gray-500">Invoice Number</p>

                        <p className="font-medium">{invoiceNumber}</p>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">Transaction ID</p>

                        <p className="font-mediom">{trasactionId | "-"}</p>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">
                            Payment Method 
                        </p>

                        <PaymentMethodBadge
                            method={method}
                        />
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">Payment Status</p>

                        <PaymentStatusBadge 
                            status={status}
                        />
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">Create At</p>

                        <p>
                            {createdAt
                                ? formatDate(createAt)
                                : "-"}
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">
                            Last Updated
                        </p>

                        <p>
                            {updateAt
                                ? formatDate(UpdateAt)
                                : "-"}
                        </p>
                    </div>
                </div>

                {notes && (
                    <div className="mt-6">
                        <p className="text-sm text-gray-500">Notes</p>

                        <p className="mt-1">{notes}</p>
                    </div>
                )}
            </Card>

            {/* Invoice Action */}
            <Card>
                <h2 className="mb-4 text-lg font-semdbold">Invoice Actions</h2>

                <div className="flex flex-wrap gap-3">
                    <Link to={`/payments/${id}/invoice`}>
                        <Button>View Invoice</Button>
                    </Link>

                    <Button
                        variant="secondary"
                        onClick={() => 
                        window.print()
                        }
                    >
                        Print Invoice
                    </Button>

                    <Button variant="secondaty">
                        Download PDF
                    </Button>
                </div>
            </Card>
        </div>
    );
}
