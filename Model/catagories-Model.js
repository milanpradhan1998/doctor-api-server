const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const catagoriesSchema = new Schema({});

const catagoriesModel = mongoose.model(
  "catagory",
  catagoriesSchema,
  "catagorys"
);

module.exports = catagoriesModel;
