import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://dulitha22:0079700@cluster0.jynopi3.mongodb.net/Food_Delivery_Site').then(()=>console.log("DB Connected"));
}