import mongoose from "mongoose";  

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);  
        
        console.log("MONGOOB CONNECTED SUCESSFULLY");
    } catch (error) {
        console.log("Error connecting to MONGOOB", error);
        process.exit(1);
    }
};

