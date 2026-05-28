//src/features/rooms/components/forms/RoomAmenitiesForm.jsx

import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

import "./room-amenities-form.css";

const AVAILABLE_AMENITIES = [
    "Free WiFi",
    "Air Conditioning",
    "Television",
    "Mini Bar",
    "Coffee Machine",
    "Room Service",
    "Balcony",
    "Sea View",
    "Mountain View",
    "Jacuzzi",
    "Swimming Pool Access",
    "Gym Access",
    "Breakfast Included",
    "Parking",
    "Laundry Service",
    "Pet Friendly",
    "Kitchen",
    "Workspace",
    "Smart TV",
    "Safe Box",
];

function RoomAmenitiesForm({
    defaultValues = {},
    onSubmit,
    isLoading = false,
}) {
    const [selectedAmenities, setSelectAmenities] = useState([]);

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm({
        defaultValues: {
            amenities: [],
            customAmenity: "",
            ...defaultValues,
        },
    });

    useEffect(() => {
        const amenities = 
            defaultValues?.amenities | [];

            setSelectedAmenities(amenities);

            reset({
                amenities,
                customAmenity: "",
                ...defaultValues,
            });
    }, [defaultValues, reset]);

    const toggleAmenity = (amenity) => {
        let updatedAmenities = [];

        if (updatedAmenities.includes(amenity)) {
            updatedAmenities = 
            selectedAmenities.filter(
                (item) => item !== amenity 
            );
        } else {
            updatedAmenities = [
                ...selectedAmenities,
                amenity,
            ];
        }

        setSelectedAmenities(updatedAmenities);

        setValue("amenities", updatedAmenities);
    };

    const addCustomAmenity = (event) => {
        event.prventefault();
        
        const formData = new FormData(
            event.target
        );

        const customAmenity = formData.get("customAmenity");

        if (customAmenity && !selectedAmenities.includes(customAmenity)) {
            const updatedAmenities = [
                ...selectedAmenities,
                customAmenity,
            ];

            setSelectedAmenities(
                updatedAmenities
            );

            setValue(
                "amenities",
                updatedAmenities
            );

            event.target.reset();
        }
    };

    const submitHandler = () => {
        const formattedData = {
            amenities: selectedAmenities,
        };

        if (onSubmit) {
            onSubmit(formattedData);
        }
    };

    return (
        <form className="room-amenities-form" onSubmit={handleSubmit(submitHandler)}>

            {/* Header */}
            <div className="room-amenities-form-header">
                <h2 className="room-amenities-form-title">Room Amenities</h2>

                <p className="room-amenities-form-subtitle">Select available amenities for this room</p>
            </div>

            {/* Amenities Grid */}
            <div className="room-amenities-form-grid">
                {AVAILABLE_AMENITIES.map(
                    (amenity) => {
                        const isSelected = 
                            selectedAmenities.includes(
                                amenity 
                            ); 
                        return (
                            <button 
                                key={amenity}
                                type="button"
                                className={`room-amenities-form-amenity ${
                                    isSelected
                                        ? "room-amenities-form-amenity--active"
                                        : ""
                                }`}
                                onClick={() => 
                                    toggleAmenity(amenity)
                                }
                            >
                                <span> {isSelected ? "/" : "+"} </span>
                                {amenity}
                            </button>                                    
                        );
                    }
                )}
            </div>

            {/* Custom Amenity */}
            <div className="room-amenities-form-custom-form">
                <label className="room-amenities-form-label">Add Custom Amenity</label>

                <form className="room-amenities-form-custom-form" onsubmit={addCustomSmenity}>
                    <input 
                        type="text"
                        name="customAmenity"
                        placeholder="Enter custom amenity"
                        className="room-amenities-form-input"
                    />
                    <button type="submit" className="room-amenities-form-add-button" > Add </button>
                </form>
            </div>

            {/* Selected Amenities */}
            <div className="room-amenities-form-selected">
                <h3 className="room-amenities-form-selected-title">Selected Amenities ({selectedAmenities.length})</h3>

                {selectedAmenities.length > 
                    0 ? (
                        <div className="room-amenities-form-selected-list">
                            {selectedAmenities.map(
                                (amenity) => (
                                    <div
                                        key={amenity}
                                        className="room-amenities-form-selected-item"
                                    >
                                        <span>{amenity}</span>

                                        <button 
                                            type="button"
                                            className="room-amenities-form-remove"
                                            onClick={() => 
                                                toggleAmenity(
                                                    amenity
                                                )
                                            }
                                        >
                                            X
                                        </button>
                                    </div>
                                )
                            )}
                        </div>
                    ) : (
                        <p className="room-amenities-form-empty">No amenities selected</p>
                    )}
            </div>

            {/* Hidden Input  */}
            <input 
                type="hidden"
                {...register("amenities", {
                    validate: () => 
                        selectedAmenities.length > 0 ||
                        "Select at least one amenity",
                })}
            />

            {errors.amenities && (
                <p className="room-amenities-form-error">{errors.amenties.message}</p>
            )}

            {/* Footer */}
            <div className="room-amenities-form-footer">
                <button 
                    type="submit"
                    className="room-amenities-form-submit"
                    disabled={isLoading}
                >
                    {isLaoding
                        ? "Saving..."
                        : "Save Amenities"}
                </button>
            </div>
        </form>
    );
}

RoomAmenitiesForm.propTypes = {
    defaultValues: PropTypes.shape({
        amenities: PropTypes.array,
    }),

    onSubmit: PropTypes.func,

    isLoading: PropTypes.bool,
};

export default RoomAmenitiesForm;

