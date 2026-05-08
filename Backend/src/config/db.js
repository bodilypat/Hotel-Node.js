//src/config/db.js 
import mongoose from 'mongoose';
import env from './env.js';

mongoose.set('strictQuery', true);

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(env.MONGO_URI, {
            maxPoolSize: 20,
            minPoolSize: 5,
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;

