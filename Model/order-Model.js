const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  order_id: { type: String },
  name: { type: String },
  mobile: { type: Number },
  email: { type: String },
  order_details: { type: Object },
  payment_id: { type: String },
  payment_status: { type: Boolean },
  totalAmount: { type: Number },
});

const orderModel = mongoose.model("save-order", orderSchema, "save-orders");
module.exports = orderModel;
