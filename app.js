const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const APIRouter = require("./Routes/APIRouter");

const app = express();
const PORT = 6600;
const MONGODB_URI =
  "mongodb+srv://Admin:768028@mymongodb.ltaknvt.mongodb.net/askDrdb?retryWrites=true&w=majority";

//using cors
app.use(cors());

// we need to convert string data to json
app.use(express.json());
// post method only get data from post not in get and params
app.use(express.urlencoded({ extended: false }));

// how to use APIRouter in app.js
app.use("/", APIRouter);

// checking DB confection using mongoose before starting server
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Data Base confection successful", true); //DB connection message
    app.listen(PORT, function () {
      console.log("Server is running on port ::", PORT);
    });
  })
  .catch((error) => {
    console.log("DB connection Error!! ::", error);
  });
