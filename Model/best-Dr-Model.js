const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bestDrSchema = new Schema({});
const bestDrModel = mongoose.model("best-doctor", bestDrSchema, "best-doctors");

module.exports = bestDrModel;
