const { request, response } = require("express");
const cityModel = require("../Model/city-Model");

module.exports.getCityList = async (request, response) => {
  try {
    let result = await cityModel.find();
    response.status(200).send({
      status: true,
      city: result,
    });
  } catch (error) {
    response.status(500).send({
      status: false,
      error,
    });
  }
};
