import mongoose from "mongoose";

const connectDB = () => {

    const isConnected = mongoose.connect('mongodb+srv://wasif:kingofnoobs@cluster0.fmaocsf.mongodb.net/test');

    if (isConnected) {
        console.log('DB COnnected Successfully')
    } else {
        console.log('Error Establishing Connection With Database')
    }

}

export default connectDB