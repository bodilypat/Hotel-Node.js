//src/features/payments/components/PaymentForm.jsx 
import { useEffect } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

const PAYMENT_METHODS = [
    { value: "CASH", label: "Cash" },
    { value: "CARD", label: "Credit / Debit Card" },
    { value: "BANK_TRANSFER", label: "Bank Transfer" },
    { value: "UPI", label:"UPI" },
    { value: "PAYPAL", label: "PayPal" },
];

const PAYMENT_STATUS = [
    { value: "PENDING", label: "Pending" },
    { value: "PAID", label: "Paid" },
    { value: "FAILED", label: "Failed" },
    { value: "REFUNDED", label: "Refunded" },
];

const defaultValues = {
    bookingId: "",
    customerName: "",
    amount: "",
    paymentMethod: "CASH",
    status: "PENDING",
    transactionId: "",
    paymentDate: "",
    notes: "",
};

const PaymentForm = ({
    initialValues = {},
    loading = false,
    submitText = "Save Payment",
    onSubmit,
    onCancel
}) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: {error},
    } = useForm({
        defaultValues: {
            ...defaultValues,
            ...initialValues,
        }
    });

    useEffect(() => {
        reset({
            ...defaultValues,
            ...initialValues,
        });
    }, [initialValues, reset]);

    const submitHander = (data) => {
        data.amount = Number(data.amount);
        onSubmit?.(data);
    };

  return (
    <form
      onSubmit={handleSubmit(handleSubmit)}
      className="space-y-6 rounded-xl bg-white p-6 shadow"
    >
      {/* Booking */}
      <div>
        <label className="mb-2 block text-sm font-medium">
          Booking ID
        </label>

        <input
          type="text"
          placeholder="Booking ID"
          {...register("bookingId", {
            required: "Booking ID is required",
          })}
          className="w-full rounded-md border px-3 py-2"
        />

        {errors.bookingId && (
          <p className="mt-1 text-sm text-red-500">
            {errors.bookingId.message}
          </p>
        )}
      </div>

      {/* Customer */}
      <div>
        <label className="mb-2 block text-sm font-medium">
          Customer Name
        </label>

        <input
          type="text"
          placeholder="Customer Name"
          {...register("customerName", {
            required: "Customer name is required",
          })}
          className="w-full rounded-md border px-3 py-2"
        />

        {errors.customerName && (
          <p className="mt-1 text-sm text-red-500">
            {errors.customerName.message}
          </p>
        )}
      </div>

      {/* Amount */}
      <div>
        <label className="mb-2 block text-sm font-medium">
          Amount
        </label>

        <input
          type="number"
          step="0.01"
          placeholder="0.00"
          {...register("amount", {
            required: "Amount is required",
            min: {
              value: 1,
              message: "Amount must be greater than zero",
            },
          })}
          className="w-full rounded-md border px-3 py-2"
        />

        {errors.amount && (
          <p className="mt-1 text-sm text-red-500">
            {errors.amount.message}
          </p>
        )}
      </div>

      {/* Payment Method */}
      <div>
        <label className="mb-2 block text-sm font-medium">
          Payment Method
        </label>

        <select
          {...register("paymentMethod")}
          className="w-full rounded-md border px-3 py-2"
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

      {/* Status */}
      <div>
        <label className="mb-2 block text-sm font-medium">
          Payment Status
        </label>

        <select
          {...register("status")}
          className="w-full rounded-md border px-3 py-2"
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

      {/* Transaction ID */}
      <div>
        <label className="mb-2 block text-sm font-medium">
          Transaction ID
        </label>

        <input
          type="text"
          placeholder="Transaction ID"
          {...register("transactionId")}
          className="w-full rounded-md border px-3 py-2"
        />
      </div>

      {/* Payment Date */}
      <div>
        <label className="mb-2 block text-sm font-medium">
          Payment Date
        </label>

        <input
          type="date"
          {...register("paymentDate", {
            required: "Payment date is required",
          })}
          className="w-full rounded-md border px-3 py-2"
        />

        {errors.paymentDate && (
          <p className="mt-1 text-sm text-red-500">
            {errors.paymentDate.message}
          </p>
        )}
      </div>

      {/* Notes */}
      <div>
        <label className="mb-2 block text-sm font-medium">
          Notes
        </label>

        <textarea
          rows={4}
          placeholder="Additional notes..."
          {...register("notes")}
          className="w-full rounded-md border px-3 py-2"
        />
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-md border border-gray-300 px-5 py-2 hover:bg-gray-100"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={loading}
          className="rounded-md bg-blue-600 px-5 py-2 text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Saving..." : submitText}
        </button>
      </div>
    </form>
  );
};

PaymentForm.propTypes = {
  initialValues: PropTypes.shape({
    bookingId: PropTypes.string,
    customerName: PropTypes.string,
    amount: PropTypes.number,
    paymentMethod: PropTypes.string,
    status: PropTypes.string,
    transactionId: PropTypes.string,
    paymentDate: PropTypes.string,
    notes: PropTypes.string,
  }),
  loading: PropTypes.bool,
  submitText: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
};

export default PaymentForm;