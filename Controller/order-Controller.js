const { request, response } = require("express");
const orderModel = require("../Model/order-Model");

module.exports.saveOrders = async (request, response) => {
  try {
    let data = await request.body;

    var newOrder = new orderModel({
      order_id: data.order_id,
      name: data.name,
      mobile: data.mobile,
      email: data.email,
    });
    await newOrder.save();
    response.status(200).send({
      status: true,
      msg: "order palace successfully",
    });
  } catch (error) {
    response.status(500).send({
      status: false,
      error,
    });
  }
};

// get order history by mobile number for order history
module.exports.getOrderDetails = async (request, response) => {
  try {
    let { email } = request.body;
    let result = await orderModel.find({ email });
    response.status(200).send({
      status: true,
      ordersInfo: result,
    });
    console.log(result);
  } catch (error) {
    response.status(500).send({
      status: false,
      error,
    });
  }
};
