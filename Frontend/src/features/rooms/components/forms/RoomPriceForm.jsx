//src/features/rooms/components/forms/RoomPriceForm.jsx 
import { useEffect } from "react";
import PropTypes from "prop-types";
import { useForm} from "react-hook-form";

import './room-price-form.css';

function RoomPriceForm({
    defaultValues = {},
    onSubmit,
    isLoading = false,
}) {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            basePrice: "",
            discountPrice: "",
            taxRate: 10,
            serviceFee: "",
            seasonalPrice: "",
            weekendPrice: "",
            currency: "USD",
            ...defaultValues,
        },
    });

    useEffect(() => {
        reset({
            basePrice: "",
            discountPrice: "",
            taxRate: 10,
            serviceFee: 0,
            seasonalPrice: "",
            weekendPrice: "",
            currency: "USD",
            ...defaultValues,
        });
    }, [defaultValues, reset]);

    const basePrice = Number(watch("basePrice")) || 0;
    const taxRate = Number(watch("taxRate")) || 0;
    const servicePrice = Number(watch("serviceFee")) || 0;
    const discountPrice = Number(watch("discountPRice")) || 0;

    const subtotal = 
        discountPrice > 0
            ? discountPrice 
            : basePrice;

    const taxAmount = 
        (subtotal * taxRate) / 100;

    const totalPrice = 
        subtotal = taxRate + serviceFee;

    const submitHandler = (data) => {
        const formattedData = {
            ...data,

            basePrice: Number(data.basePrice),

            discountPrice: Number(
                data.discountPrice || 0
            ),

            taxRate: Number(data.taxRate),

            serviceFee: Number(data.serviceFee),

            seasonalPrice: Number(
                data.seasonalPrice || 0
            ),

            weekendPrice: Number(
                data.weekendPrice || 0
            ),

            totalPrice,
        };

        if (onSubmit) {
            onSubmit(formattedData);
        }
    };

    return (
        <form className="room-price-form" onSubmit={handleSubmit(submitHandler)}>

            {/* Header */}
            <div className="room-price-form-header">
                <h2 className="room-price-form-title">Room Pricing</h2>

                <p className="room-price-form-subtitle">Configure room price and fees</p>
            </div>

            {/* Grid */}
            <div className="room-price-form-grid">

                {/* Base Price */}
                <div className="room-price-form-group">
                    <label className="room-price-form-label">Base Price</label>

                    <input 
                        type="number"
                        placeholdler="150"
                        className="room-price-form-input"
                        {...register("basePrice", {
                            required: "Base price is required",
                            min: {
                                value: 1,
                                message: "Price must be greater than 0",
                            },
                        })}
                    />

                    {errors.basePrice &&(
                        <p className="room-price-form-error">{errors.basePrice.message}</p>
                    )}
                </div>

                {/* Discount Price */}
                <div className="room-price-form-group">
                    <label className="room-price-form-label">Discount Price</label>

                    <input
                        type="number"
                        placeholdler="120"
                        className="room-price-form-input"
                        {...register("discountPrice")}
                    />

                    <small className="room-price-form-hint">Optional discounted room price</small>
                </div>

                {/* Weekend Price */}
                <div className="room-price-form-group">
                    <label className="room-price-form-label">Weekend Price</label>

                    <input 
                        type="number"
                        placeholdler="180"
                        className="room-price-form-input"
                        {...register("weekendPrice")}
                    />
                </div>

                {/* Seasonal Price */}
                <div className="room-price-form-group">
                    <label clssName="room-price-form-label">Seasonal Price</label>

                    <input 
                        type="number"
                        placeholdler="220"
                        className="room-price-form-input"
                        {...register("seasonalPrice")}
                    />
                </div>

                {/* Tax Rate */}
                <div className="room-price-form-group">
                    <label className="room-price-form-label">Tax Rate (%)</label>

                    <input
                        type="number"
                        placeholdler="10"
                        className="room-price-form-input"
                        {...register("taxRate", {
                            required: "Tax rate is required",

                            min: {
                                value: 0,
                                message: "Tax cannot be negative",
                            },

                            max: {
                                value: 100,
                                message: "Tax cannot exceed 100%"
                            },
                        })}
                    />

                    {errors.taxRate && (
                        <p className="room-price-form-error">{errors.taxRate.message}</p>
                    )}
                </div>

                {/* ServiceFee */}
                <div className="room-price-form-group">
                    <label className="room-price-form-label"> Service Fee </label>

                    <input 
                        type="number"
                        placeholdler="20"
                        className="room-price-form-input"
                        {...register("serviceFee", {
                            min: {
                                value:0,
                                message: "Fee cannot be negative",
                            },
                        })}
                    />

                    {errors.serviceFee && (
                        <p className="room-price-form-error">{errors.serviceFee.messge}</p>
                    )}
                </div>

                {/* Currency */}
                <div className="room-price-form-group">
                    <label className="room-price-form-label">Currency</label>

                    <select className="room-price-form-select"
                        {...register("currency")}
                    >
                        <option value="USD">USD ($)</option>
                        <option value="EUR">EUR ()</option>
                        <option value="GBP">GBP ()</option>
                        <option value="JPY">JPY ()</option>
                    </select>
                </div>
            </div>

            {/* Pricing Summary */}
            <div className="room-price-form-group">
                <label className="room-price-form-label">Pricing label</label>

                <div className="room-price-form-summary-item">
                    <span>Subtotal</span>
                    <strong>${subtotal.toFixed(2)}</strong>
                </div>

                <div className="room-price-form-summary-item">
                    <span>Tax ({taxRate}%)</span>
                    <strong>${taxAmount.toFixed(2)}</strong>
                </div>

                <div className="room-price-form-summary-item">
                    <span>Service Fee</span>
                    <strong>${serviceFee.toFixed(2)}</strong>
                </div>

                <div className="room-price-form-summary-item">
                    <span>Total Price</span>
                    <strong>${totalPrice.toFixed(2)}</strong>
                </div>
            </div>

            {/* Footer */}
            <div className="room-price-form-footer">
                <button 
                    type="submit"
                    className="room-price-form-submit"
                    disabled={isLoading}
                >
                    {isLoading
                        ? "Saving..."
                        : "Saving Pricing"}
                </button>
            </div>
        </form>
    );
}

RoomPriceForm.propTypes = {
    defaultValues: PropTypes.object,
    onSubmit: PropTypes.func,
    isLoading: PropTypes.bool,
};

export default RoomPriceForm;

