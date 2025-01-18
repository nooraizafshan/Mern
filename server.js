const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
// app.use=require("cors");
app.use(cors());

dotenv.config();
const userRouter = require("./routes/userroutes")
app.use(express.json());
mongoose.connect(process.env.URL)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(process.env.PORT || 8000, (err) => {
            if (err) console.log(err);
            console.log("Running successfully on port", process.env.PORT || 8000);
        });
    })
    .catch((error) => {
        console.log("Error connecting to MongoDB", error);
    });
    
app.use(userRouter);



