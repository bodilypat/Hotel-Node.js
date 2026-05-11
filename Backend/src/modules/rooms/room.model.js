//src/modules/rooms/roo.model.js 
import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(
    {
        hotel: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hotel",
            required: true,
        },
        
        roomNumber: {
            type: String,
            required: true,
            trim: true,
        },

        type: {
            type: String,
            enum: [
                "SINGLE",
                "DOUBLE",
                "DELUXE",
                "SUITE",
            ],
            required: true,
        },

        price: {
            type: Number,
            required: true,
        },

        capacity: {
            type: Number,
            required: true,
        },

        floor: {
            type: Number,
        },

        amenities: [
            {
                type: String,
            }
        ],

        images: [
            {
                type: String,
            }
        ],

        status: {
            type: String,
            enum: [
                "AVAILABLE",
                "BOOKED",
                "MAINTENANCE",
                "CLEANING"
            ],
            default: "AVAILABLE",
        },

        isActive: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    }
);

roomSchema.index({
    hotel: 1,
    roomNumber: 1,
});

export default mongoose.model(
    "Room",
    roomSchema
);

