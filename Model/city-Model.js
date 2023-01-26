const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const citySchema = new Schema({
  city_id: { type: Number },
  city: { type: String },
});

const cityModel = mongoose.model("city", citySchema, "citys");

module.exports = cityModel;
