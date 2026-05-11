//src/modules/users/user.model.js 
import mongoose from "mongoose";

const userSchema = new mongoose.schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: true,
            select: false,
        },
        phone: {
            type: String,
        },
        avatar: {
            type: String,
        },
        role: {
            type: String,
            enum: [
                "SUPPER_ADMIN",
                "ADMIN",
                "MANAGER",
                "RECEPTIONIST",
                "CUSTOMER",
            ],
            default: "CUSTOMER",
        },

        isActive: {
            type: Boolean,
            default: true,
        },
        lastLogin: {
            type: Date,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model(
    "User",
    userSchema
);
