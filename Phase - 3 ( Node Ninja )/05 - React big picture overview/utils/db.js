import mongoose from "mongoose";

const db = () => {
    mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("connected to db");
    })
    .catch((err) => {
        console.log(err);
        console.log("connection failed");
    })
}

export default db;