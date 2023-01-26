const bestDrModel = require("../Model/best-Dr-Model");
const { request, response } = require("express");

module.exports.getBestDr = async (request, response) => {
  try {
    let result = await bestDrModel.find();
    response.status(200).send({
      status: true,
      doctors: result,
    });
  } catch (error) {
    response.status(500).send({
      status: false,
      error,
    });
  }
};
