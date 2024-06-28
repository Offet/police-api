import mongoose from "mongoose";

import "dotenv/config"

// const mongoUri = process.env.Mongo_url

// mongoose.connect(mongouri)


const mongoUri = process.env.Mongo_url

// exporting to make it accessible to any file that wants to import it
export const dbConection = () => {
    mongoose.connect(mongoUri).then(() => {
        console.log("Database is connected!")
    });
}