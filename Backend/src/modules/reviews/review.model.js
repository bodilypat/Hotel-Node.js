//src/modules/reviews/review.model.js 
import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        hotel: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hotel",
            required: true,
        },

        booking: {
            type: mongooose.Schema.Types.ObjectId,
            ref: "booking",
            required: true,
        }, 

        rating: {
            type: Number,
            required: true,
            required: true,
            min: 1,
            max: 5,
        },

        comment: {
            type: String,
            trim: true,
        },

        isApproved: {
            type: String,
            default: true,
        },
    },
    
    {
        timestamps: true,
    }
);

 export default mongoose.model("Review", reviewSchema);
 