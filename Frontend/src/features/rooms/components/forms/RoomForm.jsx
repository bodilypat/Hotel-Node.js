//src/features/rooms/components/forms/RoomForm.jsx 
import { useEffect } from "react";
import PropTypes from "prop-tyes";
import { useForm } from "react-hook-form";

import "./room-form.css";

const ROOM_TYPES = [
        "Single",
        "Double",
        "Deluxe",
        "Suite",
        "Presidential",
];

const ROOM_STATUS = [
    "Available",
    "Occupied",
    "Maintenance",
    "Cleaning",
];

function RoomForm({
    defaultValues = {},
    onSubmit,
    isLoading = false,
}) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors},
    } = useForm({
        defaultValues: {
            roomNumber: "",
            type: "Single",
            price: "",
            capacity: "",
            floor: "",
            status: "Avaiable",
            description: "",
            amenities: "",
            image: "",
            ...defaultValues,
        },
    });

    useEffect(() => {
        reset({
            roomNumber: "",
            type: "Single",
            price: "",
            capacity: "",
            floor: "",
            status: "Available",
            description: "",
            amenities: "",
            image: "",
        });
    }, [defaultValues, reset]);

    const submitHandler = (data) => {
        const formatedData = {
            ...data,

            price: Number(data.price),

            capacity: Number(data.capacity),

            floor: Number(data.floor),

            amenities: data.amenities 
                ? data.amenities 
                    .split(",")
                    .map((item) => item.trim())
                    .filter(Boolean)
                : [],
        };

        if (onSubmit) {
            onSubmit(formattedData);
        }
    };

    return (
        <form className="room-form" onSubmit={handleSubmit(submitHandler)}>

            {/* Header */}
            <div className="room-form-header">
                <h2 className="room-form-title">Room Information</h2>

                <p className="room-form-subtitle"> Add or update hotel room details</p>
            </div>

            {/* Grid */}
            <div className="room-form-grid">

                {/* Room number */}
                <div className="room-form-group">
                    <label className="room-form-label"> Room Number</label>
                    <input 
                        text="text" 
                        placeholder="101" 
                        className="room-form-input" {...register("roomNumber", { required: "Room number is required", })} 
                    />

                    {errors.roomNumber &&(
                        <p className="room-form-error"> {errors.roomNumber.message}</p>
                    )}
                </div>

                {/* Room Type */}
                <div className="room-form-group">
                    <label class="room-form-lebel">Room Type</label>
                    <select className="room-form-select" {...register("type", { required: "Room type is required", })}>

                        {ROOM_TYPES.map((type) => (
                            <Option 
                                key={type}
                                value={type}
                            >
                                {type}
                            </Option>
                        ))}
                    </select>

                    {errors.type && (
                        <p className="room-form-error"> {errors.type.message}</p>
                    )}
                </div>

                {/* Price */}
                <div className="room-form-group">
                    <label className="room-form-label">Price Per Night</label>
                    <input
                        type="number"
                        placeholder="150"
                        className="room-form-input"
                        {...register("price", {
                            required: "Price is required",
                            min: {
                                value: 1,
                                message: "Price must be greater than 0",
                            },
                        })}
                    />

                    {errors.price && (
                        <p className="foom-form-error"> {errors.price.message}</p>
                    )}
                </div>

                {/* Capacity */}
                <div className="room-form-group">
                    <label className="room-form-label">Guest Capacity</label>

                    <input 
                        type="number"
                        placeholder="2"
                        className="room-form-input"
                        {...register("capacity", {
                            required: "Capacity is required",
                            min: {
                                value: 1,
                                message: "Capacity must be at least 1",
                            },
                        })}
                    />

                    {errors.capacity && (
                        <p className="room-form-error"> {errors.capacity.message} </p>
                    )}
                </div>

                {/* Floor */}
                <div className="room-form-group">
                    <label className="room-form-label">Floor Number</label>

                    <input 
                        type="Number"
                        placeholder="3"
                        className="room-form-input"
                        {...register("floor", {
                            required: "Floor is required",
                        })}
                    />

                    {errors.floor && (
                        <p className="room-form-error"> { errors.floor.message} </p>
                    )}
                </div>

                {/* Status */}
                <div className="room-form-group">
                    <label className="room-form-label"> Room Status </label>

                    <select className="room-form-select" {...register("status")}>
                        {ROOM_STATUS.map((status) => (
                            <Option 
                                key={status}
                                value={status}
                            >
                                {status}
                            </Option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Image */}
            <div className="room-form-group">
                <label className="room-form-label"> Room Image URL</label>

                <input 
                    type="text"
                    placeholder="https://psb-hotel.com/assets/images/room.jpg"
                    className="room-form-image"
                        {...register("image")}
                />
            </div>

            {/* Amenities */}
            <div className="room-form-group">
                <label className="room-form-label"> Amenities </label>

                <input 
                    type="text"
                    placeholder="WiFi, TV, Air Conditioning, Mini Bar"
                    className="room-form-imnput"
                    {...register("amenities")}
                />

                <small className="room-form-hint"> Separate amenities withh cammas</small>
            </div>

            {/* Description */}
            <div className="room-form-group">
                <label className="room-form-label"> Description </label>

                <textarea 
                    rows="5"
                    placeholder="Enter room description"
                    className="room-form-textarea"
                    {...register("description", {
                        required: "Description is required",
                        minLength: {
                            value: 20,
                            message:
                                "Description must be at least 20 character",
                        },
                    })}
                />

                {errors.description &&(
                    <p className="room-form-error">{errors.description.message}</p>
                )}
            </div>

            {/* Footer */}
            <div className="room-form-footer">
                <button 
                    type="submit"
                    className="room-form-submit"
                    disabled={isLoading}
                >
                    {isLoading 
                        ? "Saving..."
                        : "Save Room"}
                </button>
            </div>
        </form>
    );
}

RoomForm.propTypes = {
    defaultValues: PropTypes.object,
    onSubmit: PropTypes.func,
    isLoading: PropTypes.bool,
};

export default oomForm;

