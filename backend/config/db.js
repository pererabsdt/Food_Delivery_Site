import mongoose from "mongoose";

export const connectDB = async () => {
    const mongoURI = process.env.MONGODB_URI;
    if (!mongoURI) {
        console.error("MongoDB URI not found in environment variables");
        process.exit(1);
    }

    await mongoose.connect(mongoURI)
        .then(() => console.log("DB Connected"))
        .catch((err) => {
            console.error("MongoDB Connection Error:", err);
            process.exit(1);
        });
};
