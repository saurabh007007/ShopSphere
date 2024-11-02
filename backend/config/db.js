import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`Successfully connected to MongoDB :) 👍`) 

    } catch (error) {
        console.error(`Error ${error.messsage}`)
        process.exit(1)
    }
}

export default connectDB;