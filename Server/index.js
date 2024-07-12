const express = require("express");
const mongoose = require("mongoose");

//cors helps in communicating with the Frontend
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 3000;
const uri = process.env.ATLAS_URI;

const app = express();

//middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {});

app.listen(PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}`);
});

//connecting to the Database

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`Connected to mongoDB `);
  })
  .catch((err) => console.log("connection error: " + err.message));
