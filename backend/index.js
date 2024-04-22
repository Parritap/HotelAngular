import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGO_URL;

mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen (PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
  })
  .catch((err) => {
    console.log(err);
  });
