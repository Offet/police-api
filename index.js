import express from "express";
import statementRouter from "./router/statement.js";
import 'dotenv/config'
// import mongoose from "mongoose";
import { dbConection } from "./config/db.js";  

// initialise express
const app = express();

app.use(express.json());
app.use(statementRouter);

// const mongoUri = process.env.Mongo_url
// mongoose.connect(mongoUri).then(() => {
//     console.log("Database is connected!")
// });


//  Defining routes to get all statements
// app.get("/statement", (req, res) => {
//     res.json("Find all your statements here!");
// });

// app.post("/client", (req, res) => {
//     res.json("Find all your clients here!");
// });


// call dbConnection() function
dbConection()

//  Listen for incoming requests 
app.listen(3300, () => {
    console.log("App is listening on port 3300");
});