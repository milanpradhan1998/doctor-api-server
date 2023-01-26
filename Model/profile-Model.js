const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const profileSchema = new Schema({
  _id: { type: ObjectId },
  name: { type: String },
  cetagory: { type: String },
  cetagory_id: { type: Number },
  time: { type: String },
  rating: { type: String },
  fee: { type: Number },
  city_id: { type: Number },
  city: { type: String },
  locatin: { type: String },
  p_image: { type: String },
  gallary: { type: Array },
  bg_images: { type: String },
  sort: { type: Number },
});

const profileModel = mongoose.model("profile", profileSchema, "profiles");

module.exports = profileModel;
