const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const User = require("./schemas/user.model.js");

const app = express();
app.use(express.json());
dotenv.config();

const PORT = 5000;
const MONGOURL = "mongodb://localhost:4000";

mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });


app.post("/api/post/users", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});
