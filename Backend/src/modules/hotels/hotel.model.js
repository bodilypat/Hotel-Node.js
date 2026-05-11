//src/modules/hotels/hotel.model.js 
import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        description: {
            type: String,
        },
        
        address: {
            type: String,
            required: true,
        },
        
        city: {
            type: String, 
            required: true,
        },

        state: {
            type: String,
            required: true,
        },

        country: {
            type: String,
            required: true,
        },

        zipCode: {
            type: String,
        },

        phone: {
            type: String,
        },
        email: {
            type: String,
        },

        rating: {
            type: String,
            default: 0,
        },

        amenities: [
            {
                type: String,
            },
        ],

        images: [
            {
                type: String,
            }
        ],

        owner: {
            type: mongoose.Schema.Type.ObjectId,
            ref: "User",
        },

        isActive: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamp: true,
    }
);

export default  mongoose.model(
    "Hotel",
    hotelSchema
);

